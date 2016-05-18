RegistrysCol = new Meteor.Collection('registrys');

RegistrysCol.attachSchema(new SimpleSchema({
    description: {
        type: String,
        label: 'Description',
        max: 200,
    },
    currency: {
        type: String,
        decimal: true,
        label: 'Currency',
    },
    typeRegistry: {
        type: String,
        label: 'Registry operation type',
        max: 7,
        optional: true,
        allowedValues: ['INPUT', 'OUTPUT'],
        autoform: {
            options: [
                {
                    label: 'Entrada',
                    value: 'INPUT'
                },
                {
                    label: 'Saída',
                    value: 'OUTPUT'
                }
            ]
        }
    },
    modality: {
        type: String,
        label: 'Registry modality description',
        max: 50,
        defaultValue: 'Modality not defined'
    },
    dateCreation: {
        type: String,
        autoValue: function () {
            return moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        },
        autoform: {
            omit: true,
            label: false
        }
    },
    accountId: {
        type: String,
        label: 'Account linked id',
        max: 17,
        optional: false,
        autoform: {
            omit: true,
            label: false
        }
    }
}));
