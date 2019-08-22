const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'boris.feoktistov@yojji.io',
    subject: 'Welcome',
    text: `${name}, congratulations`,
  })
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'boris.feoktistov@yojji.io',
    subject: 'Good bye',
    text: `${name}, ti loh`,
  })
}

module.exports = { sendWelcomeEmail, sendCancelEmail };