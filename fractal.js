/* eslint-env es6, node */
'use strict';
const fractal = require( '@frctl/fractal' ).create();

// Handlebars
fractal.components.engine(require('@frctl/handlebars')({
  helpers: {
    increment: function(number, amount) {
      // Parsing the number to ensure it was not provided as string.
      return parseInt(number) + amount;
    },
    ifEquals: function (v1, v2, options) {
      if (v1 === v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  }
}));
fractal.components.set( 'ext', '.handlebars' );

// Twig
// fractal.components.engine(require('@frctl/twig')({handlePrefix: '#DONTUSE', importContext: true}));
// fractal.components.set( 'ext', '.twig' );

const mandelbrot = require('@frctl/mandelbrot');
const myCustomisedTheme = mandelbrot({
    skin: "olive"
});

fractal.set( 'project.title', 'KOOP componentenbibliotheek' );
fractal.components.set( 'path', `${__dirname}/src` );
fractal.components.set( 'default.preview', '@preview.default' );
fractal.web.set( 'builder.dest', `${__dirname}/component-library` );
fractal.web.set( 'static.path', `${__dirname}/public` );
fractal.web.theme(myCustomisedTheme);

module.exports = fractal;
