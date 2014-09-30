# Boot
Templates for creating new projects

## webapp
All the stuff for a single-page frontend app. With Gulp, CoffeeScript, Less, Bootstrap, Backbone, Marionette, RequireJS and all other friends.

### Usage
Download a zip of the repo from Github and extract the `webapp` somewhere and rename it.
Sources in `app`, distribution files in `dist` or `www`.

### Cordova
Use `cordova-create.sh <project-name>` inside the project's directory to integrate Cordova.
No platforms are added by default. Run `cordova platforms add ios` for example.
This will create a *new* folder with the Cordova integration. The new folder is will be prefixed with a `_`. You can remove the old folder and rename the new one if you like.

When using Cordova you should use hash urls instead of `pushState` and remove the leading slashes from any asset path (eg. `/scripts` -> `scripts`).

A couple of things you might want to do:
* (iOS 8+) Add a launch file (`.xib`). [See Apple Developer Documentation](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/LaunchImages.html). You still need splash screens for iOS 7.
* (iOS) Create an Asset Catalog (`.xcassets`) for icons and launch screens. Use a tool like ...
* Add `<preference name="DisallowOverscroll" value="true"/>` to your `config.xml` to stop the whole app to bounce on scroll. Use `-webkit-overflow-scrolling: touch;` in your app's CSS instead (iOS only).
* Restrict device orientations `<preference name="Orientation" value="portrait" />`
* Set minimum versions of platforms


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