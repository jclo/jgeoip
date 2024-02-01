// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0, no-new: 0 */

'use strict';

// -- Vendor Modules
const fs         = require('fs')
    , { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(GeoIP, COUNTRY, IPV4, IPV4TO6MAP, IPV6) {
  describe('Test Country database:', () => {
    it('Expects GeoLite2-Country.mmdb to exist.', () => {
      let file = true;
      try { fs.accessSync(COUNTRY, fs.R_OK); } catch (e) { file = false; }
      expect(file).to.be.equal(true);
    });

    it('Expects GeoLite2-Country.mmdb to be a valid MaxMind\'s database.', () => {
      let test = true;
      try {
        new GeoIP(COUNTRY);
      } catch (e) {
        test = false;
      }
      expect(test).to.be.equal(true);
    });

    describe('Test the method getMetadata():', () => {
      it('Expects the method to return a metadata record.', () => {
        const geoip = new GeoIP(COUNTRY);
        expect(geoip.getMetadata()).to.be.an('object');
      });
    });

    describe('Test the method getRecord():', () => {
      describe(`Test IPv4 address ${IPV4}`, () => {
        let record;

        const geoip = new GeoIP(COUNTRY);
        record = geoip.getRecord(IPV4);

        it('Expects the method to return a record.', () => {
          expect(record).to.be.an('object');
        });

        it('Expects this record to have the property "continent".', () => {
          expect(record).to.have.property('continent');
        });

        it('Expects this record to have the property "country".', () => {
          expect(record).to.have.property('country');
        });

        it('Expects this record to have the property "registered_country".', () => {
          expect(record).to.have.property('registered_country');
        });

        it('Expects the cache to return a record.', () => {
          record = geoip.getRecord(IPV4);
          expect(record).to.be.an('object');
        });
      });

      describe(`Test IPv4-mapped-IPv6 address ${IPV4TO6MAP}`, () => {
        let record;

        const geoip = new GeoIP(COUNTRY);
        record = geoip.getRecord(IPV4TO6MAP);

        it('Expects the method to return a record.', () => {
          expect(record).to.be.an('object');
        });

        it('Expects this record to have the property "continent".', () => {
          expect(record).to.have.property('continent');
        });

        it('Expects this record to have the property "country".', () => {
          expect(record).to.have.property('country');
        });

        it('Expects this record to have the property "registered_country".', () => {
          expect(record).to.have.property('registered_country');
        });

        it('Expects the cache to return a record.', () => {
          record = geoip.getRecord(IPV4TO6MAP);
          expect(record).to.be.an('object');
        });
      });

      describe(`Test IPv6 address ${IPV6}`, () => {
        let record;

        const geoip = new GeoIP(COUNTRY);
        record = geoip.getRecord(IPV6);

        it('Expects the method to return a record.', () => {
          expect(record).to.be.an('object');
        });

        it('Expects this record to have the property "continent".', () => {
          expect(record).to.have.property('continent');
        });

        it('Expects this record to have the property "country".', () => {
          expect(record).to.have.property('country');
        });

        it('Expects this record to have the property "registered_country".', () => {
          expect(record).to.have.property('registered_country');
        });

        it('Expects the cache to return a record.', () => {
          record = geoip.getRecord(IPV6);
          expect(record).to.be.an('object');
        });
      });
    });
  });
};
