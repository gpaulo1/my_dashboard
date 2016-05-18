/**
 * Class responsible to handler business rules inside the project 
 * @author Garcia
 */

/**
 * Convert bd fields name structure to system/person readable.
 *
 * @param pValue
 */
getTranslationBDFields = function(pValue){
    if(pValue === 'description'){
        return 'Descrição';
    }else if (pValue === 'currency'){
        return 'Valor';
    }else if(pValue === 'typeRegistry'){
        return 'Identificação de registro';
    }else if(pValue === 'modality'){
        return 'Finalidade';
    }else{
        console.error('Not identified BD filnd name: ' + this);
    }
};

/**
 * Compare if error code is a 500 (Server exception)
 * @param pValue
 * @returns {boolean}
 */
isInternalServerError_500 = function (pValue) {
    if(pValue == 500){
        return true;
    }
    return false;
};

/**
 * Check if the parameter is empty or undefined
 * @param pValue
 * @returns {boolean}
 */
isEmptyOrUndefined = function(pValue){
    if(pValue === '' || typeof (pValue) === 'undefined'){
        return true;
    }
    return false;
};

isNegativeValue = function(pValue){
    if (pValue.charAt(0) === '-') {return true;}
    
    return false;
};
