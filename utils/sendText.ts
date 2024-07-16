import {Twilio} from 'twilio';

const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const client = new Twilio(accountSid, authToken);

export const sendText = async (phone: string, photo: string) => {
  try {
    const message = await client.messages.create({
      body: `Here is your photo: ${photo}`,
      from: 'YOUR_TWILIO_PHONE_NUMBER',
      to: phone,
    });

    console.log('Text message sent successfully', message.sid);
  } catch (error) {
    console.error('Error sending text message', error);
  }
};
