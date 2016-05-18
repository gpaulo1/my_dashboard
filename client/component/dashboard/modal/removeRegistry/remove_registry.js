Template.modalRemoveRegistry.events({
    'click #removeRegistry':function(){
        var removedSuccess = 'Registro removido com sucesso de sua conta!';
        var removedError = 'Ocorreu um erro ao tentar remover o registro';
        Meteor.call('removeRegistryServ', Session.get('selectedRegistrySession'),function(error, program){
            if(error){
                Meteor.messages.createMessage('Erro!', removedError, 'error');
            }else{
                Meteor.messages.createMessage('Sucesso!', removedSuccess, 'success');
            }

        });
    }
});
