getInputReference = function () {
    return "INPUT";
};

getOutputReference = function () {
    return "OUTPUT";
};

getValueReference = (function () {
    var INPUT = 'INPUT';
    var OUTPUT = 'OUTPUT';
    
    return{
        output: function () {
            return OUTPUT;
        },
        input: function(){
            return INPUT;
        }
    }
    
}());

/**
 * return the type 'error' to show to client
 * @returns {string}
 */
getMessageErrorType = function () {
    return 'error';
};

/**
 *  Module Pattern
 *  
 * @type {{successToSave, successToRemove, successToUpdate, errorToSave, errorToSave500, typeMessageError, typeMessageSuccess, 
 * typeMessagePrefixError, typeMessagePrefixSuccess, getOperationSave, getOperationUpdate, getOperationRemove}}
 */
systemMessage = (function () {

    var SUCCESS_TO_SAVE = 'Registro salvo com sucesso';
    var SUCCESS_TO_REMOVE = 'Registro removido com sucesso';
    var SUCCESS_TO_UPDATE = 'Registro alterado com sucesso';

    var ERROR_TO_SAVE = 'Falha ao tentar salvar o registro.';
    var ERROR_TO_SAVE_500 = 'Error no servidor ao realizar a operação.';

    var OPERATION_SAVE = 'save';
    var OPERATION_UPDATE = 'update';
    var OPERATION_REMOVE = 'remove';

    var _typeMessageBox = ['error','success'];
    var _typeMessageBoxPrefix = ['Erro!','Sucesso!'];

    return {
        /**
         * Info message describes whats happened to show to user
         * @returns {string}
         */
        'successToSave': function () {
            return SUCCESS_TO_SAVE;
        },
        'successToRemove': function () {
            return SUCCESS_TO_REMOVE;
        },
        'successToUpdate': function () {
            return SUCCESS_TO_UPDATE;
        },
        'errorToSave': function () {
            return ERROR_TO_SAVE;
        },
        'errorToSave500': function () {
            return ERROR_TO_SAVE_500;
        },
        /**
         * Type registry to choice systemMessage box color: success(green) or fail(red)
         * @type {string}
         */
        'typeMessageError': function () {
            return _typeMessageBox[0];
        },
        'typeMessageSuccess': function () {
            return _typeMessageBox[1];
        },
        /**
         * Message prefix to indicate the type of the message
         * @returns {string}
         */
        'typeMessagePrefixError': function () {
            return _typeMessageBoxPrefix[0];
        },
        'typeMessagePrefixSuccess': function () {
            return _typeMessageBoxPrefix[1];
        },
        /**
         * type to check out the message description to show to user
         * @returns {string[]}
         */
        'getOperationSave': function () {
            return OPERATION_SAVE;
        },
        'getOperationUpdate': function(){
            return OPERATION_UPDATE
        },
        'getOperationRemove': function () {
            return OPERATION_REMOVE;
        }
    }
}());



