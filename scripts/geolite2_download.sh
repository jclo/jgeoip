#!/usr/bin/env bash
#
# This script downloads GeoLite2 databases if they aren't available on the
# server. This is required for Github Actions.
#
# The MIT License (MIT)
#
# Copyright (c) 2024 jclo <jclo@mobilabs.fr> (http://www.mobilabs.fr/)
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

URL="https://www.mobilabs.org/download"
CITY="GeoLite2-City"
COUNTRY="GeoLite2-Country"
DATE="_20240102"
EXT="tar.gz"
DIRECTORY="./_db"

# Check if database dir exists. Otherwise, create it.
if [ ! -d "${DIRECTORY}" ]; then
  echo "${DIRECTORY} does not exist. Creating it ..."
  mkdir ${DIRECTORY}
fi

# Check if 'CITY' exists. Otherwise download it.
if [ ! -f "${DIRECTORY}/${CITY}.mmdb" ]; then
  echo "${CITY} does not exist. Downloading it from ${URL}/${CITY}${DATE}.${EXT} ..."
  curl --get ${URL}/${CITY}${DATE}.${EXT} -o ${DIRECTORY}/${CITY}${DATE}.${EXT}
  tar xvf ${DIRECTORY}/${CITY}${DATE}.${EXT} --directory ${DIRECTORY}
  cp ${DIRECTORY}/${CITY}${DATE}/${CITY}.mmdb ${DIRECTORY}/.
fi

# Check if 'COUNTRY' exists. Otherwise download it.
if [ ! -f "${DIRECTORY}/${COUNTRY}.mmdb" ]; then
  echo "${COUNTRY} does not exist. Downloading it from ${URL}/${COUNTRY}${DATE}.${EXT} ..."
  curl --get ${URL}/${COUNTRY}${DATE}.${EXT} -o ${DIRECTORY}/${COUNTRY}${DATE}.${EXT}
  tar xvf ${DIRECTORY}/${COUNTRY}${DATE}.${EXT} --directory ${DIRECTORY}
  cp ${DIRECTORY}/${COUNTRY}${DATE}/${COUNTRY}.mmdb ${DIRECTORY}/.
fi

# -- oOo ---
