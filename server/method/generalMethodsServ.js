Meteor.generalMethods = {
   
    'formatValueToCalc': function(pValue){

        if(pValue === '' || typeof (pValue) === 'undefined' || typeof (pValue) === 'NaN'){
            throw new('Wrong value to pValue variable. Actual: [' + pValue + '], expected: [double]');
        }

        var value = 0.0;

        value = pValue.replace('-','');
        value = value.replace('.','');
        value = value.replace(',','.');

        value = Meteor.generalMethods.removePrefixR$Serv(value);

        //check if is negative and format value
        if(isNegativeValue(pValue)) {value = value * -1}

        //Display two decimal places, no rounding
        value = (Math.floor(value * 100) / 100).toFixed(2);

        return value;

    },
    "isEmptOrUndefinedServ": function(pValue){
        if(pValue === '' || typeof (pValue) === 'undefined'){
            return true;
        }
        return false;
    },
    "isInputReference_serv": function(pTypeRegistry){
        if(pTypeRegistry === getValueReference.input){
            return true;
        }else if(pTypeRegistry === getValueReference.output){
            return false;
        }else{
            throw new TypeError("Unknown type of param [" + pTypeRegistry + "] !");
        }
    }
};