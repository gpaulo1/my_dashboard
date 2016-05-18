Template.modalAddAccount.events({
    'submit .createAccount': function (pEvent) {

        // Prevent default browser form submit
        pEvent.preventDefault();

        //Check if was selected the type of account is monthly planning
        var $isMonthlyPlanning = $('#radioMonthlyPlanning').is(':checked');

        var _account = new Object({
            'description': pEvent.target.inputDescription.value,
            'currency': pEvent.target.inputCurrency.value,
            'monthlyPlanning': $isMonthlyPlanning ? pEvent.target.radioMonthlyPlanning.value : false
        });

        Meteor.call('saveAccountServ', _account, function (pError) {
            createFeedbackMessageAction(pError, systemMessage.getOperationSave());
            clearAndCloseModal(['currency', 'description'], 'addAccount');
        });

    },
    'click #radioSavingAccount': function () {
        $(".selectMonthlyPlanning").hide(120);
    },
    'click #radioMonthlyPlanning': function () {
        $(".selectMonthlyPlanning").show(120);
    },
});



