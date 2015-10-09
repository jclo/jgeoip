/* global describe, it */
/* eslint no-unused-vars: 1 */
'use strict';

// -- Node modules
var fs = require('fs')
  , should = require('chai').should()
  , expect = require('chai').expect
  ;

// -- Local modules
var GeoIP = require('../index.js');

// -- Local constants
var COUNTRY    = '_db/GeoLite2-Country.mmdb'
  , CITY       = '_db/GeoLite2-City.mmdb'
  , IPV4       = '8.8.8.8'
  , IPV6       = '2001:4860:4860::8888'
  , PRIVATEIP  = '192.168.98.1'
  , FALSEIP4   = '8.8.8'
  , FALSEIP6   = '2001:4860:4860:8888'
  ;

describe('jGeoIP2', function() {

  // Country Database.
  describe('Country database', function() {

    // Test if db exist.
    it('Checks if GeoLite2-Country.mmdb exist.', function() {
      var file = true;
      try { fs.accessSync(COUNTRY, fs.R_OK); } catch(e) { file = false; }
      expect(file).to.be.true;
    });

    // Test if valid db.
    it('Checks if GeoLite2-Country.mmdb is a valid MaxMind\'s database.', function() {
      var geoip
        , test = true
        ;

      try {
        geoip = new GeoIP(COUNTRY);
      } catch(e) {
        test = false;
      }
      expect(test).to.be.true;
    });

    // Test db argument.
    it('Checks if undefined db throws an error.', function() {
      var geoip
        , test
        ;

      try {
        test = false;
        geoip = new GeoIP();
      } catch(e) {
        test = true;
      }
      expect(test).to.be.true;
    });

    // Test db argument.
    it('Checks if false db throws an error.', function() {
      var geoip
        , test
        ;

      try {
        test = false;
        geoip = new GeoIP('aaaa');
      } catch(e) {
        test = true;
      }
      expect(test).to.be.true;
    });

    // Test metadata
    it('Checks if it returns a metadata record.', function() {
      var geoip = new GeoIP(COUNTRY);
      expect(geoip.getMetadata()).to.be.an('object');
    });

    // Test IPV4
    describe('IPV4 ' + IPV4, function() {
      var geoip = new GeoIP(COUNTRY);
      var record = geoip.getRecord(IPV4);
      record = geoip.getRecord(IPV4);

      // Test if it returns a record.
      it('Checks if it returns a record.', function() {
        expect(record).to.be.an('object');
      });

      // Test the record.
      it('Checks if the record has the property "continent".', function() {
        expect(record).to.have.property('continent');
      });

      it('Checks if the record has the property "country".', function() {
        expect(record).to.have.property('country');
      });

      it('Checks if the record has the property "registered_country".', function() {
        expect(record).to.have.property('registered_country');
      });

      it('checks if cache returns a record', function() {
        record = geoip.getRecord(IPV4);
        expect(record).to.be.an('object');
      })
    });


    // Test IPV6
    describe('IPV6 ' + IPV6, function() {
      var geoip = new GeoIP(COUNTRY);
      var record = geoip.getRecord(IPV6);

      // Test if it returns a record.
      it('Checks if it returns a record.', function() {
        expect(record).to.be.an('object');
      });

      // Test the record.
      it('Checks if the record has the property "continent".', function() {
        expect(record).to.have.property('continent');
      });

      it('Checks if the record has the property "country".', function() {
        expect(record).to.have.property('country');
      });

      it('Checks if the record has the property "registered_country".', function() {
        expect(record).to.have.property('registered_country');
      });

      it('checks if cache returns a record', function() {
        record = geoip.getRecord(IPV6);
        expect(record).to.be.an('object');
      });
    });

    // Test private IP
    describe('Private IP ' + PRIVATEIP, function() {
      var geoip = new GeoIP(COUNTRY);
      var record = geoip.getRecord(PRIVATEIP);

      it('Checks if a private IP returns null.', function() {
        expect(record).to.be.null;
      });
    });
  });


  // City Database.
  describe('City database', function() {

    // Test if db exist.
    it('Checks if GeoLite2-City.mmdb exist.', function() {
      var file = true;
      try { fs.accessSync(CITY, fs.R_OK); } catch(e) { file = false; }
      expect(file).to.be.true;
    });

    // Test if valid db.
    it('Checks if GeoLite2-City.mmdb is a valid MaxMind\'s database.', function() {
      var geoip
        , test = true
        ;

      try {
        geoip = new GeoIP(CITY);
      } catch(e) {
        test = false;
      }
      expect(test).to.be.true;
    });

    it('Checks if it returns a metadata record.', function() {
      var geoip = new GeoIP(CITY);
      expect(geoip.getMetadata()).to.be.an('object');
    });

    // Test IPV4
    describe('IPV4 ' + IPV4, function() {
      var geoip = new GeoIP(CITY);
      var record = geoip.getRecord(IPV4);

      // Test if it returns a record.
      it('Checks if it returns a record.', function() {
        expect(record).to.be.an('object');
      });

      // Test the record.
      it('Checks if the record has the property "city".', function() {
        expect(record).to.have.property('city');
      });

      it('Checks if the record has the property "continent".', function() {
        expect(record).to.have.property('continent');
      });

      it('Checks if the record has the property "country".', function() {
        expect(record).to.have.property('country');
      });

      it('Checks if the record has the property "location".', function() {
        expect(record).to.have.property('location');
      });

      it('Checks if the record has the property "postal".', function() {
        expect(record).to.have.property('postal');
      });

      it('Checks if the record has the property "registered_country".', function() {
        expect(record).to.have.property('registered_country');
      });

      it('Checks if the record has the property "subdivisions".', function() {
        expect(record).to.have.property('subdivisions');
      });

    });

    // Test IPV6
    // Nota:
    // IPv6 do not return city, postal and subdivisions yet.
    describe('IPV6 ' + IPV6, function() {
      var geoip = new GeoIP(CITY);
      var record = geoip.getRecord(IPV6);

      // Test if it returns a record.
      it('Checks if it returns a record.', function() {
        expect(record).to.be.an('object');
      });

      // Test the record.
      //it('Checks if the record has the property "city".', function() {
        //expect(record).to.have.property('city');
      //});

      it('Checks if the record has the property "continent".', function() {
        expect(record).to.have.property('continent');
      });

      it('Checks if the record has the property "country".', function() {
        expect(record).to.have.property('country');
      });

      it('Checks if the record has the property "location".', function() {
        expect(record).to.have.property('location');
      });

      //it('Checks if the record has the property "postal".', function() {
        //expect(record).to.have.property('postal');
      //});

      it('Checks if the record has the property "registered_country".', function() {
        expect(record).to.have.property('registered_country');
      });

      //it('Checks if the record has the property "subdivisions".', function() {
      //  expect(record).to.have.property('subdivisions');
      //});

    });

    // Test private IP
    describe('Private IP ' + PRIVATEIP, function() {
      var geoip = new GeoIP(CITY);
      var record = geoip.getRecord(PRIVATEIP);

      it('Checks if a private IP returns null.', function() {
        expect(record).to.be.null;
      });
    });

    // Test malformed IPs
    describe('Malformed IPs or undefined', function() {
      var geoip = new GeoIP(CITY)
      , test
      ;

      // IPv4
      it('Checks if a malformed IPv4 throws an error.', function() {
        try {
          test = false;
          geoip.getRecord(FALSEIP4);
        } catch (e) {
          test = true;
        }
        expect(test).to.be.true;
      });

      // IPv4
      it('Checks if a malformed IPv6 throws an error.', function() {
        try {
          test = false;
          geoip.getRecord(FALSEIP6);
        } catch (e) {
          test = true;
        }
        expect(test).to.be.true;
      });

      // IPv4
      it('Checks if undefined IP returns null.', function() {
        expect(geoip.getRecord()).to.be.null;
      });
    });
  });
});
