# alexa-telephonic
Frankly I'm shocked this isn't a default feature.

I want to be able to tell Alexa to contact my fiance/parents/brother/friends with a message - super generic and simple, but more complicated than it should be.

This is a generic skill that you would have to copy each time, essentially making each person you want to be able to easily contact its own alexa skill, with their name being the invocation.

#Warning
So far, the NLP from Alexa's part is... well, poor. I'm working on that bit. It seems Amazon depends on enough examples and typecasting phrases enough that it can target and separate meaning within each phrase. Since we're not doing that, I'm afraid that the results are really, really poor for now.

# Environment varialbes
You'll have to set environment variables on deployment in order to get Alexa to properly contact the person in question.

* TARGET_HUMAN - Single name of which we refer to the human. This affects only the response - not the recognition and the targeting of the application via the intent system.
* TWILIO_ACCOUNT_SID - Twilio Account SID
* TWILIO_AUTH_TOKEN - Twilio Auth Token
* PHONE_NUMBER - Which twilio phone number to text from


# Installation

This all uses Amazon Web Services (Lambda) and Amazon Developer Services (Alexa). Unless you're particuarly gregarious we'll be within the free tier.

We're also using Twilio, and you'll have to put down some money for credits to get off of the free tier limitations.

## Create a Twilio Account
Get and take note of the Account SID and the Auth token.

## Instal Twilio and zip it all up
Install twilio via:
```
npm install
```
and then zip up the folder CONTENTS (not the folder itself) into a .zip

## Create a Lambda function
Create a lambda function and make sure to note its ARN.

1. Create a blank function
2. Select Alexa Skills kit as the trigger
3. Name the function and ensure its set to node 4.3
4. Switch code entry type to "Upload a .ZIP file" and select your previously created archive
5. Set the environment variables as per below
6. Set the role to "existing" and then "basic execution"
7. Create and take note of the function's ARN

## Create the Alexa Skill

Here is a page by page walk through of how to set up the Alexa skill.

### Intents
Take the content from the intents.json and put it into here.

### Custom slot
Create a custom slot called message.

Not needed, but enter some random messages. It trains Amazon's NLP (natural language processing) AI, but since we're using it as a generic catch all it really doesn't matter what you put here. I put:
```
How are you doing?
The robots are attacking
I think someone is listening to me
No one has your best interests in mind - especially not yourself.
```

### Sample Utterances
I just have one:
```
SendMessageIntent {message}
```

### Publishing information
Do nothing - we're not publishing it

### Privacy & Compliance
Just say no to everything

# YOU'RE DONE
