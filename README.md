# alexa-telephonic
Frankly I'm shocked this isn't a default speaker.

I want to be able to tell Alexa to contact my fiance/parents/brother/friends with a message - super generic and easy to do, considering how good the voice recognition can be. This is a generic function that I'll have to copy multiple times in order to get it to operate with the natural language pattern that I want.

## Installation

TODO

## Environment varialbes
You'll have to set environment variables on deployment in order to get Alexa to properly contact the person in question.

* TARGET_HUMAN - Single name of which we refer to the human. This affects only the response - not the recognition and the targeting of the application via the intent system.
* TWILIO_ACCOUNT_SID - Twilio Account SID
* TWILIO_AUTH_TOKEN - Twilio Auth Token
* PHONE_NUMBER - Which twilio phone number to text from
