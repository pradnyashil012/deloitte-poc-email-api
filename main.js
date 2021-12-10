const nodemailer = require("nodemailer");

// If you're using Amazon SES in a region other than US West (Oregon),
// replace email-smtp.us-west-2.amazonaws.com with the Amazon SES SMTP
// endpoint in the appropriate AWS Region.
// const smtpEndpoint = "email-smtp.ap-south-1.amazonaws.com";

// The port to use when connecting to the SMTP server.
// const port = 587;

// Replace sender@example.com with your "From" address.
// This address must be verified with Amazon SES.
// const senderAddress = "Aayush Shah <aayush.shah@oneture.com>";

// Replace recipient@example.com with a "To" address. If your account
// is still in the sandbox, this address must be verified. To specify
// multiple addresses, separate each address with a comma.
// var toAddresses = "pradnyashil.gajbhiye@oneture.com";

// CC and BCC addresses. If your account is in the sandbox, these
// addresses have to be verified. To specify multiple addresses, separate
// each address with a comma.
// var ccAddresses = "cc-recipient0@example.com,cc-recipient1@example.com";
// var bccAddresses = "bcc-recipient@example.com";

// Replace smtp_username with your Amazon SES SMTP user name.
// const smtpUsername = "AKIAQT7QAMRIXWFE6ZHD";

// Replace smtp_password with your Amazon SES SMTP password.
// const smtpPassword = "BNHnr0BKsk87k7ERSQ6IGtVZWmjihw2HeA7+bD/hlnzP";

// (Optional) the name of a configuration set to use for this message.
// var configurationSet = "ConfigSet";

// The subject line of the email
// var subject = "Official Email Address Verification";

// The email body for recipients with non-HTML email clients.
// var body_text = `Dear Abhijeet Sharma,
// ---------------------------------
// Thank you for submitting the basic details for registering yourself on Deloitte Portal.
// Please click on the link below to activate your account:
// `;

// var body = "It is working!";
// The body of the email for recipients whose email clients support HTML content.
// var body_html = `<html>
// <head></head>
// <body>
//   <h1>Verification of Your Email Address</h1>
//   <p>Dear <strong>Abhijeet Sharma</strong>,</p>
//   <p>Thank you for submitting the basic details for registering yourself on Deloitte Portal.</p>
//   <p>Please click on the link below to activate your account: <a href="http://localhost:4200/registration2">http://localhost:4200/registration2</a></p>
// </body>
// </html>`;

// The message tags that you want to apply to the email.

const main = async () => {
  const smtpEndpoint = "email-smtp.ap-south-1.amazonaws.com";
  const port = 587;
  const senderAddress = "Aayush Shah <aayush.shah@oneture.com>";
  var toAddresses = "aayush.shah@oneture.com";
  const smtpUsername = "AKIAQT7QAMRIXWFE6ZHD";
  const smtpPassword = "BNHnr0BKsk87k7ERSQ6IGtVZWmjihw2HeA7+bD/hlnzP";
  var subject = "Official Email Address Verification";

  // The body of the email for recipients whose email clients support HTML content.
  var body_html = `<html>
  <head></head>
  <body>
    <h1>Verification of Your Email Address</h1>
    <p>Dear <strong>Pradnyashil Gajbhiye</strong>,</p>
    <p>Thank you for submitting the basic details for registering yourself on Deloitte Portal.</p>
    <p>Please click on the link below to activate your account: <a href="http://localhost:4200/registration2">http://localhost:4200/registration2</a></p>
  </body>
  </html>`;

  var tag0 = "key0=value0";
  var tag1 = "key1=value1";

  // Create the SMTP transport.
  let transporter = nodemailer.createTransport({
    host: smtpEndpoint,
    port: port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: smtpUsername,
      pass: smtpPassword,
    },
  });

  // Specify the fields in the email.
  let mailOptions = {
    from: senderAddress,
    to: toAddresses,
    subject: subject,
    // text: body_text,
    html: body_html,
    // Custom headers for configuration set and message tags.
    headers: {
      "X-SES-MESSAGE-TAGS": tag0,
      "X-SES-MESSAGE-TAGS": tag1,
    },
  };

  // Send the email.
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent! Message ID: ", info.messageId);
  } catch (error) {
    if (error) {
      console.error(error.message);
    }
  }
};

module.exports = main;
