
import twilio from "twilio";

const accountSid = 'ACd1b722e4c1e453a340bca6396ae74faa';
const authToken = 'e034aa25ae23ab207b7b743fc26582af';

const client = twilio(accountSid, authToken);


async function sendSMS(to, message) {
  try {
    const result = await client.messages.create({
      body: "oh ma guturula",
      from: '+15075095442',
      to:"+918920681592",
    });

    console.log('SMS sent successfully. SID:', result.sid);
  } catch (error) {
    console.error('Error sending SMS:', error.message);
  }
}


sendSMS('+1234567890', 'Hello, this is a test SMS from your SMS service!');