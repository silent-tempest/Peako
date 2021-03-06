'use strict';

var isObject = require( '../../is-object' );

describe( 'peako.isObject', function () {
  it( 'returns "false" for "null"', function () {
    isObject( null ).should.be.false;
  } );

  it( 'returns "false" for built-in objects', function () {
    isObject( Math ).should.be.false;
  } );

  it( 'returns "true" for an object', function () {
    isObject( {} ).should.be.true;
  } );
} );
