#!/bin/bash -i

find /code -name package.json -exec dirname {} \; |
  grep -v node_modules | xargs -n 1 do-yarn.sh install
