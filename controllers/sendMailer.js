const nodemailer = require("nodemailer");
const sendMail = async (req, res) => {
//   let testAccount = await nodemailer.createTestAccount();

  //connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 4000,
    auth: {
      user: "jeevan13798@gmail.com",
      pass: "ibot lpsq iljs akhs",
    },
  });
  let info = await transporter.sendMail({
    from: '"Jeevan" <jeevanbala@cqlsys.co.uk>', // sender address
    to: "vaneetkumar@cqlsys.co.uk", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  res.json(info);
};
module.exports = {sendMail: sendMail};
