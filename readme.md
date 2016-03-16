## hello-healthcare

Hello World for the Clinical Meteor release track.

[![Circle CI](https://circleci.com/gh/clinical-meteor/hello-healthcare/tree/master.svg?style=svg)](https://circleci.com/gh/clinical-meteor/hello-healthcare/tree/master)

================================
#### Installation

````js
git clone http://github.com/clinical-meteor/hello-healthcare
````


================================
#### Testing

````bash
# install starrynight
sudo npm install -g starrynight

# run the validation tests
starrynight fetch
starrynight autoconfig
starrynight run-tests --type validation

# run the verification tests
starrynight run-tests --type package-verification
````


===============================
#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
