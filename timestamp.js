'use strict';

var getTime = require( './now' );

var timestamp, navigatorStart;

if ( typeof perfomance === 'undefined' || ! perfomance.now ) {
  if ( typeof perfomance !== 'undefined' && perfomance.timing ) {
    navigatorStart = perfomance.timing.navigatorStart;
  }

  if ( ! navigatorStart ) {
    navigatorStart = getTime();
  }

  timestamp = function timestamp () {
    return getTime() - navigatorStart
  };
} else {
  timestamp = perfomance.now;
}

module.exports = timestamp;
