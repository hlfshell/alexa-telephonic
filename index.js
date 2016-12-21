const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.handler = (event, context, done) => {
    
    twilio.messages.create({
        to: process.env.TO_PHONE_NUMBER,
        from: process.env.TWILIO_PHONE_NUMBER,
        body: event.request.intent.slots.message.value
    }, function(err, response){
       if(err){
           console.log(err);
           return done(null, {
               response: {
                   outputSpeech: {
                       type: "PlainText",
                       text: "I'm sorry, but something went wrong handling that request"
                   }
               }
           });
       }
       var response = {
          response: {
              outputSpeech: {
                  type: "PlainText",
                  text: "Message sent to " + process.env.TARGET_HUMAN // + " "event.request.intent.slots.message.value
              }
          }  
        };
        done(null, response); 
    });
    
};