const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  // Check if email service is configured
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER) {
    console.warn('⚠️  Email service not configured. Emails will be logged to console only.');
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

const transporter = createTransporter();

// Send appointment confirmation email to patient
const sendAppointmentConfirmation = async (appointmentData) => {
  const { name, email, phone, treatmentType, preferredDate, appointmentId } = appointmentData;

  const treatmentNames = {
    cancer: 'Cancer Surgery',
    breast: 'Breast Surgery',
    gallbladder: 'Gall Bladder Surgery',
    hernia: 'Hernia Surgery',
    piles: 'Piles & Fistula Treatment',
    gastro: 'Gastro & Liver Treatment',
    consultation: 'General Consultation'
  };

  const formattedDate = new Date(preferredDate).toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const mailOptions = {
    from: `"Sarwal Hospital" <${process.env.EMAIL_USER || 'noreply@sarwalhospital.com'}>`,
    to: email,
    subject: 'Appointment Request Confirmed - Sarwal Hospital',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
          .info-box { background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .info-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
          .label { font-weight: bold; color: #4b5563; }
          .value { color: #1f2937; }
          .footer { background: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; border-radius: 0 0 10px 10px; }
          .btn { display: inline-block; background: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
          .reference { background: #dbeafe; color: #1e40af; padding: 15px; border-radius: 6px; text-align: center; font-family: monospace; font-size: 16px; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0;">Sarwal Hospital</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Advanced Surgical Care</p>
          </div>
          
          <div class="content">
            <h2 style="color: #2563eb;">Appointment Request Received</h2>
            <p>Dear ${name},</p>
            <p>Thank you for choosing Sarwal Hospital. We have received your appointment request and our team will contact you shortly to confirm the details.</p>
            
            <div class="info-box">
              <h3 style="margin-top: 0; color: #1f2937;">Appointment Details</h3>
              <div class="info-row">
                <span class="label">Treatment Type:</span>
                <span class="value">${treatmentNames[treatmentType]}</span>
              </div>
              <div class="info-row">
                <span class="label">Preferred Date:</span>
                <span class="value">${formattedDate}</span>
              </div>
              <div class="info-row">
                <span class="label">Phone:</span>
                <span class="value">${phone}</span>
              </div>
              <div class="info-row" style="border: none;">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
              </div>
            </div>

            <p style="margin-top: 20px;"><strong>Your Reference ID:</strong></p>
            <div class="reference">${appointmentId}</div>
            
            <p style="margin-top: 20px;">Please keep this reference ID for future communication.</p>
            
            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0;">
              <strong>⚠️ Important:</strong> This is a preliminary request. Our team will contact you within 24 hours to confirm your appointment time.
            </div>

            <p><strong>For urgent matters, please contact:</strong></p>
            <p>📞 Emergency Hotline: <a href="tel:+91-XXXXXXXXXX" style="color: #2563eb;">+91-XXXXXXXXXX</a></p>
            <p>🏥 Hospital Address: Sarwal Hospital, Ambala, Haryana, India</p>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">© ${new Date().getFullYear()} Sarwal Hospital. All rights reserved.</p>
            <p style="margin: 10px 0 0 0;">Advanced Cancer & Laparoscopic Care</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Appointment Request Confirmed - Sarwal Hospital

Dear ${name},

Thank you for choosing Sarwal Hospital. We have received your appointment request.

Appointment Details:
- Treatment Type: ${treatmentNames[treatmentType]}
- Preferred Date: ${formattedDate}
- Phone: ${phone}
- Email: ${email}

Your Reference ID: ${appointmentId}

Please keep this reference ID for future communication.

For urgent matters, please contact:
Emergency Hotline: +91-XXXXXXXXXX
Hospital Address: Sarwal Hospital, Ambala, Haryana, India

© ${new Date().getFullYear()} Sarwal Hospital. All rights reserved.
    `
  };

  try {
    if (transporter) {
      const info = await transporter.sendMail(mailOptions);
      console.log('✅ Appointment confirmation email sent:', info.messageId);
      return { success: true, messageId: info.messageId };
    } else {
      // Log email to console if transporter not configured
      console.log('\n📧 Email Preview (Email service not configured):');
      console.log('─────────────────────────────────────');
      console.log(`To: ${email}`);
      console.log(`Subject: ${mailOptions.subject}`);
      console.log(`Reference ID: ${appointmentId}`);
      console.log('─────────────────────────────────────\n');
      return { success: true, preview: true };
    }
  } catch (error) {
    console.error('❌ Error sending appointment confirmation email:', error);
    throw error;
  }
};

// Send notification to hospital admin
const sendAdminNotification = async (appointmentData) => {
  const { name, phone, email, treatmentType, preferredDate, message, appointmentId } = appointmentData;

  const treatmentNames = {
    cancer: 'Cancer Surgery',
    breast: 'Breast Surgery',
    gallbladder: 'Gall Bladder Surgery',
    hernia: 'Hernia Surgery',
    piles: 'Piles & Fistula Treatment',
    gastro: 'Gastro & Liver Treatment',
    consultation: 'General Consultation'
  };

  const formattedDate = new Date(preferredDate).toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@sarwalhospital.com';

  const mailOptions = {
    from: `"Sarwal Hospital System" <${process.env.EMAIL_USER || 'noreply@sarwalhospital.com'}>`,
    to: adminEmail,
    subject: `New Appointment Request - ${treatmentNames[treatmentType]}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #dc2626; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; }
          .info-box { background: #f3f4f6; padding: 15px; border-radius: 6px; margin: 15px 0; }
          .label { font-weight: bold; color: #4b5563; display: inline-block; width: 150px; }
          .value { color: #1f2937; }
          .urgent { background: #fee2e2; border-left: 4px solid #dc2626; padding: 15px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">🔔 New Appointment Request</h2>
          </div>
          
          <div class="content">
            <div class="urgent">
              <strong>Action Required:</strong> New patient appointment request received. Please contact the patient to confirm.
            </div>

            <div class="info-box">
              <p><span class="label">Patient Name:</span> <span class="value">${name}</span></p>
              <p><span class="label">Phone:</span> <span class="value"><a href="tel:${phone}">${phone}</a></span></p>
              <p><span class="label">Email:</span> <span class="value"><a href="mailto:${email}">${email}</a></span></p>
              <p><span class="label">Treatment Type:</span> <span class="value">${treatmentNames[treatmentType]}</span></p>
              <p><span class="label">Preferred Date:</span> <span class="value">${formattedDate}</span></p>
              <p><span class="label">Reference ID:</span> <span class="value" style="font-family: monospace;">${appointmentId}</span></p>
            </div>

            ${message ? `
              <div style="background: #f0f9ff; padding: 15px; border-radius: 6px; margin: 15px 0;">
                <strong>Additional Message:</strong>
                <p style="margin: 10px 0 0 0;">${message}</p>
              </div>
            ` : ''}

            <p style="margin-top: 20px;"><strong>Next Steps:</strong></p>
            <ol>
              <li>Contact patient at ${phone} to confirm appointment</li>
              <li>Update appointment status in the system</li>
              <li>Send confirmed date and time to patient</li>
            </ol>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Appointment Request - Sarwal Hospital

Patient Details:
- Name: ${name}
- Phone: ${phone}
- Email: ${email}
- Treatment Type: ${treatmentNames[treatmentType]}
- Preferred Date: ${formattedDate}
- Reference ID: ${appointmentId}

${message ? `Additional Message:\n${message}\n` : ''}

Action Required: Please contact the patient to confirm the appointment.
    `
  };

  try {
    if (transporter) {
      const info = await transporter.sendMail(mailOptions);
      console.log('✅ Admin notification email sent:', info.messageId);
      return { success: true, messageId: info.messageId };
    } else {
      console.log('\n📧 Admin Notification Preview (Email service not configured):');
      console.log('─────────────────────────────────────');
      console.log(`To: ${adminEmail}`);
      console.log(`Patient: ${name} (${phone})`);
      console.log(`Treatment: ${treatmentNames[treatmentType]}`);
      console.log('─────────────────────────────────────\n');
      return { success: true, preview: true };
    }
  } catch (error) {
    console.error('❌ Error sending admin notification:', error);
    throw error;
  }
};

module.exports = {
  sendAppointmentConfirmation,
  sendAdminNotification
};
