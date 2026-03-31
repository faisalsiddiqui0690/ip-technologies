# Email Service Setup Guide

## Prerequisites
You need a Gmail account or any SMTP email service to send emails.

## Gmail Setup (Recommended)

### Step 1: Enable 2-Step Verification
1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Turn on 2-Step Verification

### Step 2: Generate App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Other (Custom name)"
3. Enter "IP Technologies Contact Form" as the name
4. Click "Generate"
5. Copy the 16-character password (this is your EMAIL_PASSWORD)

## Configuration

### Update Backend .env File
Open the `server/.env` file in your project root and update these values:

```env
PORT=5000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com          # Your Gmail address
EMAIL_PASSWORD=your-app-password          # The 16-char app password you generated
OWNER_EMAIL=hello@iptechnologies.in       # Where to receive contact form submissions
```

## Running the Application

### Terminal 1 - Start Backend Server
```bash
cd server
npm start
```

Or with auto-reload (requires nodemon):
```bash
cd server
npm run dev
```

You should see:
```
Email server is ready to send messages
Server running on http://localhost:5000
```

### Terminal 2 - Start Frontend
```bash
cd ..
npm run dev
```

## How It Works

When someone submits the contact form:

1. **Email to Owner** (hello@iptechnologies.in):
   - Contains all form details (name, email, phone, service, message)
   - Professional HTML formatted email

2. **Auto-Reply to Sender**:
   - Confirmation email thanking them for contacting
   - Includes a copy of their message
   - Provides contact information for urgent matters

## Testing

1. Start both servers (backend and frontend)
2. Go to the Contact page
3. Fill out the form
4. Submit
5. Check both email addresses:
   - Owner email should receive the inquiry
   - Sender email should receive the confirmation

## Troubleshooting

### "Invalid login" error
- Make sure you're using the App Password, not your regular Gmail password
- Verify 2-Step Verification is enabled
- Check that `server/.env` file has correct credentials

### "Connection timeout" error
- Check if EMAIL_HOST and EMAIL_PORT are correct in `server/.env`
- Ensure your firewall allows connections on port 587

### Emails not sending
- Check console logs in the backend terminal
- Verify `server/.env` file has correct credentials
- Test with the health endpoint: http://localhost:5000/api/health

## Alternative Email Providers

### For Outlook/Hotmail
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
```

### For Yahoo Mail
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
```

### For Custom SMTP
```env
EMAIL_HOST=your-smtp-server.com
EMAIL_PORT=587  # or 465 for SSL
```
