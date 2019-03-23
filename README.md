# jGeoIP

[![NPM version][npm-image]][npm-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependencies status][dependencies-image]][dependencies-url]
[![Dev Dependencies status][devdependencies-image]][devdependencies-url]
[![License][license-image]](LICENSE.md)

[![NPM install][npm-install-image]][npm-install-url]

jGeoIP is a light Javascript API for reading new [MaxMind](https://www.maxmind.com)'s DB files (mmdb). jGeoIP stores the complete database in memory to speed up the performances. Besides, it implements a LRU (Least Recently Used) cache for optimizing reading performances for the most recently used IPs.

## Usage

```
var jGeoIP = require('jgeoip');

// Load synchronously MaxMind database in memory
var geoip = new jGeoIP('path/to/maxmind.mmdb');

// IPV4
geoip.getRecord('8.8.8.8');

//IPV6
geoip.getRecord('2001:4860:4860::8844');
```

## API

  * `.getMetadata()` returns MaxMind's database metadata,
  * `.getRecord(IP)` returns IP data.


## Output

`GeoLite2-City.mmdb` outputs:

```
{ city:
   { geoname_id: 5375480,
     names:
      { de: 'Mountain View',
        en: 'Mountain View',
        fr: 'Mountain View',
        ja: 'マウンテンビュー',
        ru: 'Маунтин-Вью',
        'zh-CN': '芒廷维尤' } },
  continent:
   { code: 'NA',
     geoname_id: 6255149,
     names:
      { de: 'Nordamerika',
        en: 'North America',
        es: 'Norteamérica',
        fr: 'Amérique du Nord',
        ja: '北アメリカ',
        'pt-BR': 'América do Norte',
        ru: 'Северная Америка',
        'zh-CN': '北美洲' } },
  country:
   { geoname_id: 6252001,
     iso_code: 'US',
     names:
      { de: 'USA',
        en: 'United States',
        es: 'Estados Unidos',
        fr: 'États-Unis',
        ja: 'アメリカ合衆国',
        'pt-BR': 'Estados Unidos',
        ru: 'Сша',
        'zh-CN': '美国' } },
  location:
   { latitude: 37.386,
     longitude: -122.0838,
     metro_code: 807,
     time_zone: 'America/Los_Angeles' },
  postal: { code: '94040' },
  registered_country:
   { geoname_id: 6252001,
     iso_code: 'US',
     names:
      { de: 'USA',
        en: 'United States',
        es: 'Estados Unidos',
        fr: 'États-Unis',
        ja: 'アメリカ合衆国',
        'pt-BR': 'Estados Unidos',
        ru: 'Сша',
        'zh-CN': '美国' } },
  subdivisions: [ { geoname_id: 5332921, iso_code: 'CA', names: [Object] } ] }
```

Some IP addresses do not report `city` information. Most IPv6 addresses report country information only.


`GeoLite2-Country.mmdb` outputs:

```
{ continent:
   { code: 'NA',
     geoname_id: 6255149,
     names:
      { de: 'Nordamerika',
        en: 'North America',
        es: 'Norteamérica',
        fr: 'Amérique du Nord',
        ja: '北アメリカ',
        'pt-BR': 'América do Norte',
        ru: 'Северная Америка',
        'zh-CN': '北美洲' } },
  country:
   { geoname_id: 6252001,
     iso_code: 'US',
     names:
      { de: 'USA',
        en: 'United States',
        es: 'Estados Unidos',
        fr: 'États-Unis',
        ja: 'アメリカ合衆国',
        'pt-BR': 'Estados Unidos',
        ru: 'Сша',
        'zh-CN': '美国' } },
  registered_country:
   { geoname_id: 6252001,
     iso_code: 'US',
     names:
      { de: 'USA',
        en: 'United States',
        es: 'Estados Unidos',
        fr: 'États-Unis',
        ja: 'アメリカ合衆国',
        'pt-BR': 'Estados Unidos',
        ru: 'Сша',
        'zh-CN': '美国' } } }
```

## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/jgeoip.svg?style=flat-square
[npm-install-image]: https://nodei.co/npm/jgeoip.png?compact=true
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[download-image]: https://img.shields.io/npm/dm/jgeoip.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/jclo/jgeoip.svg?style=flat-square
[coveralls-image]: https://img.shields.io/coveralls/jclo/jgeoip/master.svg?style=flat-square
[dependencies-image]: https://david-dm.org/jclo/jgeoip/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/jgeoip/dev-status.svg?theme=shields.io
[license-image]: https://img.shields.io/npm/l/jgeoip.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/jgeoip
[npm-install-url]: https://nodei.co/npm/jgeoip
[node-url]: http://nodejs.org/download
[download-url]: https://www.npmjs.com/package/jgeoip
[travis-url]: https://travis-ci.org/jclo/jgeoip
[coveralls-url]: https://coveralls.io/github/jclo/jgeoip?branch=master
[dependencies-url]: https://david-dm.org/jclo/jgeoip
[devdependencies-url]: https://david-dm.org/jclo/jgeoip?type=dev
[license-url]: http://opensource.org/licenses/MIT
