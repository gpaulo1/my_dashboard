accountModel = function(pDescription, pCurrency,pBalance, pMonth){

    this.description = pDescription;
    this.currency = pCurrency;
    this.dateCreation = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    this.balance = pBalance;
    this.month = pMonth;
    
    if(pCurrency > 0){
        this.averageInput = pCurrency;
        this.averageOutput = 0.0;
    }else{
        this.averageOutput = pCurrency;
        this.averageInput = 0.0;
    }

};