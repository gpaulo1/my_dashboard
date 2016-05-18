Template.modalAddMoney.events({
    'submit .createRegistry': function (event) {

        // Prevent default browser form submit
        event.preventDefault();

        var registryToSave = {};

        registryToSave.account = Session.get('selectedAccountSession');
        registryToSave.description = event.target.description.value;

        registryToSave.currency = event.target.currency.value;

        if ($('#typeRegistryInput').is(":checked")) {
            registryToSave.typeRegistry = getInputReference();
            registryToSave.modality = event.target.modalityInput.value;
        } else if ($('#typeRegistryOutput').is(":checked")) {
            registryToSave.typeRegistry = getOutputReference();
            registryToSave.modality = event.target.modalityOutput.value;
        }

        //request to save registry
        Meteor.call('saveRegistryServ', registryToSave, function (pError, pResult) {
            createFeedbackMessageAction(pError, systemMessage.getOperationSave());
            _clearInputsAndCloseModal();
        });
    },
    'click #typeRegistryInput': function () {
        if ($('.fieldsToInput').is(':visible')) {
            $('.fieldsToInput').hide();
        } else if ($('.fieldsToOutput').is(':visible')) {
            $('.fieldsToOutput').hide();
        }
        $(".fieldsToInput").toggle("slow");
    },
    'click #typeRegistryOutput': function () {
        if ($('.fieldsToOutput').is(':visible')) {
            $('.fieldsToOutput').hide();
        } else if ($('.fieldsToInput').is(':visible')) {
            $('.fieldsToInput').hide();
        }
        $(".fieldsToOutput").toggle("slow");
    }
});

Template.modalAddMoney.rendered = function () {
    $(".fieldsToOutput").hide();
};

function _clearInputsAndCloseModal() {
    $('#description').val('');
    $('#currency').val('');
    $('#addRegistry').modal('toggle');
}
