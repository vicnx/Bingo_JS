var nodemailer = require("nodemailer");
const core = require("@actions/core");

const author_email = core.getInput("author_email");
const send_email = core.getInput("send_email");
const send_pass = core.getInput("send_pass");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: send_email,
    pass: send_pass,
  },
});

var mailOptions = {
  from: send_email,
  to: author_email,
  subject: "Resultado del workflow ejecutado",
  text: "Test1",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
