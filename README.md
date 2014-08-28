# Boot
Templates for creating new projects

## webapp
All the stuff for a single-page frontend app. With Gulp, CoffeeScript, Less, Bootstrap, Backbone, Marionette, RequireJS and all other friends.

### Usage
Download a zip of the repo from Github and extract the `webapp` somewhere and rename it.
Sources in `app`, distribution files in `dist` or `www`.

Use `cordova-create.sh <project-name>` inside the project's directory to integrate Cordova.
No platforms are added by default. Run `cordova platforms add ios` for example.
This will create a *new* folder with the Cordova integration. The new folder is will be prefixed with a `_`.

### Dependencies
* node
* npm
* gulp
* bower
* cordova (optional)

## basic-auth-server
A simple express server with basic auth. Use `NODE_USERNAME` and `NODE_PASSWORD` in your env.

## bower-component
WIP. Make a small component for bower.


## License
MIT license
&copy; 2014 scalable minds