
 Meteor.messages = {
     createMessage: function (pTitle, pMsg, pType) {
         new PNotify({
             title: pTitle,
             text: pMsg,
             type: pType,
             animate: {
                 animate: true,
                 in_class: 'slideInDown',
                 out_class: 'slideOutUp'
             }
         });
     }
 };


