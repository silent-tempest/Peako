'use strict';

var upperFirst = require( './upper-first' );

// camelCase( 'background-repeat-x' ); // -> 'backgroundRepeatX'

module.exports = function camelCase ( string ) {

  var words = string.match( /[0-9a-z]+/gi );

  var result, i, l;

  if ( ! words ) {
    return '';
  }

  result = words[ 0 ].toLowerCase();

  for ( i = 1, l = words.length; i < l; ++i ) {
    result += upperFirst( words[ i ] );
  }

  return result;

};
