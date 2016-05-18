AccountsCol = new Meteor.Collection('accounts');

AccountsCol.attachSchema(new SimpleSchema({
    description: {
        type: String,
        label: 'Description',
        max: 200
    },
    currency: {
        type: String,
        label: 'Currency'
    },
    dateCreation: {
        type: String,
        autoValue: function () {
            return moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
        }
    },
    balance: {
        type: String,
        label: 'TODO',
        max: 17,
        optional: false
    },
    monthlyPlanning: {
        type: String,
        label: 'Month selected',
        max: 9
    },
    averageInput: {
        type: String,
        label: 'Averege of input',
        max: 9,
        optional: false
    },
    averageOutput: {
        type: String,
        label: 'Averege of input',
        max: 9,
        optional: false
    }
}));
