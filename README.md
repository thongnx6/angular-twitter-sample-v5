# AnyMind Angular twitter sample 
[![Build Status](https://travis-ci.org/thongnx6/angular-twitter-sample-v5.svg?branch=master)](https://travis-ci.org/thongnx6/angular-twitter-sample-v5)

This project use Angular CLI 1.7.4 to initialize, develop, scaffold and maintain Angular application

## Demo
[![DEMO](http://img.youtube.com/vi/aIqc8Ujcixs/0.jpg)](http://www.youtube.com/watch?v=aIqc8Ujcixs)

## Quickstart

* Prepare for API endpoint to use
  -  Clone this project https://github.com/artenepo/twitter_scrape to your local environment.
  - Follow the README to prepare for the environment.
* Clone the repo and `cd` into it
* `npm install`
* `cp .env.example .env`
* `npm start` to run the dev server
* `npm build` to build the project (prod mode)

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running unit test coverage

Run `npm test:coverage` to execute the coverage tests.

## Running end-to-end tests (WIP)

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Document
* Clone the repo and `cd` into it
* `git log` to show all commit


### Apply husky, reformat code using prettier in conjunction lint
- Configure lint staged rc
- Configure prettier rc
- Add script to precommit and prepush
- Chekcout [code](https://github.com/thongnx6/angular-twitter-sample-v5/commit/98cd51e2d8c4f578cb3f4fdac957813ea7650afc)
- Related document:
  + https://github.com/okonet/lint-staged
  + https://prettier.io/docs/en/configuration.html

### Continues Integration with Travis using Docker service
- Init travis yml file to conitnues integration for Angular without e2e
- Add and clean script support :ci
- Related document:
  + https://github.com/dwyl/learn-travis

### Local development setup

- Passing a file to --proxy-config, using the proxying support in webpack's dev server we can highjack certain URLs and send them to a backend server.
- Setup ts-node bundle enviroment files (include gitIgnore)
- Related document:
  + https://medium.com/@natchiketa/angular-cli-and-os-environment-variables-4cfa3b849659
  + https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md

### History log commit, please see [here](https://github.com/thongnx6/angular-twitter-sample-v5/commits/master)
