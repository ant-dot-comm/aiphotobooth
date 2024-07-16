import sgMail from '@sendgrid/mail';

sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

export const sendEmail = async (email: string, photo: string) => {
  const msg = {
    to: email,
    from: 'your-email@example.com',
    subject: 'Your Photo',
    text: 'Here is your photo.',
    html: `<strong>Here is your photo.</strong><br/><img src="${photo}" alt="Photo"/>`,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error: any) {
    console.error('Error sending email', error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};
