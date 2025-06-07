import dayjs from "dayjs";
import { emailTemplates } from "./emails-template.js";
import transporter, { accountEmail } from "../config/nodemailer.js";

export const sendReminderEmail = async ({ to, type, subcription }) => {
    if(!to || !type) {
        throw new Error('Missing required parameters');
    }

    const template = emailTemplates.find((t) => t.label === type);

    if(!template){
        throw new Error(`Template for type ${type} not found`);
    }

    const mailInfo = {
        userName: subcription.user.name,
        subcriptionName: subcription.name,
        renewalDate: dayjs(subcription.renewalDate).format('DD/MM/YYYY'),
        planName: subcription.name,
        planPrice: `${subcription.currency} ${subcription.price} (${subcription.frequency})`,
        paymentMethod: subcription.paymentMethod,
    };

    const message = template.generateBody(mailInfo);
    const subject = template.generateSubject(mailInfo);

    const mailOptions = {
        from: accountEmail,
        to,
        subject,
        html: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error, 'Error sending email');
        }

        console.log(`Email sent: ${info.response}`);
    });
};