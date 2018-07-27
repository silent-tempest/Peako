'use strict';

var isObjectLike = require( './is-object-like' ),
    cssNumbers   = require( './css-numbers' ),
    getStyle     = require( './get-style' ),
    camelize     = require( './camelize' ),
    access       = require( './access' );

module.exports = function style ( key, val ) {

  var px = 'do-not-add';

  // Compute px or 'px' to `val` now.

  if ( typeof k === 'string' && ! cssNumbers[ camelize( key ) ] ) {
    if ( typeof val === 'number' ) {
      val += 'px';
    } else if ( typeof val === 'function' ) {
      px = 'got-a-function';
    }
  } else if ( isObjectLike( key ) ) {
    px = 'got-an-object';
  }

  return access( this, function ( element, key, val, chainable ) {
    if ( element.nodeType !== 1 ) {
      return null;
    }

    key = camelize( key );

    if ( ! chainable ) {
      return getStyle( element, key );
    }

    if ( typeof val === 'number' && ( px === 'got-a-function' || px === 'got-an-object' && ! cssNumbers[ key ] ) ) {
      val += 'px';
    }

    element.style[ key ] = val;
  }, key, val, arguments.length > 1, null );
};