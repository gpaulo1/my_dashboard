createFeedbackMessageAction = function (pError, pAction) {
    
    /**
     * Positions: 0 - Prefix
     *            1 - Body content
     *            2 - Message box color
     * @type {Array}
     */
    var _structureMessage = [];

    if (pError) {

        _structureMessage[0] = systemMessage.typeMessagePrefixError();
        _structureMessage[1] = isInternalServerError_500(pError.error) ? systemMessage.errorToSave500() : systemMessage.errorToSave();
        _structureMessage[2] = systemMessage.typeMessageError();

    }
    //success saved
    else {

        switch (pAction) {
            case systemMessage.getOperationSave():
                _structureMessage[1] = systemMessage.successToSave();
                break;
            case systemMessage.successToUpdate:
                _structureMessage[1] = systemMessage.successToUpdate();
                break;
            case systemMessage.successToRemove:
                _structureMessage[1] = systemMessage.successToRemove();
        }

        _structureMessage[0] = systemMessage.typeMessagePrefixSuccess();
        _structureMessage[2] = systemMessage.typeMessageSuccess();

    }

    //show the message
    Meteor.messages.createMessage(_structureMessage[0], _structureMessage[1], _structureMessage[2]);

};

clearAndCloseModal = function (pInputs, pModal) {
    
    pInputs.forEach(function(pId){
        console.log("nome do campo para limpar: " + pId);
        $('#' + pId).val('');
    });

    $('#' + pModal).modal('toggle');
    
};