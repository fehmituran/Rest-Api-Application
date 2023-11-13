const nodemailer = require('nodemailer')

require('dotenv').config()

const sendEmail = async (data) => {
    const { to, html: text, subject  } = data
    const config = {
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: "fehmituran@outlook.com",
        pass: process.env.PASSWORD,
      },
    }
  
    const transporter = nodemailer.createTransport(config)
    const emailOptions = {
      from: "fehmituran@outlook.com",
      to,
      subject,
      text,
    }

    await transporter
      .sendMail(emailOptions)
      .catch((err) => console.log(err))
  };


  module.exports = {
    sendEmail
  };