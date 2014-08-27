#!/bin/sh

die () {
  echo >&2 "$@"
  exit 1
}

[ "$#" -eq 1 ] || die "Usage: cordova-create.sh <project-name>"


FOLDER_NAME=`basename \`pwd\``

# Create a new folder with cordova
cd ..
cordova create _${FOLDER_NAME} com.scalableminds.${FOLDER_NAME} $1
rsync -a ${FOLDER_NAME}/ _${FOLDER_NAME}
cd _${FOLDER_NAME}

# Replace dist with www folder
sed -i '' 's/dist/www/g' gulp_options.json
sed -i '' 's/dist/www/g' .bowerrc
rm -rf dist www
npm install
