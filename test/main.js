// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules


// -- Local Modules
const GeoIP         = require('../index')
    , testconstruc  = require('./int/testconstruc')
    , testcountrydb =  require('./int/testcountrydb')
    , testcitydb    = require('./int/testcitydb')
    ;


// -- Local Constants
const libname = 'jGeoIP'
    , COUNTRY    = '_db/GeoLite2-Country.mmdb'
    , CITY       = '_db/GeoLite2-City.mmdb'
    , IPV4       = '8.8.8.8'
    , IPV6       = '2001:4860:4860::8888'
    , IPV4TO6MAP = '::ffff:54.88.56.156'
    , PRIVATEIP  = '192.168.98.1'
    , FALSEIP4s   = ['8.8.8', '8.8.8.-8', '500.500.500.500']
    , FALSEIP6   = '2001:4860:4860:8888'
    ;


// -- Local Variables


// -- Main
describe('Test jGeoIP:', () => {
  testconstruc(GeoIP);
  testcountrydb(GeoIP, COUNTRY, IPV4, IPV4TO6MAP, IPV6);
  testcitydb(GeoIP, CITY, IPV4, IPV4TO6MAP, IPV6, PRIVATEIP, FALSEIP4s, FALSEIP6);
});
