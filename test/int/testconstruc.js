// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0, no-new: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(GeoIP) {
  describe('Test jGeoIP2 constructor:', () => {
    it('Expects the constructor to throw an error if the db is undefined.', () => {
      let test;
      try {
        test = false;
        new GeoIP();
      } catch (e) {
        test = true;
      }
      expect(test).to.be.equal(true);
    });

    it('Expects it to throw an error if the db is unvalid.', () => {
      let test;
      try {
        test = false;
        new GeoIP('aaaa');
      } catch (e) {
        test = true;
      }
      expect(test).to.be.equal(true);
    });
  });
};
