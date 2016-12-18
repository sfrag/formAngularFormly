(function(){
    'use strict';
    angular
        .module('formlyApp')
        .controller('MainController', MainController);
    
    function MainController(province){
        var vm = this;

        vm.rental = {};

        vm.rentalFields = [
            {
                key: 'first_name',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'First Name',
                    placeholder: 'Enter your first name',
                    required: true
                }
            },
            {
                key: 'last_name',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Last Name',
                    placeholder: 'Enter your last name',
                    required: true
                }
            },
            {
                key: 'email',
                type: 'input',
                templateOptions: {
                    type: 'email',
                    label: 'Email address',
                    placeholder: 'Enter email',
                    required: true
                }
            },
            {
                key: 'under25',
                type: 'checkbox',
                templateOptions: {
                    label: 'Are you under 25?',
                },
                // Hide this field if we don't have
                // any valid input in the email field
                hideExpression: '!model.email'
            },
            {
                key: 'province',
                type: 'select',
                templateOptions: {
                    label: 'Province/Territory',
                    // Call our province service to get a list
                    // of provinces and territories
                    options: province.getProvinces()
                },
                hideExpression: '!model.email'
            },
            {
                key: 'insurance',
                type: 'input',
                templateOptions: {
                    label: 'Insurance Police Number',
                    placeholder: 'Enter your insurance policy number'
                },
                hideExpression: '!model.under25 || !model.province',
            },
            {
                key: 'license',
                type: 'input',
                templateOptions: {
                    label: 'Driver\'s License Number',
                    placeholder: 'Enter your drivers license numbber'
                },
                hideExpression: '!model.province',
                validators: {
                    //custom validators
                    driversLicense: function ($viewValue, $modelValue, scope){
                        var value = $modelValue || $viewValue;
                        if(value) {
                            // call the validateDriversLicense that returns
                            // true or false depending on whether the entry
                            // is valid
                            return validateDriversLicence(value)
                        }
                    }
                },
                expressionProperties: {
                    // Only visible if we pewviously selected Ontairo
                    'templateOptions.disabled': function($viewValue, $modelValue, scope) {
                        if(scope.model.province === 'ontario'){
                            return false;
                        }
                        return true;
                    }
                }
            }
        ];
    }

    // regular expression to validateDriversLicence
    function validateDriversLicence(value){
        return /[A-Za-z]\d{4}[\s|\-]*\d{5}[\s|\-]*\d{5}$/.test(value);
    }

})();