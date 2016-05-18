Template.modalConfirmRemove.events({
    'click #remove': function () {
        Meteor.call('removeAccountServ', Session.get('selectedAccountSession'), function (error) {
            createFeedbackMessageAction(error, systemMessage.getOperationRemove());
            $('#modalConfirmRemove').modal('toggle');
            $('#generalAccount').trigger('click');
        });
    }
});
