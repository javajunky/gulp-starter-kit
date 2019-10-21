# Welcome to gulp-starter-kit 👋
![Version 1.1.0](https://img.shields.io/badge/version-1.1.0-blue.svg?cacheSeconds=2592000 "Version 1.1.0")
[![Twitter: @javajunky](https://img.shields.io/twitter/follow/javajunky.svg?style=social "Twitter: @javajunky")](https://twitter.com/javajunky)


> Starter kit for a project using Gulp workflow.

## Install

```sh
yarn install
```

## Usage

```sh
yarn start
```

## Getting Started
* './app.html' is your main HTML file. It is processed and outputted to 'index.html'.
* './js/main.js' is your main JavaScript file
* Add all third-party script files into './js/lib/' and you can specify if you would want to bundle them with your 'main.js' file by modifying `jslib_files` in './gulpfile.js'
* './scss/main.scss' is your main SCSS file
* You may import all your secondary SCSS files into 'main.scss' with `@import` statements or if you would like Gulp to process all your SCSS files to CSS files, set `paths.styles.main` in './gulpfile.js' to an empty string.

## Distributing
```sh
yarn build
```

## Author

👤 **Wil Chow**

* Twitter: [@javajunky](https://twitter.com/javajunky)
* Github: [javajunky](https://github.com/javajunky)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_