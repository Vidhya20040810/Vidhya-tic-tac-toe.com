// Download the helper library from https://www.twilio.com/docs/node/install
const twilio = require("twilio"); // Or, for ESM: import twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function fetchPhoneNumber() {
    const phoneNumber = await client.lookups.v2
      .phoneNumbers("+916362924396")
      .fetch({ fields: "sms_pumping_risk" });
  
    console.log(phoneNumber.smsPumpingRisk);
  }
  
  fetchPhoneNumber();

async function createMessage() {
  const message = await client.messages.create({
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    from: "+18452951531",
    to: "+6362924396",
  });

  console.log(message.body);
}

createMessage();
