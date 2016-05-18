Meteor.methods({
    /**
     * Add new registry
     *
     * @param pRegistryToSave
     */
    "saveRegistryServ": function (pRegistryToSave) {
        financialOperation(pRegistryToSave);
        return RegistrysCol.insert(pRegistryToSave);
    }
    ,

    /**
     * Remove registry from BD
     *
     * @param pRegistryId
     */
    "removeRegistryServ": function (pRegistryId) {

        var registry = RegistrysCol.findOne(pRegistryId);
        var account = AccountsCol.findOne(registry.accountId);

        if ((account.currency > 0) && (registry.currency > 0) && (account.currency > registry.currency)) {
            account.currency = account.currency - registry.currency;
        } else if ((account.currency > 0 && (registry.currency < 0) && (account.currency > registry.currency))) {
            account.currency = account.currency - registry.currency;
        }

        if (account.typeRegistry === getInputReference()) {
            account.averageInput -= account.currency;
        } else {
            account.averageOutput -= account.currency;
        }

        try {
            RegistrysCol.remove({'_id': pRegistryId}, function (error, program) {
                if (!error) {
                    AccountsCol.update({'_id': account._id}, {
                        $set: {
                            'description': account.description,
                            'currency': (Math.floor(account.currency * 100) / 100).toFixed(2),
                            'balance': account.balance,
                            'dateCreation': account.dateCreation,
                            'averageInput': account.averageInput,
                            'averageOutput': account.averageOutput
                        }
                    });
                }
            });
        } catch (e) {
            throw new Error('Error to update account: ' + e);
        }
    }
});

/**
 * Method responsible to handler values and update tha amount at BD
 *
 * @param pRegistry
 * @param pTypeRegistry
 */
function financialOperation(pRegistry, pTypeRegistry) {

    //get currency value from account
    var account = AccountsCol.findOne(pRegistry.accountId);

    //check if is first registry
    if (RegistrysCol.find({'accountId': account._id}).count() < 1) {
        return;
    }
    var finance = new Finance();
    try {

        //CONTINUAR
        if (Meteor.generalMethods.isInputReference_serv(pRegistry.typeRegistry)) {
            account.currency = finance.calculePayment(pRegistry.currency, pRegistry.currency);
            console.warn("Aqui: " + account.currency );
//            account.currency = parseFloat(pRegistry.currency) + parseFloat(pRegistry.currency);
        } else {
            if (account.currency < 0) {
                account.currency = parseFloat(account.currency) + parseFloat(pRegistry.currency);
            } else if (pRegistry.currency > account.currency) {
                account.currency = parseFloat(pRegistry.currency) - parseFloat(account.currency);
            } else {
                account.currency = parseFloat(account.currency) + parseFloat(pRegistry.currency);
            }
        }
    } catch (e) {
        throw new Error('Error at does calculate of registry: ' + e);
    }

    if (pRegistry.currency < 0) {
        account.averageOutput = parseFloat(account.averageOutput) + parseFloat(pRegistry.currency);
    } else {
        account.averageInput = parseFloat(account.averageInput) + parseFloat(pRegistry.currency);
    }

    //Update bd with new values
    try {
        AccountsCol.update({'_id': account._id}, {
            $set: {
                'description': account.description,
                'currency': (Math.floor(account.currency * 100) / 100).toFixed(2),
                'balance': account.balance,
                'dateCreation': moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
                'averageOutput': account.averageOutput,
                'averageInput': account.averageInput
            }
        }, function (error, program) {
            return program;
        });
    } catch (e) {
        throw new Error('Error to update account: ' + e);
    }


}