/* global describe, it */
/* eslint max-len: [1, 120, 2] */
'use strict';

// -- Node modules
var fs       = require('fs')
  , expect   = require('chai').expect
  , execSync = require('child_process').execSync
  ;

// -- Local modules
var GeoIP = require('../index.js');

// -- Local constants
var CMD        = './test/geolite2_download.sh'
  , COUNTRY    = '_db/GeoLite2-Country.mmdb'
  , CITY       = '_db/GeoLite2-City.mmdb'
  , IPV4       = '8.8.8.8'
  , IPV6       = '2001:4860:4860::8888'
  , PRIVATEIP  = '192.168.98.1'
  , FALSEIP4   = '8.8.8'
  , FALSEIP6   = '2001:4860:4860:8888'
  ;

// Download GeoLite2 databases if they are not present. This is required
// for Travis CI as we do not provide MaxMind's databases with the
// package.
execSync(CMD);

// Start tests.
describe('jGeoIP2', function() {

  describe('Test jGeoIP2 constructor:', function() {

    it('Expects that it throws an error if the db is undefined.', function() {
      var test
        ;

      try {
        test = false;
        new GeoIP();
      } catch (e) {
        test = true;
      }
      expect(test).to.be.true;
    });

    it('Expects that it throws an error if the db is unvalid.', function() {
      var test
        ;

      try {
        test = false;
        new GeoIP('aaaa');
      } catch (e) {
        test = true;
      }
      expect(test).to.be.true;
    });
  });

  describe('Test Country database:', function() {

    it('Expects that GeoLite2-Country.mmdb exists.', function() {
      var file = true;
      try { fs.accessSync(COUNTRY, fs.R_OK); } catch (e) { file = false; }
      expect(file).to.be.true;
    });

    it('Expects that GeoLite2-Country.mmdb is a valid MaxMind\'s database.', function() {
      var test = true
        ;

      try {
        new GeoIP(COUNTRY);
      } catch (e) {
        test = false;
      }
      expect(test).to.be.true;
    });

    describe('Test the method getMetadata():', function() {
      it('Expects that it returns a metadata record.', function() {
        var geoip = new GeoIP(COUNTRY);
        expect(geoip.getMetadata()).to.be.an('object');
      });
    });

    describe('Test the method getRecord():', function() {

      describe('Test IPv4 address ' + IPV4, function() {
        var geoip
          , record
          ;

        geoip = new GeoIP(COUNTRY);
        record = geoip.getRecord(IPV4);

        it('Expects that it returns a record.', function() {
          expect(record).to.be.an('object');
        });

        it('Expects that this record has the property "continent".', function() {
          expect(record).to.have.property('continent');
        });

        it('Expects that this record has the property "country".', function() {
          expect(record).to.have.property('country');
        });

        it('Expects that this record has the property "registered_country".', function() {
          expect(record).to.have.property('registered_country');
        });

        it('Expects that the cache returns a record.', function() {
          record = geoip.getRecord(IPV4);
          expect(record).to.be.an('object');
        });
      });

      describe('Test IPv6 address ' + IPV6, function() {
        var geoip
          , record
          ;

        geoip = new GeoIP(COUNTRY);
        record = geoip.getRecord(IPV6);

        it('Expects that it returns a record.', function() {
          expect(record).to.be.an('object');
        });

        it('Expects that this record has the property "continent".', function() {
          expect(record).to.have.property('continent');
        });

        it('Expects that this record has the property "country".', function() {
          expect(record).to.have.property('country');
        });

        it('Expects that this record has the property "registered_country".', function() {
          expect(record).to.have.property('registered_country');
        });

        it('Expects that the cache returns a record.', function() {
          record = geoip.getRecord(IPV6);
          expect(record).to.be.an('object');
        });
      });
    });
  });


  describe('Test City database:', function() {

    it('Expects that GeoLite2-City.mmdb exists.', function() {
      var file = true;
      try { fs.accessSync(CITY, fs.R_OK); } catch (e) { file = false; }
      expect(file).to.be.true;
    });

    it('Expects that GeoLite2-City.mmdb is a valid MaxMind\'s database.', function() {
      var test = true
        ;

      try {
        new GeoIP(CITY);
      } catch (e) {
        test = false;
      }
      expect(test).to.be.true;
    });

    describe('Test the method getMetadata():', function() {
      it('Expects that it returns a metadata record.', function() {
        var geoip = new GeoIP(CITY);
        expect(geoip.getMetadata()).to.be.an('object');
      });
    });

    describe('Test the method getRecord():', function() {

      describe('Test IPv4 address ' + IPV4, function() {
        var geoip
          , record
          ;

        geoip = new GeoIP(CITY);
        record = geoip.getRecord(IPV4);

        it('Expects that it returns a record.', function() {
          expect(record).to.be.an('object');
        });

        it('Expects that this record has the property "city".', function() {
          expect(record).to.have.property('city');
        });

        it('Expects that this record has the property "continent".', function() {
          expect(record).to.have.property('continent');
        });

        it('Expects that this record has the property "country".', function() {
          expect(record).to.have.property('country');
        });

        it('Expects that this record has the property "location".', function() {
          expect(record).to.have.property('location');
        });

        it('Expects that this record has the property "postal".', function() {
          expect(record).to.have.property('postal');
        });

        it('Expects that this record has the property "registered_country".', function() {
          expect(record).to.have.property('registered_country');
        });

        it('Expects that this record has the property "subdivisions".', function() {
          expect(record).to.have.property('subdivisions');
        });
      });

    // Nota:
    // IPv6 do not return city, postal and subdivisions yet!
      describe('Test the IPv6 address ' + IPV6, function() {
        var geoip
          , record
          ;

        geoip = new GeoIP(CITY);
        record = geoip.getRecord(IPV6);

        it('Expects that it returns a record.', function() {
          expect(record).to.be.an('object');
        });

        //it('Expects that this record has the property "city".', function() {
          //expect(record).to.have.property('city');
        //});

        it('Expects that this record has the property "continent".', function() {
          expect(record).to.have.property('continent');
        });

        it('Expects that this record has the property "country".', function() {
          expect(record).to.have.property('country');
        });

        it('Expects that this record has the property "location".', function() {
          expect(record).to.have.property('location');
        });

        //it('Expects that this record has the property "postal".', function() {
          //expect(record).to.have.property('postal');
        //});

        it('Expects that this record has the property "registered_country".', function() {
          expect(record).to.have.property('registered_country');
        });

        //it('Expects that this record has the property "subdivisions".', function() {
          //expect(record).to.have.property('subdivisions');
        //});
      });
    });
  });

  describe('Test the method getRecord() for wrong IPs:', function() {
    var geoip
      , test
      ;

    geoip = new GeoIP(CITY);

    it('Expects that it returns null for the Private IP ' + PRIVATEIP + '.', function() {
      expect(geoip.getRecord(PRIVATEIP)).to.be.null;
    });

    it('Expects it returns null for an undefined address.', function() {
      expect(geoip.getRecord()).to.be.null;
    });

    it('Expects it throws an error for the malformed IPv4 address ' + FALSEIP4 + '.', function() {
      try {
        test = false;
        geoip.getRecord(FALSEIP4);
      } catch (e) {
        test = true;
      }
      expect(test).to.be.true;
    });

    it('Expects it throws an error for the malformed IPv6 address ' + FALSEIP6 + '.', function() {
      try {
        test = false;
        geoip.getRecord(FALSEIP6);
      } catch (e) {
        test = true;
      }
      expect(test).to.be.true;
    });
  });
});
