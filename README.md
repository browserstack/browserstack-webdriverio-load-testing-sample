# browserstack-webdriverio-load-testing-sample
This repo contains samples for running [WebdriverIO](https://webdriver.io/) tests on BrowserStack using the browserstack-node-sdk.

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

## Setup

* Clone the repo `git clone https://github.com/browserstack/browserstack-webdriverio-load-testing-sample.git`.
* Open the browserstack-load.yaml file and update it with the relevant load test configurations.(https://www.browserstack.com/accounts/settings) 
* Run `npm i` to install the dependencies.
* Update the same in `browserstack-load.yaml` file.

## Running your tests

- To run the sample tests in parallel across the platforms specified in the `browserstack-load.yaml`, Run the given command to start your test: `npx browserstack-cli load run`.

## Notes
* You can view your test results on the [BrowserStack Load Testing dashboard](https://load.browserstack.com/projects)