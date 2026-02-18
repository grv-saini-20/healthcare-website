const { Resend } = require('resend');

// Initialize Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Check if Resend is configured
if (!resend) {
  console.warn('⚠️  Resend API key not configured. Emails will be logged to console only.');
  console.warn('   Add RESEND_API_KEY to .env to enable email sending.');
}

// Send appointment confirmation email to patient
const sendAppointmentConfirmation = async (appointmentData) => {
  const { name, email, phone, treatmentType, preferredDate, appointmentId } = appointmentData;

  if (!email) {
    console.log('ℹ️  No email provided for patient, skipping confirmation email');
    return { success: true, skipped: true };
  }

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

  const emailContent = {
    from: process.env.FROM_EMAIL || 'Sarwal Hospital <onboarding@resend.dev>',
    to: email,
    subject: 'Appointment Request Confirmed - Sarwal Hospital',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f3f4f6; }
          .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
          .header { background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%); color: white; padding: 40px 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
          .header p { margin: 10px 0 0 0; opacity: 0.95; font-size: 16px; }
          .content { padding: 40px 30px; }
          .content h2 { color: #2563eb; margin-top: 0; font-size: 24px; }
          .info-box { background: #f9fafb; padding: 24px; border-radius: 8px; margin: 24px 0; border-left: 4px solid #2563eb; }
          .info-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #e5e7eb; }
          .info-row:last-child { border-bottom: none; }
          .label { font-weight: 600; color: #4b5563; }
          .value { color: #1f2937; text-align: right; }
          .reference { background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); color: #1e40af; padding: 20px; border-radius: 8px; text-align: center; font-family: 'Courier New', monospace; font-size: 18px; font-weight: 700; margin: 24px 0; letter-spacing: 1px; }
          .alert-box { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; margin: 24px 0; border-radius: 8px; }
          .alert-box strong { color: #92400e; display: block; margin-bottom: 8px; }
          .contact-info { background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 24px 0; }
          .contact-info p { margin: 8px 0; color: #1e40af; }
          .contact-info a { color: #2563eb; text-decoration: none; font-weight: 600; }
          .footer { background: #f9fafb; padding: 24px 30px; text-align: center; color: #6b7280; font-size: 14px; border-top: 1px solid #e5e7eb; }
          .footer p { margin: 8px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏥 Sarwal Hospital</h1>
            <p>Advanced Surgical Care · Ambala, Haryana</p>
          </div>
          
          <div class="content">
            <h2>Appointment Request Received</h2>
            <p>Dear <strong>${name}</strong>,</p>
            <p>Thank you for choosing Sarwal Hospital. We have received your appointment request and our medical team will contact you shortly to confirm the details.</p>
            
            <div class="info-box">
              <h3 style="margin-top: 0; font-size: 18px; color: #1f2937;">📋 Appointment Details</h3>
              <div class="info-row">
                <span class="label">Treatment Type</span>
                <span class="value">${treatmentNames[treatmentType]}</span>
              </div>
              <div class="info-row">
                <span class="label">Preferred Date</span>
                <span class="value">${formattedDate}</span>
              </div>
              <div class="info-row">
                <span class="label">Phone Number</span>
                <span class="value">${phone}</span>
              </div>
              <div class="info-row">
                <span class="label">Email</span>
                <span class="value">${email}</span>
              </div>
            </div>

            <p style="margin-top: 24px; font-weight: 600; font-size: 16px;">Your Reference ID:</p>
            <div class="reference">${appointmentId}</div>
            
            <p style="margin-top: 16px; font-size: 14px; color: #6b7280;">Please save this reference ID for your records and future communication.</p>
            
            <div class="alert-box">
              <strong>⏱️ What Happens Next?</strong>
              <p style="margin: 0; color: #92400e;">Our team will review your request and contact you within 24 hours to confirm your appointment time and provide any preparation instructions.</p>
            </div>

            <div class="contact-info">
              <p style="margin-top: 0;"><strong>📞 Emergency Contact:</strong></p>
              <p><a href="tel:+91-XXXXXXXXXX">+91-XXXXXXXXXX</a> (Available 24/7)</p>
              <p style="margin-bottom: 0;"><strong>📍 Visit Us:</strong><br>Sarwal Hospital, Ambala, Haryana, India</p>
            </div>
          </div>
          
          <div class="footer">
            <p style="font-weight: 600; color: #374151; margin-bottom: 12px;">Dr. Ankush Sarwal</p>
            <p>Oncosurgeon · Laparoscopic Surgeon · Gastro Surgeon</p>
            <p style="margin-top: 16px;">© ${new Date().getFullYear()} Sarwal Hospital. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    if (resend) {
      const { data, error } = await resend.emails.send(emailContent);
      
      if (error) {
        console.error('❌ Resend error:', error);
        throw error;
      }
      
      console.log('✅ Appointment confirmation email sent via Resend:', data.id);
      return { success: true, messageId: data.id };
    } else {
      // Preview mode
      console.log('\n📧 [PREVIEW] Patient Confirmation Email:');
      console.log('─────────────────────────────────────────');
      console.log(`To: ${email}`);
      console.log(`Subject: ${emailContent.subject}`);
      console.log(`Patient: ${name}`);
      console.log(`Treatment: ${treatmentNames[treatmentType]}`);
      console.log(`Reference ID: ${appointmentId}`);
      console.log('─────────────────────────────────────────\n');
      return { success: true, preview: true };
    }
  } catch (error) {
    console.error('❌ Error sending appointment confirmation:', error.message);
    // Don't throw - we don't want to fail appointment creation if email fails
    return { success: false, error: error.message };
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

  const emailContent = {
    from: process.env.FROM_EMAIL || 'Sarwal Hospital <onboarding@resend.dev>',
    to: adminEmail,
    subject: `🔔 New Appointment: ${treatmentNames[treatmentType]} - ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f3f4f6; }
          .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
          .header { background: #dc2626; color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { padding: 30px; }
          .urgent { background: #fee2e2; border-left: 4px solid #dc2626; padding: 20px; margin: 20px 0; border-radius: 8px; }
          .urgent strong { color: #991b1b; display: block; font-size: 16px; margin-bottom: 8px; }
          .info-box { background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .info-row { padding: 10px 0; border-bottom: 1px solid #e5e7eb; }
          .info-row:last-child { border-bottom: none; }
          .label { font-weight: 600; color: #4b5563; display: inline-block; width: 140px; }
          .value { color: #1f2937; }
          .message-box { background: #f0f9ff; border-left: 4px solid #2563eb; padding: 16px; margin: 20px 0; border-radius: 8px; }
          .actions { background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .actions h3 { margin-top: 0; color: #92400e; }
          .actions ol { margin: 10px 0; padding-left: 20px; }
          .actions li { margin: 8px 0; color: #78350f; }
          a { color: #2563eb; text-decoration: none; font-weight: 600; }
          .reference { font-family: 'Courier New', monospace; background: #e0e7ff; padding: 4px 8px; border-radius: 4px; color: #3730a3; font-weight: 700; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔔 New Appointment Request</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.95;">Action Required</p>
          </div>
          
          <div class="content">
            <div class="urgent">
              <strong>⚡ Immediate Action Required</strong>
              <p style="margin: 0;">New patient appointment request received. Please contact the patient to confirm appointment details.</p>
            </div>

            <div class="info-box">
              <div class="info-row">
                <span class="label">Patient Name:</span>
                <span class="value"><strong>${name}</strong></span>
              </div>
              <div class="info-row">
                <span class="label">Phone:</span>
                <span class="value"><a href="tel:${phone}">${phone}</a></span>
              </div>
              <div class="info-row">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${email}">${email || 'Not provided'}</a></span>
              </div>
              <div class="info-row">
                <span class="label">Treatment:</span>
                <span class="value">${treatmentNames[treatmentType]}</span>
              </div>
              <div class="info-row">
                <span class="label">Preferred Date:</span>
                <span class="value">${formattedDate}</span>
              </div>
              <div class="info-row">
                <span class="label">Reference ID:</span>
                <span class="value"><span class="reference">${appointmentId}</span></span>
              </div>
            </div>

            ${message ? `
              <div class="message-box">
                <strong style="color: #1e40af; display: block; margin-bottom: 8px;">💬 Additional Message:</strong>
                <p style="margin: 0; color: #1e3a8a;">${message}</p>
              </div>
            ` : ''}

            <div class="actions">
              <h3>📋 Next Steps:</h3>
              <ol>
                <li>Call patient at <a href="tel:${phone}">${phone}</a> within 24 hours</li>
                <li>Confirm appointment date and time</li>
                <li>Update appointment status in the system</li>
                <li>Send confirmed details to patient</li>
                ${treatmentType === 'cancer' || treatmentType === 'breast' ? '<li>Prepare necessary pre-surgery instructions</li>' : ''}
              </ol>
            </div>

            <p style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
              This is an automated notification from Sarwal Hospital Appointment System
            </p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    if (resend) {
      const { data, error } = await resend.emails.send(emailContent);
      
      if (error) {
        console.error('❌ Resend error:', error);
        throw error;
      }
      
      console.log('✅ Admin notification sent via Resend:', data.id);
      return { success: true, messageId: data.id };
    } else {
      console.log('\n📧 [PREVIEW] Admin Notification:');
      console.log('─────────────────────────────────────────');
      console.log(`To: ${adminEmail}`);
      console.log(`Patient: ${name} (${phone})`);
      console.log(`Treatment: ${treatmentNames[treatmentType]}`);
      console.log(`Date: ${formattedDate}`);
      console.log('─────────────────────────────────────────\n');
      return { success: true, preview: true };
    }
  } catch (error) {
    console.error('❌ Error sending admin notification:', error.message);
    return { success: false, error: error.message };
  }
};

module.exports = {
  sendAppointmentConfirmation,
  sendAdminNotification
};
