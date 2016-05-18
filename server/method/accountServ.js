Meteor.methods({
    "saveAccountServ": function (pAccount) {

        var currency = Meteor.generalMethods.formatValueToCalc(pAccount.currency, getInputReference());

        var accountToSave = {
            description: pAccount.description,
            currency: currency,
            balance: currency,
            monthlyPlanning: pAccount.monthlyPlanning,
            averageInput: isNegativeValue(currency) ? currency : 0.0,
            averageOutput: !isNegativeValue(currency) ? currency : 0.0,
        };

        AccountsCol.insert(accountToSave, function (error, program) {

            if(error){
                console.warn("Error: " + program);
            }else{
                //add initial registry
                var createFirstRegistry = {};
                createFirstRegistry.description = '(Padrão) Saldo de abertura da conta';
                createFirstRegistry.currency = pAccount.currency;
                createFirstRegistry.typeRegistry = isNegativeValue(pAccount.currency) ? getOutputReference() : getInputReference;
                createFirstRegistry.modality = 'Abertura de conta';
                createFirstRegistry.accountId = program;

                Meteor.call('saveRegistryServ', createFirstRegistry);
            }

        });

    },
    "removeAccountServ": function (pAccountId) {
        AccountsCol.remove({'_id': pAccountId});
        RegistrysCol.remove({'accountId': pAccountId});
    }
});