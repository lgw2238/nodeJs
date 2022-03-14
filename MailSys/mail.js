const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8a91ca6c5c7c6f",
      pass: "8916378e00c3db"
    }
};

const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error){
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from : 'lgw2236@gmail.com',
    to: 'lgw2236@gmail.com',
    // mail title
    subject: '테스트 메일 입니다.',
    // Contents
    text: 'Eighty percent of success is showing up.'

}

send(email_data);