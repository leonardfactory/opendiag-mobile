#!/bin/bash -e
compass compile ./
rm -rf /Users/leonardo/Progetti/opendiag-iOS/www/*
cp -r ./* /Users/leonardo/Progetti/opendiag-iOS/www/

# Cleaning (I'm lazy)
cd /Users/leonardo/Progetti/opendiag-iOS/www/
rm build.sh
rm README.md
rm config.rb
rm -r sass/

echo "Compiled."
say "Compiled"
