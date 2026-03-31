# Quick Start Guide - IP Technologies Contact Form

## Project Structure

```
ip-tech/
├── server/              # Backend email service
│   ├── index.js        # Email server
│   ├── .env            # Server configuration
│   └── package.json
├── src/                # Frontend React app
│   └── pages/
│       └── Contact.jsx # Contact form
└── package.json        # Frontend dependencies
```

## Initial Setup (One Time Only)

### 1. Configure Email Credentials

Navigate to the server directory and set up your email:
```bash
cd server
```

Edit the `.env` file with your Gmail credentials:
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASSWORD`: Your Gmail App Password (see below)
- `OWNER_EMAIL`: Where to receive inquiries (default: hello@iptechnologies.in)

### 2. Generate Gmail App Password

**Important**: You need an App Password, not your regular Gmail password!

1. Go to Google Account → Security
2. Enable 2-Step Verification (if not already enabled)
3. Visit https://myaccount.google.com/apppasswords
4. Select "Mail" and "Other (Custom name)"
5. Enter "IP Technologies" as the name
6. Click "Generate"
7. Copy the 16-character password
8. Paste it in `server/.env` as `EMAIL_PASSWORD`

## Starting the Application

You need **TWO separate terminals**:

### Terminal 1 - Backend Server

```bash
cd server
npm start
```

Expected output:
```
Email server is ready to send messages
Server running on http://localhost:5000
```

### Terminal 2 - Frontend React App

```bash
# From the main project root (not inside server/)
npm run dev
```

Expected output:
```
VITE v5.x.x ready in xxx ms
➜  Local:   http://localhost:5173/
```

## Testing the Contact Form

1. Open browser to http://localhost:5173/contact
2. Fill out the contact form:
   - Full Name
   - Email Address
   - Phone Number (optional)
   - Service Interested In
   - Your Message
3. Click "Send Message"
4. You should see "Message Sent!" confirmation

## What Happens When Form is Submitted?

Two emails are sent automatically:

### ✉️ Email 1 - To Owner (hello@iptechnologies.in)
- Subject: New Contact Form Submission
- Contains: All form details (name, email, phone, service, message)
- Professional HTML format

### ✉️ Email 2 - To Sender (Customer's email)
- Subject: Thank you for contacting IP Technologies
- Contains: Confirmation message + copy of their message
- Professional HTML format

## Common Issues & Solutions

### ❌ "Invalid login" error
**Solution**: Make sure you're using the Gmail App Password, not your regular password

### ❌ "Connection timeout" error  
**Solution**: Check that EMAIL_HOST and EMAIL_PORT are correct in `server/.env`

### ❌ "Port 5000 already in use"
**Solution**: Change PORT in `server/.env` to another port (e.g., 5001)

### ❌ Emails not sending
**Solution**: 
1. Check backend terminal for error messages
2. Verify `.env` credentials are correct
3. Test health endpoint: http://localhost:5000/api/health

## Development Mode (Optional)

For automatic server restart when you make changes:

```bash
# Install nodemon globally
npm install -g nodemon

# Run server with auto-reload
cd server
npm run dev
```

## Production Deployment

For production, you'll need to:

1. Deploy the backend server (Heroku, Railway, Render, etc.)
2. Update the API URL in `Contact.jsx` from `http://localhost:5000` to your deployed server URL
3. Set environment variables on your hosting platform
4. Build the frontend: `npm run build`

## File Locations

| File | Purpose |
|------|---------|
| `server/index.js` | Main email server code |
| `server/.env` | Email credentials (DO NOT commit to git) |
| `server/package.json` | Backend dependencies |
| `src/pages/Contact.jsx` | Contact form component |
| `EMAIL_SETUP.md` | Detailed email setup instructions |
| `server/README.md` | Backend documentation |

## Need Help?

Check these files for more details:
- `server/README.md` - Backend API documentation
- `EMAIL_SETUP.md` - Email configuration guide
