## questionnaire-builder

Questionnaire Builder for ClinicalMeteor, using HL7 FHIR Questionnaire and QuestionnaireReponse resources.



================================
#### Installation

````js
git clone http://github.com/clinical-meteor/questionnaire-builder
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
