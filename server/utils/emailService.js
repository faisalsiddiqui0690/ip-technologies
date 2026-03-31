const nodemailer = require('nodemailer');

// Create transporter with SMTP configuration
let transporter = null;

const createTransporter = () => {
  try {
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'mail.ipshopy.com',
      port: parseInt(process.env.EMAIL_PORT) || 465,
      secure: true, // true for port 465 (SSL)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: true
      }
    });

    // Verify transporter configuration
    transporter.verify((error, success) => {
      if (error) {
        console.error('❌ Email configuration error:', error);
        console.log('\n⚠️  Please check your email credentials in server/.env file');
        console.log('   For Gmail: Make sure you have an App Password (not regular password)');
        console.log('   See server/GMAIL_APP_PASSWORD_GUIDE.md for instructions\n');
      } else {
        console.log('✅ Email server is ready to send messages');
      }
    });
  } catch (error) {
    console.error('❌ Failed to create email transporter:', error.message);
  }
  
  return transporter;
};

// Initialize transporter
createTransporter();

/**
 * Send email utility function
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML content
 * @param {string} options.text - Plain text content (optional)
 * @returns {Promise<Object>} - Nodemailer send result
 */
const sendEmail = async ({ to, subject, html, text = '' }) => {
  if (!transporter) {
    throw new Error('Email transporter not initialized. Please check your .env credentials.');
  }
  
  const mailOptions = {
    from: `"${process.env.EMAIL_FROM_NAME || 'IP Technologies'}" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${to}: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`❌ Error sending email to ${to}:`, error.message);
    throw error;
  }
};

module.exports = {
  sendEmail,
  transporter,
};
