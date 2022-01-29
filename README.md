# jGeoIP

[![NPM version][npm-image]][npm-url]
[![GitHub last commit][commit-image]][commit-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![License][license-image]](LICENSE.md)


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

[npm-image]: https://img.shields.io/npm/v/jgeoip.svg?logo=npm&logoColor=fff&label=NPM+package
[release-image]: https://img.shields.io/github/release/jclo/jgeoip.svg?include_prereleases
[commit-image]: https://img.shields.io/github/last-commit/jclo/jgeoip.svg?logo=github
[travis-image]: https://img.shields.io/travis/com/jclo/jgeoip.svg?logo=travis-ci&logoColor=fff
[coveralls-image]: https://img.shields.io/coveralls/jclo/jgeoip/master.svg?&logo=coveralls
[dependencies-image]: https://david-dm.org/jclo/jgeoip/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/jgeoip/dev-status.svg?theme=shields.io
[npm-bundle-size-image]: https://img.shields.io/bundlephobia/minzip/jgeoip.svg
[license-image]: https://img.shields.io/npm/l/jgeoip.svg

[npm-url]: https://www.npmjs.com/package/jgeoip
[release-url]: https://github.com/jclo/jgeoip/tags
[commit-url]: https://github.com/jclo/jgeoip/commits/master
[travis-url]: https://app.travis-ci.com/jclo/jgeoip?branch=main
[coveralls-url]: https://coveralls.io/github/jclo/jgeoip?branch=master
[dependencies-url]: https://david-dm.org/jclo/jgeoip
[devdependencies-url]: https://david-dm.org/jclo/jgeoip?type=dev
[license-url]: http://opensource.org/licenses/MIT
[npm-bundle-size-url]: https://img.shields.io/bundlephobia/minzip/jgeoip

-- oOo ---
