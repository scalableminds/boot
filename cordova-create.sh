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
rm -rf dist www
npm install

echo "Added cordova integration to your project in the new folder _${FOLDER_NAME}. You may delete the old folder now."
