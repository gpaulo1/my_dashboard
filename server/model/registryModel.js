registryModel = function(pDescription, pCurrency, pTypeRegistry, pModality, pAccountId){
    this.description = pDescription;
    this.currency = pCurrency;
    this.typeRegistry = pTypeRegistry;
    this.modality = pModality;
    this.dateCreation = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    this.accountId = pAccountId;
};
