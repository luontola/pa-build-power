#!/bin/bash
set -eu
: ${1:? Usage: $0 VERSION}
VERSION="$1"
FILENAME="BuildPower_v$VERSION.zip"
set -x

rm -rf dist/BuildPower
mkdir -p dist
cp -r src dist/BuildPower

cd dist
rm -f "$FILENAME"
zip -r "$FILENAME" BuildPower
rm -rf BuildPower
