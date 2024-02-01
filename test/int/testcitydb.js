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
module.exports = function(GeoIP, CITY, IPV4, IPV4TO6MAP, IPV6, PRIVATEIP, FALSEIP4s, FALSEIP6) {
  describe('Test City database:', () => {
    it('Expects GeoLite2-City.mmdb to exist.', () => {
      let file = true;
      try { fs.accessSync(CITY, fs.R_OK); } catch (e) { file = false; }
      expect(file).to.be.equal(true);
    });

    it('Expects GeoLite2-City.mmdb to be a valid MaxMind\'s database.', () => {
      let test = true;
      try {
        new GeoIP(CITY);
      } catch (e) {
        test = false;
      }
      expect(test).to.be.equal(true);
    });

    describe('Test the method getMetadata():', () => {
      it('Expects the method to return a metadata record.', () => {
        const geoip = new GeoIP(CITY);
        expect(geoip.getMetadata()).to.be.an('object');
      });
    });

    describe('Test the method getRecord():', () => {
      describe(`Test IPv4 address ${IPV4}`, () => {
        const geoip = new GeoIP(CITY);
        const record = geoip.getRecord(IPV4);

        it('Expects the method to return a record.', () => {
          expect(record).to.be.an('object');
        });

        // Nota:
        // city, postal and subdivisions have been removed from new city
        // databases for this address at least.

        // it('Expects this record to have the property "city".', () => {
        //   expect(record).to.have.property('city');
        // });

        it('Expects this record to have the property "continent".', () => {
          expect(record).to.have.property('continent');
        });

        it('Expects this record to have the property "country".', () => {
          expect(record).to.have.property('country');
        });

        it('Expects this record to have the property "location".', () => {
          expect(record).to.have.property('location');
        });

        // it('Expects this record to have the property "postal".', () => {
        //   expect(record).to.have.property('postal');
        // });

        it('Expects this record to have the property "registered_country".', () => {
          expect(record).to.have.property('registered_country');
        });

        // it('Expects this record to have the property "subdivisions".', () => {
        //   expect(record).to.have.property('subdivisions');
        // });
      });

      describe(`Test IPv4-mapped-IPv6 address ${IPV4TO6MAP}`, () => {
        const geoip = new GeoIP(CITY);
        const record = geoip.getRecord(IPV4TO6MAP);

        it('Expects the method to return a record.', () => {
          expect(record).to.be.an('object');
        });

        it('Expects this record to have the property "city".', () => {
          expect(record).to.have.property('city');
        });

        it('Expects this record to have the property "continent".', () => {
          expect(record).to.have.property('continent');
        });

        it('Expects this record to have the property "country".', () => {
          expect(record).to.have.property('country');
        });

        it('Expects this record to have the property "location".', () => {
          expect(record).to.have.property('location');
        });

        it('Expects this record to have the property "postal".', () => {
          expect(record).to.have.property('postal');
        });

        it('Expects this record to have the property "registered_country".', () => {
          expect(record).to.have.property('registered_country');
        });

        it('Expects this record to have the property "subdivisions".', () => {
          expect(record).to.have.property('subdivisions');
        });
      });

      // Nota:
      // IPv6 do not return city, postal and subdivisions yet!
      describe(`Test the IPv6 address ${IPV6}`, () => {
        const geoip = new GeoIP(CITY);
        const record = geoip.getRecord(IPV6);

        it('Expects the method to return a record.', () => {
          expect(record).to.be.an('object');
        });

        // it('Expects that this record has the property "city".', () => {
        //   expect(record).to.have.property('city');
        // });

        it('Expects this record to have the property "continent".', () => {
          expect(record).to.have.property('continent');
        });

        it('Expects this record to have the property "country".', () => {
          expect(record).to.have.property('country');
        });

        it('Expects this record to have the property "location".', () => {
          expect(record).to.have.property('location');
        });

        // it('Expects that this record has the property "postal".', () => {
        //   expect(record).to.have.property('postal');
        // });

        it('Expects this record to have the property "registered_country".', () => {
          expect(record).to.have.property('registered_country');
        });

        // it('Expects that this record has the property "subdivisions".', () => {
        //   expect(record).to.have.property('subdivisions');
        // });
      });
    });
  });

  describe('Test the method getRecord() for wrong IPs:', () => {
    let test;
    const geoip = new GeoIP(CITY);

    it(`Expects the method to return null for the Private IP ${PRIVATEIP}.`, () => {
      expect(geoip.getRecord(PRIVATEIP)).to.be.a('null');
    });

    it('Expects it to return null for an undefined address.', () => {
      expect(geoip.getRecord()).to.be.a('null');
    });

    FALSEIP4s.forEach((FALSEIP4) => {
      it(`Expects it to throw an error for the malformed IPv4 address ${FALSEIP4}.`, () => {
        try {
          test = false;
          geoip.getRecord(FALSEIP4);
        } catch (e) {
          test = true;
        }
        expect(test).to.be.equal(true);
      });
    });

    it(`Expects it to throw an error for the malformed IPv6 address ${FALSEIP6}.`, () => {
      try {
        test = false;
        geoip.getRecord(FALSEIP6);
      } catch (e) {
        test = true;
      }
      expect(test).to.be.equal(true);
    });
  });
};
