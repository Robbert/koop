/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

/**
 * Feature test
 * @return {Boolean} Returns true if required methods and APIs are supported by the browser
 */
var supports = function () {
  if (!document.addEventListener && !document.querySelector('body')) {
    return false;
  }
  return true;
};

(function () {
  'use strict';

  onl.decorate({
    'init-form-validation': function (element) {
      new formvalidation(element);
    }
  });

  var formvalidation = function (element) {
    this.element = element;
    this.config = JSON.parse(this.element.getAttribute('data-config')) || [];

    // Classes and Selectors
    this.config.classErrorField = this.config.classErrorField || 'has-error';
    this.config.classValidField = this.config.classValidField || 'is-valid';
    this.config.classErrorContainer = this.config.classErrorContainer || 'form__error';
    this.config.classValidContainer = this.config.classValidContainer || 'form__success';
    this.config.classErrorsContainer = this.config.classErrorsContainer || 'form__errors';

    this.errors = [];

    this.config.txtIntroErrorsContainer = this.config.txtIntroErrorsContainer || 'Er zijn één of meerdere velden niet of niet juist ingevuld. Controleer uw gegevens en verstuur het formulier opnieuw.';
    this.config.messageLabelValid = this.config.messageLabelValid || "Correct";

    // Messages
    this.config.messageValueMissing = this.config.messageValueMissing || "Het veld '{label}' mag niet leeg zijn.";
    this.config.messageValueMissingCheckbox = this.config.messageValueMissingCheckbox || "Het veld '{label}' is verplicht.";
    this.config.messageValueMissingRadio = this.config.messageValueMissingRadio || "Kies van veld '{label}' een waarde.";
    this.config.messageValueMissingSelect = this.config.messageValueMissingSelect || "Selecteer van veld '{label}' een waarde.";
    this.config.messageValueMissingSelectMulti = this.config.messageValueMissingSelectMulti || "Selecteer van veld '{label}' minstens één waarde.";
    this.config.messageTypeMismatchEmail = this.config.messageTypeMismatchEmail || "Vul in veld '{label}' een correct e-mailadres in.";
    this.config.messageTypeMismatchURL = this.config.messageTypeMismatchURL || "Vul in veld '{label}' een correct website-adres in.";
    this.config.messageTooShort = this.config.messageTooShort || "Gebruik in veld '{ label }' minimaal {minLength} karakters. Op dit moment gebruik je {length} karakter(s).";
    this.config.messageTooLong = this.config.messageTooLong || "Het is in veld '{label}' niet toegestaan meer dan {maxLength} karakters te gebruiken. Op dit moment gebruik je {length} karakter(s).";
    this.config.messagePatternMismatch = this.config.messagePatternMismatch || "Het veld '{label}' voldoet niet aan de eisen.";
    this.config.messageBadInput = this.config.messageBadInput || "Vul in veld '{label}' een nummer in.";
    this.config.messageStepMismatch = this.config.messageStepMismatch || "Vul in veld '{label}' een correcte waarde in.";
    this.config.messageRangeOverflow = this.config.messageRangeOverflow || "Vul in veld '{label}' een waarde in dat lager is dan {max}.";
    this.config.messageRangeUnderflow = this.config.messageRangeUnderflow || "Vul in veld '{label}' een waarde in dat hoger is dan {min}.";
    this.config.passwordMismatch = this.config.passwordMismatch || "Het veld '{label}' voldoet niet aan de beveiligingseisen.";
    this.config.passwordRepeatMismatch = this.config.passwordRepeatMismatch || "Het wachtwoord in veld '{label}' is niet gelijk aan het nieuwe wachtwoord.";
    this.config.messageGeneric = this.config.messageGeneric || "Het veld '{label}' is niet correct ingevuld.";

    this.init();
  };

  formvalidation.prototype.init = function() {
    // feature test
    if (!supports()) return;

    // Add the `novalidate` attribute to all forms
    this.addNoValidate();

    // Event listeners
    this.element.addEventListener('blur', function (e) { this.blurHandler(e) }.bind(this), true);
    this.element.addEventListener('click', function (e) { this.clickHandler(e) }.bind(this), false);
    this.element.addEventListener('submit', function (e) { this.submitHandler(e) }.bind(this), false);

  };

  formvalidation.prototype.addNoValidate = function () {
    this.element.setAttribute('novalidate', true);
  };

  formvalidation.prototype.getClosest = function (elem, selector) {
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };

  formvalidation.prototype.hasErrorInSubselection = function (subselection, options) {
    var subselectionSummary = subselection.querySelector('.subselection__summary');

    // check if it's required;
    if (subselectionSummary.classList.contains('required')){

      // check if it has active filters;
      var subselectionSummaryItems = subselectionSummary.childNodes;
      if (subselectionSummaryItems.length > 0) {
        return false;
      } else {
        return this.config.messageValueMissing;
      }
    }
    return false;
  }

  formvalidation.prototype.hasError = function (field, options) {
    // Don't validate submits, buttons, file and reset inputs, and disabled fields
    if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button' || field.type === undefined || field.type === 'fieldset' || field.type === 'a' || field.type === '') return;

    // Get validity
    var validity = field.validity;

    var label = this.element.querySelector('[for="' + field.getAttribute('id') + '"]');
    if(label){
      label = label.innerHTML;
    } else {
      label = '';
    }

    // If field is invalid by extern validation (ie. password validator)
    if (field.classList.contains('pw-invalid')) return this.config.passwordMismatch.replace("{label}", label);
    if (field.classList.contains('pw-invalid-repeat')) return this.config.passwordRepeatMismatch.replace("{label}", label);


    // in case of use of default patterns (number, email, dutch zipcode)
    if (field.getAttribute('data-pattern-type')) {
      if (field.getAttribute('data-pattern-type') === 'number') {
        var pattern = /^\d+$/;
      }
      if (field.getAttribute('data-pattern-type') === 'email') {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      }
      if (field.getAttribute('data-pattern-type') === 'zipcode') {
        var pattern = /^\d{4} ?[a-z]{2}$/i;
      }
      if (pattern.test(field.value)) {
        return;
      } else {
        if (field.value === '') {
          return this.config.messageValueMissing.replace('{label}', label);
        }
        if (field.hasAttribute('title')) return field.getAttribute('title');
        return this.config.messagePatternMismatch.replace('{label}', label);;
      }
    }

    // If valid, return null
    if (validity.valid) return;

    // If field is required and empty
    if (validity.valueMissing) {
      if (field.type === 'checkbox') return this.config.messageValueMissingCheckbox.replace('{label}', label);
      if (field.type === 'radio') return this.config.messageValueMissingRadio.replace('{label}', label);
      if (field.type === 'select-multiple') return this.config.messageValueMissingSelectMulti.replace('{label}', label);
      if (field.type === 'select-one') return this.config.messageValueMissingSelect.replace('{label}', label);

      return this.config.messageValueMissing.replace('{label}', label);
    }

    // If not the right type
    if (validity.typeMismatch) {
      if (field.type === 'email') return this.config.messageTypeMismatchEmail.replace('{label}', label);;
      if (field.type === 'url') return this.config.messageTypeMismatchURL.replace('{label}', label);;
    }

    // If too short
    if (validity.tooShort) return this.config.messageTooShort.replace('{minLength}', field.getAttribute('minLength')).replace('{length}', field.value.length).replace('{label}', label);;

    // If too long
    if (validity.tooLong) return this.config.messageTooLong.replace('{minLength}', field.getAttribute('maxLength')).replace('{length}', field.value.length).replace('{label}', label);;

    // If number input isn't a number
    if (validity.badInput) return this.config.messageBadInput.replace('{label}', label);;

    // If a number value doesn't match the step interval
    if (validity.stepMismatch) return this.config.messageStepMismatch.replace('{label}', label);;

    // If a number field is over the max
    if (validity.rangeOverflow) return this.config.messageRangeOverflow.replace('{max}', field.getAttribute('max')).replace('{label}', label);;

    // If a number field is below the min
    if (validity.rangeUnderflow) return this.config.messageRangeUnderflow.replace('{min}', field.getAttribute('min')).replace('{label}', label);;

    // If pattern doesn't match
    if (validity.patternMismatch) {

      // If pattern info is included, return custom error
      if (field.hasAttribute('title')) return field.getAttribute('title').replace('{label}', label);;

      // Otherwise, generic error
      return this.config.messagePatternMismatch.replace('{label}', label);;

    }

    // If all else fails, return a generic catchall error
    return this.config.messageGeneric.replace('{label}', label);;

  };

  formvalidation.prototype.showErrorSubselection = function (subselection) {
    var subselectionTrigger = subselection.querySelector('.subselection__trigger');
    var label = subselection.parentNode.querySelector('.form__sublegend');
    if(label){
      label = label.innerHTML;
    } else {
      label = '';
    }
    this.showMessage("error", subselectionTrigger, this.config.messageValueMissingCheckbox.replace('{label}', label), 'subselection');
  }

  formvalidation.prototype.showMessage = function (messageType, field, error, options) {
    /*
      Available values:
      messageType: "error", "success".
    */
    var firstOptionId = false;
    var labelText;
    var motherLabel;
    var message;
    var label;

    var subselection = this.getClosest(field, '.subselection');
    if (subselection) {
      this.removeMessage(field, subselection);
    } else {
      this.removeMessage(field);
    }

    var classStateOldField = this.config.classValidField;
    var classStateNewField = this.config.classErrorField;
    var classMessageContainer = this.config.classErrorContainer;
    var prefixId = 'message';
    if(messageType === "success") {
      classStateOldField = this.config.classErrorField;
      classStateNewField = this.config.classValidField;
      classMessageContainer = this.config.classValidContainer;
      prefixId = 'message';
    }

    // Add/remove state class to field
    if (field.type === 'select-one'){
      field.parentNode.classList.add(classStateNewField);
      field.parentNode.classList.remove(classStateOldField);
    } else {
      field.classList.add(classStateNewField);
      field.classList.remove(classStateOldField);
    }

    // If the field is a radio button and part of a group, error all and get the last item in the group
    if (field.type === 'radio' && field.name) {
      var group = document.getElementsByName(field.name);
      if (group.length > 0) {
        for (var i = 0; i < group.length; i++) {
          if (group[i].form !== field.form) continue; // Only check fields in current form

          if (messageType !== "success") {
            group[i].classList.add(this.config.classErrorField);
            group[i].classList.remove(this.config.classValidField);
          }

          // if type = radio, get id of first radio
          if(i === 0){
            firstOptionId = group[i].getAttribute('id');
          }
        }
        field = group[group.length - 1];
      }
    }

    // Get field id or name
    var id;
    if (subselection) {
      var trigger = subselection.querySelector('.subselection__trigger');
      id = trigger.getAttribute('id');
    } else {
      id = field.id || field.name;
    }

    if (!id) return;

    // create message container;
    message = document.createElement('div');
    message.classList.add('form__message');
    message.classList.add(classMessageContainer);
    message.id = prefixId + '-for-' + id;

    // If the field is a radio button or checkbox, insert error after the label
    if (field.type === 'radio' || field.type === 'checkbox') {
      if (subselection) {
        label = subselection.querySelector('.subselection__trigger');
        firstOptionId = label.getAttribute('id');
      } else {
        label = field.form.querySelector('label[for="' + id + '"]') || this.getClosest(field, 'label');
      }

      if (label) {
        label.parentNode.insertBefore(message, label.nextSibling);
        motherLabel = this.getClosest(field, '[data-radiogroup-title]');
        if (motherLabel) {
          labelText = motherLabel.getAttribute('data-radiogroup-title');
        } else {
          labelText = label.textContent;
        }
      }
    }

    // if custom-select; insert one level higher.
    if (field.type === 'select-one') {
      label = field.form.querySelector('label[for="' + id + '"]') || this.getClosest(field, 'label');
      if (label) {
        var parent = field.parentNode;
        parent.parentNode.insertBefore(message, parent.nextSibling);
        labelText = label.textContent;
      }
    }

    // Otherwise, insert it after the field
    if (!label) {
      field.parentNode.insertBefore(message, field.nextSibling);

      // options = given in function;
      if(options === 'subselection'){
        labelText = field.textContent;
      } else {
        var parent = field.parentNode;
        if(field.parentNode.classList.contains('datepicker')){
          parent = parent.parentNode;
        }
        labelText = parent.querySelector('label').textContent;
      }
    }

    // if subselection, use different ID;
    if (firstOptionId){
      this.errors.push({ "id": firstOptionId, "label": labelText });
    } else {
      // all others;
      this.errors.push({ "id": field.getAttribute('id'), "label": labelText });
    }

    // Add ARIA role to the field
    field.setAttribute('aria-describedby', prefixId + '-for-' + id);

    // Fill state container
    message.innerHTML = error;

  };

  formvalidation.prototype.markFieldValidInSummary = function (field, options) {
    console.log('markFieldValidInSummary', field);
    var fieldId;

    if(this.getClosest(field, '.subselection')){
      // is subselection
      var sub = this.getClosest(field, '.subselection');
      var subTrigger = sub.querySelector('.subselection__trigger');
      fieldId = subTrigger.getAttribute('id');
    } else {
      if (field.type === 'radio' && field.name) {
        var group = document.getElementsByName(field.name);
        if (group.length > 0) {
          for (var i = 0; i < group.length; i++) {
            if (group[i].form !== field.form) continue; // Only check fields in current form
            group[i].classList.remove(this.config.classErrorField);
          }
          field = group[0];
        }
      }
      fieldId = field.getAttribute('id')
    }
    var errorsContainerListItems = this.element.querySelectorAll('.' + this.config.classErrorsContainer + '> ul li');
    for (var i = 0; i < errorsContainerListItems.length; i++){
      if (errorsContainerListItems[i].getAttribute('data-id') === fieldId) {
        errorsContainerListItems[i].childNodes[0].classList.add('line-through');
      }
    }
  }

  formvalidation.prototype.IsFieldMarkedValid = function (field) {
    // console.log('field', field);

    var id = field.getAttribute('id');
    var validMessage = this.element.querySelector("#message-for-" + id);
    if (validMessage){
      return true;
    } else {
      return false;
    }

    // var subselection = this.getClosest(field, '.subselection');
    // if (subselection){
    //   var subselectionSummary = sub.querySelector('.subselection__summary');
    // } else {
    //   var parent = field.parentNode;
    //   if (parent.querySelector('.form__success')) {
    //     return true;
    //   }
    //   if (parent.classList.contains('select-custom')) {
    //     console.log('1');
    //     console.log('parentNode', parent.parentNode);
    //     console.log('parentNode', parent.parentNode.querySelector('.form__success'));
    //     var parentparent = parent.parentNode;
    //     if (parentparent.querySelector('.form__success')) {
    //       console.log('2');
    //       return true;
    //     }
    //   }
    //   return false;
    // }
  };

  formvalidation.prototype.markFieldValid = function (field, options) {
    field.classList.add('is-valid');

    // this.showValidMessage(field);
  }
  /*
  formvalidation.prototype.showValidMessage = function (field, options) {
    var id = field.getAttribute('id');
    var messageValid = document.createElement('div');
    messageValid.id = 'validmessage-for-' + id;
    messageValid.classList.add('form__success');
    messageValid.innerHTML = this.config.messageValid || 'Correct';

    // Add ARIA role to the field
    field.setAttribute('aria-describedby', 'validmessage-for-' + id);

    var parent = field.parentNode;
    if (parent.classList.contains('select-custom')) {
      parent.parentNode.insertBefore(messageValid, parent.nextSibling);
    } else {
      field.parentNode.insertBefore(messageValid, field.nextSibling);
    }
  }
  */

  formvalidation.prototype.removeFieldValid = function(field) {
    var id = field.getAttribute('id');
    var message = this.element.querySelector("#message-for-" + id);
    message.parentNode.removeChild(message);
  }

  formvalidation.prototype.removeMessage = function (field, subselection, options) {
    var messageValid;
    console.log('removeMessage', field);

    // var classStateOldField = this.config.classValidField;
    // var classStateNewField = this.config.classErrorField;
    // var classMessageContainer = this.config.classErrorContainer;
    // var prefixId = 'messageerror';
    // if (messageType === "success") {
    //   classStateOldField = this.config.classErrorField;
    //   classStateNewField = this.config.classValidField;
    //   classMessageContainer = this.config.classValidContainer;
    //   prefixId = 'messagesuccess';
    // }

    // Remove ARIA role from the field
    field.removeAttribute('aria-describedby');

    // Remove error class to field
    if (field.type === 'select-one') {
      field.parentNode.classList.remove(this.config.classErrorField);
      field.parentNode.classList.remove(this.config.classValidField);
    } else {
      field.classList.remove(this.config.classErrorField);
      field.classList.remove(this.config.classValidField);
    }


    // If the field is a radio button and part of a group, remove error from all and get the last item in the group
    if (field.type === 'radio' && field.name) {
      var group = document.getElementsByName(field.name);
      if (group.length > 0) {
        for (var i = 0; i < group.length; i++) {
          if (group[i].form !== field.form) continue; // Only check fields in current form
          group[i].classList.remove(this.config.classErrorField);
        }
        field = group[group.length - 1];
      }
    }

    // Get field id or name
    // var id = field.id || field.name;
    // if (!id) return;

    // Check if an error message is in the DOM
    var message;
    // var subselection = this.getClosest(field, '.subselection');
    console.log('subselection', subselection);
    if (subselection) {
      console.log('ik ben onderdeel van een sub');
      message = subselection.querySelector('.form__message');
    } else {
      message = this.element.querySelector('#message-for-' + field.id);
      // console.log('field', field);
      // console.log('field', field.nodeName);
      // var nodeName = field.nodeName;

      // if(nodeName === "SELECT") {
      //   var parent = field.parentNode;
      //   message = parent.parentNode.querySelector('.form__message');
      // } else {
      //   message = field.parentNode.querySelector('.form__message');
      // }
    }


    if (!message) return;

    // remove error div from DOM;
    message.parentNode.removeChild(message);

    /*
    // If so, hide it
    message.innerHTML = '';

    message.style.display = 'none';
    message.style.visibility = 'hidden';
*/
    // After remove error callback
    // this.config.afterRemoveError(field);

  };

  formvalidation.prototype.removeErrorFromErrors = function (id) {
    var id = id;

    this.errors = this.errors.filter(function (obj) {
      return obj.id !== id;
    });
  }
  formvalidation.prototype.pushErrorToErrors = function (el, error) {
    var id = el.getAttribute('id');
    this.errors = this.errors.filter(function (obj) {
      return obj.id !== id;
    });

    var label = el.parentNode.querySelector('label').innerHTML || 'label';
    this.errors.push({ "id": el.getAttribute('id'), "label": label, "error": error });
  }

  formvalidation.prototype.addErrorToErrors = function (el, error) {
    var id = id;

    this.pushErrorToErrors(el, error);
    this.showErrorSummary();
  }

  formvalidation.prototype.showErrorSummary = function () {
    var errorsContainer = this.element.querySelector('.' + this.config.classErrorsContainer);

    if (!errorsContainer) {
      errorsContainer = document.createElement('div');
      errorsContainer.setAttribute('tabindex', '0')
      errorsContainer.classList.add(this.config.classErrorsContainer);
      this.element.insertBefore(errorsContainer, this.element.childNodes[0]);

      var errorsContainerIntro = document.createElement('p');
      errorsContainerIntro.classList.add('form__errors__heading');
      errorsContainerIntro.innerHTML = this.config.txtIntroErrorsContainer;
      errorsContainer.appendChild(errorsContainerIntro);

      var errorsContainerList = document.createElement('ul');
      errorsContainer.appendChild(errorsContainerList);
    } else {
      var errorsContainerList = this.element.querySelector('.' + this.config.classErrorsContainer + '> ul');
    }

    errorsContainerList.innerHTML = '';

    // clean up errors; remove duplicates.
    this.errors = onl.ui.uniqBy(this.errors, JSON.stringify);
    for (var i = 0; i < this.errors.length; i++) {
      this.appendErrorToErrorsList(this.errors[i]);
    }
  }

  formvalidation.prototype.isRequired = function (field) {
    // regular fields;
    if (field.hasAttribute('required')) {
      return true;
    }

    // subselection;
    var subselection = self.getClosest(field, '.subselection');
    if (subselection) {
      var subselectionRequiredState = subselection.querySelector('.subselection__summary.required');
      if (subselectionRequiredState) {
        return true;
      }
    }

    return false;
  }

  formvalidation.prototype.blurHandler = function (event) {
    var self = this;
    var type = event.target.nodeName;

    if (event.target.type === 'submit' || type === 'DIV') return;

    if (type === 'BUTTON') {

    } else  if (type === 'A'){
      if (event.target.classList.contains('subselection__summaryitem__remove')) {
        var subselection = self.getClosest(event.target, '.subselection');
        setTimeout(function () {
          var error = self.hasErrorInSubselection(subselection);
          if (error) {
            self.showErrorSubselection(subselection);
          } else {
            self.removeMessage(event.target, subselection);
          }
        }, 200);
      }
      return;
    } else {
      // Validate the field
      var error = this.hasError(event.target);

      // If there's an error, show it
      if (error) {
        this.showMessage("error", event.target, error);
        return;
      }

      if (this.isRequired(event.target)) {
        this.showMessage("success", event.target, this.config.messageLabelValid);
        this.markFieldValidInSummary(event.target);
      }

    }
  };

  formvalidation.prototype.clickHandler = function (event) {

    // Only run if the field is a checkbox or radio
    var type = event.target.getAttribute('type');
    if (type == null) {
      type = event.target.tagName;
    }
    if (!(type === 'checkbox' || type === 'radio')) return;

    // Validate the field
    var error = this.hasError(event.target);

    // If there's an error, show it
    if (error) {
      this.showMessage("error", event.target, error);
      return;
    }

    // Otherwise, remove any errors that exist
    if(this.isRequired(event.target)){
      this.showMessage("success", event.target, this.config.messageLabelValid);
      this.markFieldValidInSummary(event.target);
    }

  };



  formvalidation.prototype.appendErrorToErrorsList = function (error) {
    var errorsContainerList = this.element.querySelector('.' + this.config.classErrorsContainer + '> ul');
    var errorMsg = error.label;

    errorMsg = errorMsg.replace("Verplicht", '');

    if (errorsContainerList){
      var item = document.createElement('li');
      var id = error.id || error.getAttribute('id');
      item.setAttribute('data-id', id);

      var link = document.createElement('a');
      link.setAttribute('href', '#'+id);
      link.innerHTML = '<span class="visually-hidden">Spring naar veld: </span>' + errorMsg;

      item.appendChild(link);
      errorsContainerList.appendChild(item);
    }

    //todo: check if empty; <- why?
  }


  formvalidation.prototype.submitHandler = function (event) {
    //reset form;
    this.errors = [];

    // Get all of the form elements
    var fields = event.target.elements;
    var subselections = this.element.querySelectorAll('.subselection__summary.required');

    // Validate each subselection field
    var hasErrors;
    for (var y = 0; y < subselections.length; y++) {
      if (subselections[y].innerHTML === ''){
        this.showErrorSubselection(subselections[y].parentNode);
        if (!hasErrors) {
          hasErrors = subselections[y];
        }
      }
    }

    // Validate each field
    // Store the first field with an error to a variable so we can bring it into focus later
    // var hasErrors;
    for (var i = 0; i < fields.length; i++) {

      var error = this.hasError(fields[i]);
      if (error) {
        // console.log('in submitHandler');
        this.showMessage("error", fields[i], error);
        if (!hasErrors) {
          hasErrors = fields[i];
        }
      }
    }
    if(hasErrors){
      this.showErrorSummary(this.errors);
    }

    // Prevent form from submitting if there are errors or submission is disabled
    if (hasErrors) {
      event.preventDefault();
    }

    // If there are errrors, focus on first element with error
    if (hasErrors) {
      var errorsContainer = this.element.querySelector('.' + this.config.classErrorsContainer);
      errorsContainer.focus();
      return;
    }

    // Otherwise, submit the form
    if (this.config.debug){
      // event.preventDefault();
      console.log('debug: Form submit');
    } else {
      // event.preventDefault();
      // console.log('prod: Form submit');
      this.element.submit();
    }

  };

})();
