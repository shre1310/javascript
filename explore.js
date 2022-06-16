const Twilio = require("twilio");          //getting a hold of the client

const client = new Twilio(                   //setting up a new client
    "ACeb27273dbf1b03e83309cc2da4f6ae3e", 
    "2249352e341fe5fbcabf7989681ba65a")

client.messages
.list()                                       //asynchronous
.then(messages => 
   console.log(`The most recent message is ${messages[0].body}`)
   ).catch(err => (console.error(err)));

console.log('Gathering your message log');
