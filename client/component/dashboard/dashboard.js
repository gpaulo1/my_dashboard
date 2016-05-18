/**
 * Session's variables:
 *     - 'selectedAccountSession': ID value from BD to selected account;
 *     - 'accountSelectedValuesSession': TODO figure out reason to use this session variable
 */

Template.dashboard.events({
    //open modal 'Adicionar Registro'
    'click [addMoney]': function () {
        $('#addRegistry').modal('toggle');
    },
    //open modal 'Adicionar Conta'
    'click [addAccount]': function () {
        $('#addAccount').modal('toggle');
    },
    //load values of selected account
    'click .nav_accounts': function () {
        Session.set('selectedAccountSession', this._id);
        Session.set('accountSelectedValuesSession', AccountsCol.findOne(this._id));
    },
    'click #removeAccount': function () {
        $('#modalConfirmRemove').modal('toggle');
    },
    'click #removeRegistry': function () {
        Session.set('selectedRegistrySession', this._id);
        $('#modalRemoveRegistry').modal('toggle');
    },
    //set selected account tab to 0 when select the dashboard tab
    'click #dashboardTab': function () {
        Session.set('selectedAccountSession', 0);
    }
});
//END EVENTS

Template.dashboard.helpers({
    accounts: function () {
        return AccountsCol.find();
    },
    financialAbstract: function () {
        var account = AccountsCol.findOne(Session.get('selectedAccountSession'));

        account.averageOutput = Math.floor(((account.averageOutput * -1) * 100)/ account.averageInput).toFixed(2);
        account.averageOutput = account.averageOutput + '%';

        account.averageInput = 100 - account.averageOutput;
        account.averageInput = account.averageInput + '%';
        
        return account;
    },
    registrys: function () {
        return RegistrysCol.find({'accountId': Session.get('selectedAccountSession')});
    },
    /**
     * check if existing account stored or if dashboard tab is selected, rules:
     *  - if exist account created (not valid to dashboard) show buttons
     *  -- if not, hide buttons
     *  - if dashboard tab is selected hide buttons
     */
    hasAccountOrAccount: function () {
        if (Session.get('selectedAccountSession') == 0) {
            return false;
        }

        if (AccountsCol.find().count() > 0) {
            return true;
        }

        return false;

    },
    //check if type of registry is output
    isOutput: function (pType) {
        if (pType === getOutputReference()) {
            return true;
        }

        return false;
    },
    existRegistry: function () {
        if (RegistrysCol.find({'accountId': Session.get('selectedAccountSession')}).count() == 0) {
            return true;
        }
        return false
    }
});
//END HELPERS
