# Sarwal Hospital - Backend API

## Overview
Express.js backend with MongoDB for managing hospital appointments and email notifications.

## Features
- RESTful API for appointment management
- Email notifications for patients and hospital admin
- Input validation and error handling
- MongoDB database with Mongoose ODM
- CORS enabled for frontend integration

## API Endpoints

### Health Check
```
GET /api/health
```

### Appointments

#### Create Appointment
```
POST /api/appointments
Content-Type: application/json

{
  "name": "John Doe",
  "phone": "+91-9876543210",
  "email": "john@example.com",
  "treatmentType": "consultation",
  "preferredDate": "2026-03-01",
  "message": "Optional message"
}
```

**Treatment Types:** `cancer`, `breast`, `gallbladder`, `hernia`, `piles`, `gastro`, `consultation`

#### Get All Appointments
```
GET /api/appointments?status=pending&limit=50&page=1
```

#### Get Single Appointment
```
GET /api/appointments/:id
```

#### Update Appointment Status
```
PATCH /api/appointments/:id/status
Content-Type: application/json

{
  "status": "confirmed"
}
```

**Status Values:** `pending`, `confirmed`, `cancelled`, `completed`

#### Delete Appointment
```
DELETE /api/appointments/:id
```

#### Get Statistics
```
GET /api/appointments/stats/summary
```

## Email Configuration

The system sends email notifications to patients and hospital admin when appointments are created.

### Setup Email Service

1. **For Gmail:**
   - Go to https://myaccount.google.com/apppasswords
   - Generate an App Password
   - Update `.env` file:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
ADMIN_EMAIL=admin@sarwalhospital.com
```

2. **For SendGrid:**

```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=apikey
EMAIL_PASSWORD=your-sendgrid-api-key
ADMIN_EMAIL=admin@sarwalhospital.com
```

3. **For Mailgun:**

```env
EMAIL_HOST=smtp.mailgun.org
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=postmaster@your-domain.mailgun.org
EMAIL_PASSWORD=your-mailgun-smtp-password
ADMIN_EMAIL=admin@sarwalhospital.com
```

4. **For AWS SES:**

```env
EMAIL_HOST=email-smtp.us-east-1.amazonaws.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-ses-smtp-username
EMAIL_PASSWORD=your-ses-smtp-password
ADMIN_EMAIL=admin@sarwalhospital.com
```

### Without Email Configuration

If email environment variables are not set, the system will:
- Log email previews to the console
- Continue to save appointments to the database
- Show success messages to users

This is useful for development and testing.

## Installation

```bash
cd /app/backend-express
npm install
```

## Running the Server

```bash
# Development
npm start

# The server runs on port 8001
```

## Environment Variables

Create a `.env` file in `/app/backend-express/`:

```env
NODE_ENV=development
PORT=8001
MONGO_URL=mongodb://localhost:27017/sarwal_hospital

# Email Configuration (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=admin@sarwalhospital.com
```

## Database

MongoDB is used for storing appointment data. The database name is `sarwal_hospital`.

### Collections

**appointments** - Stores all appointment records with fields:
- name (String, required)
- phone (String, required)
- email (String, optional)
- treatmentType (Enum, required)
- preferredDate (Date, required)
- message (String, optional)
- status (Enum: pending/confirmed/cancelled/completed)
- createdAt (Date)
- updatedAt (Date)

## Email Templates

The system sends two types of emails:

1. **Patient Confirmation Email**
   - Professional HTML template
   - Includes appointment details
   - Shows reference ID for tracking
   - Emergency contact information

2. **Admin Notification Email**
   - Urgent notification style
   - Patient contact information
   - Appointment details
   - Action items for follow-up

## Security

- Helmet.js for security headers
- Input validation with express-validator
- CORS configuration
- MongoDB injection prevention via Mongoose

## Error Handling

All endpoints return consistent JSON responses:

**Success:**
```json
{
  "success": true,
  "data": { ... },
  "message": "..."
}
```

**Error:**
```json
{
  "success": false,
  "message": "Error description",
  "errors": [ ... ]
}
```

## Testing

Test the API using curl:

```bash
# Create appointment
curl -X POST http://localhost:8001/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Patient",
    "phone": "+91-9876543210",
    "email": "test@example.com",
    "treatmentType": "consultation",
    "preferredDate": "2026-03-01"
  }'

# Get all appointments
curl http://localhost:8001/api/appointments

# Get appointment by ID
curl http://localhost:8001/api/appointments/APPOINTMENT_ID
```

## Logs

Supervisor logs are available at:
- `/var/log/supervisor/backend-express.out.log` - Application logs
- `/var/log/supervisor/backend-express.err.log` - Error logs

View logs:
```bash
tail -f /var/log/supervisor/backend-express.out.log
```

## Support

For issues or questions, contact the development team.
