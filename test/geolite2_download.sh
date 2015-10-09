#!/usr/bin/env bash
#
# This script downloads GeoLite2 databases if they aren't available on the
# server. This is required for Travis CI.
#
# The MIT License (MIT)
#
# Copyright (c) 2015 jclo
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

URL="http://geolite.maxmind.com/download/geoip/database"
CITY="GeoLite2-City.mmdb"
COUNTRY="GeoLite2-Country.mmdb"
DIRECTORY="./_db"

# Check if database dir exists. Otherwise, create it.
if [ ! -d "${DIRECTORY}" ]; then
  echo "${DIRECTORY} does not exist. Creating it ..."
  mkdir ${DIRECTORY}
fi

# Check if 'CITY' exists. Otherwise download it.
if [ ! -f "${DIRECTORY}/${CITY}" ]; then
  curl --get ${URL}/${CITY}.gz -o ${DIRECTORY}/${CITY}.gz
  echo "${CITY} does not exist. Downloading it ..."
  gzip -d ${DIRECTORY}/${CITY}.gz
fi

# Check if 'COUNTRY' exists. Otherwise download it.
if [ ! -f "${DIRECTORY}/${COUNTRY}" ]; then
  curl --get ${URL}/${COUNTRY}.gz -o ${DIRECTORY}/${COUNTRY}.gz
  echo "${COUNTRY} does not exist. Downloading it ..."
  gzip -d ${DIRECTORY}/${COUNTRY}.gz
fi
