const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.handler = (event, context, done) => {
    
    //Determine if this is a new message or if this is a confirmed message
    console.log("EVENT", event);
    console.log("EVENT.REQUEST", event.request);
    if(event.session.new){ //brand new message

        //Let's save the message to session attributes, and ask if the message is good to send
        done(null, {
            sessionAttributes: {
                message: event.request.intent.slots.message.value
            },
            response: {
                outputSpeech: {
                    type: "PlainText",
                    text: "Send the following to " + process.env.TARGET_HUMAN + "? " + event.request.intent.slots.message.value
                },
                shouldEndSession: false
            }
        });

    } else { //handle the reprompt

        //Did the say No or Cancel?
        var send = ["no", "cancel", "stop"].indexOf(event.request.intent.slots.message.value.toLowerCase()) == -1;

        if(send){ //Send the message!
            twilio.messages.create({
                to: process.env.TO_PHONE_NUMBER,
                from: process.env.TWILIO_PHONE_NUMBER,
                body: event.session.attributes.message
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
        } else { //Cancel / Stop / No
            done(null, { response: { shouldEndSession: true } });
        }

    }
    
};