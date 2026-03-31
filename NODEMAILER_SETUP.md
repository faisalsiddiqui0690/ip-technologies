# 📧 Complete Nodemailer Email System - Setup Guide

## 🎯 What's Been Built

A **production-ready** email system using **Nodemailer** with **Node.js/Express** backend and **React** frontend integration.

### Features Implemented ✅

- ✅ **Reusable Email Service** - Clean, modular email utility
- ✅ **Professional HTML Templates** - Beautiful, responsive email designs
- ✅ **Dual Email System** - Sends to both owner AND customer
- ✅ **Input Validation** - Server-side validation with detailed errors
- ✅ **Error Handling** - Comprehensive error handling with proper responses
- ✅ **Security** - Environment variables, no exposed credentials
- ✅ **CORS Enabled** - Frontend-backend communication
- ✅ **Health Check Endpoint** - Monitor service status

---

## 📁 Project Structure

```
ip-tech/
├── server/                          # Backend Directory
│   ├── index.js                     # Express server entry point
│   ├── routes/
│   │   └── emailRoutes.js           # Email API routes (POST /api/send-email)
│   ├── utils/
│   │   ├── emailService.js          # Reusable Nodemailer utility
│   │   └── emailTemplates.js        # Professional HTML email templates
│   ├── .env                         # Environment variables (CONFIGURE THIS!)
│   ├── .env.example                 # Example environment file
│   ├── package.json                 # Backend dependencies
│   └── README.md                    # Backend documentation
│
└── src/
    └── pages/
        └── Contact.jsx              # React contact form (updated)
```

---

## 🚀 Quick Start Guide

### Step 1: Configure Email Credentials

Open `server/.env` and update with your **Hostinger email**:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (Hostinger SMTP)
EMAIL_HOST=smtp.hostinger.com
EMAIL_PORT=465
EMAIL_USER=your-email@iptechnologies.in      # ← Your actual email
EMAIL_PASS=your-email-password               # ← Your email password
EMAIL_FROM_NAME=IP Technologies

# Owner Email (receives contact form submissions)
OWNER_EMAIL=info@iptechnologies.com          # ← Where to send inquiries
```

### ⚠️ Important: Hostinger Email Setup

1. **Use your Hostinger email address** in `EMAIL_USER`
2. **Use your Hostinger email password** in `EMAIL_PASS` (NOT your Gmail app password!)
3. If using a different provider, update `EMAIL_HOST` and `EMAIL_PORT` accordingly

---

### Step 2: Start Backend Server

Open **Terminal 1**:

```bash
cd server
npm run dev
```

**Expected Output:**
```
🚀 ========================================
📧 Email Server running on port 5000
🌐 Local: http://localhost:5000
🏥 Health: http://localhost:5000/api/health
========================================

✅ Email server is ready to send messages
```

---

### Step 3: Start Frontend

Open **Terminal 2** (from project root):

```bash
npm run dev
```

**Expected Output:**
```
VITE v5.x.x ready in xxx ms
➜  Local:   http://localhost:5173/
```

---

### Step 4: Test the Contact Form

1. Open browser: `http://localhost:5173/contact`
2. Fill out the form:
   - Full Name
   - Email Address
   - Phone Number (optional)
   - Service Interested In
   - Your Message
3. Click "Send Message"
4. Check console for logs
5. **Check both email inboxes!**

---

## 📧 How It Works

### Flow Diagram

```
User submits contact form
         ↓
   React (Contact.jsx)
         ↓
   POST /api/send-email
         ↓
   Backend Validation
         ↓
   ┌─────────────────────┐
   │                     │
   ↓                     ↓
Owner Email          User Auto-Reply
(info@iptechnologies.com)  (customer@email.com)
   │                     │
   │                     │
   ✓ Contact Details    ✓ Thank You Message
   ✓ Customer Info      ✓ Message Summary
   ✓ Service Request    ✓ Next Steps Info
```

### Code Flow

1. **Frontend** (`Contact.jsx`)
   - Collects form data
   - Sends POST request to backend
   - Handles success/error states

2. **Backend Routes** (`emailRoutes.js`)
   - Validates input data
   - Calls email service
   - Returns appropriate response

3. **Email Service** (`emailService.js`)
   - Creates Nodemailer transporter
   - Sends emails with HTML templates
   - Logs success/failure

4. **Email Templates** (`emailTemplates.js`)
   - Generates professional HTML emails
   - Different templates for owner and user
   - Inline styling for email client compatibility

---

## 🔍 API Endpoints

### POST `/api/send-email`

Send contact form emails to both owner and user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "service": "Web Development",
  "message": "I have a project inquiry..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Emails sent successfully",
  "data": {
    "emailsSent": 2,
    "recipient": "john@example.com",
    "timestamp": "2026-03-31T10:30:00.000Z"
  }
}
```

**Error Response (400 - Validation):**
```json
{
  "success": false,
  "error": "Validation failed",
  "details": [
    "Name must be at least 2 characters long",
    "Message must be at least 10 characters long"
  ]
}
```

**Error Response (500 - SMTP Error):**
```json
{
  "success": false,
  "error": "Email authentication failed",
  "details": "Please check your SMTP credentials"
}
```

---

### GET `/api/health`

Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Email service is running",
  "timestamp": "2026-03-31T10:30:00.000Z"
}
```

---

## 📝 Email Templates

### Owner Email Template

**Features:**
- Professional gradient header
- Organized contact details table
- Clear message display
- Branded footer

**Content:**
- Customer name, email, phone
- Service interested in
- Full message
- Submission timestamp

### User Auto-Reply Template

**Features:**
- Thank you message with checkmark icon
- Personalized greeting
- Message summary
- Contact information
- Company branding

**Content:**
- Appreciation message
- Expected response time (24 hours)
- Message copy
- Urgent contact option (phone number)

---

## 🔒 Security Features

### Environment Variables

All sensitive data stored in `.env`:

```env
EMAIL_USER=your-email@iptechnologies.in
EMAIL_PASS=your-email-password
OWNER_EMAIL=info@iptechnologies.com
```

### Input Validation

Server-side validation ensures:
- Name: Minimum 2 characters
- Email: Valid email format (regex validation)
- Message: Minimum 10 characters

### Error Handling

- Specific error messages for SMTP issues
- Generic messages for security
- Detailed logging in development
- Minimal info in production

---

## 🛠️ Troubleshooting

### ❌ "Email authentication failed"

**Cause:** Incorrect email credentials

**Solution:**
1. Verify `EMAIL_USER` and `EMAIL_PASS` in `.env`
2. Use your Hostinger email password (not Gmail app password)
3. Check if your email provider requires special app passwords

---

### ❌ "SMTP connection failed" or "ENOTFOUND"

**Cause:** Cannot connect to email server

**Solution:**
1. Verify `EMAIL_HOST` is correct (e.g., `smtp.hostinger.com`)
2. Check `EMAIL_PORT` matches your provider:
   - Hostinger: 465 (SSL)
   - Gmail: 587 (TLS) or 465 (SSL)
3. Ensure firewall allows connections on that port

---

### ❌ "Network error" from frontend

**Cause:** Backend server not running

**Solution:**
1. Make sure backend is running: `npm run dev` in `server/` directory
2. Check terminal for "Email Server running on port 5000"
3. Verify CORS is enabled (already configured)

---

### ❌ Emails not arriving

**Cause:** Various possible causes

**Solution:**
1. Check backend terminal logs for errors
2. Verify `.env` credentials are correct
3. Test health endpoint: `http://localhost:5000/api/health`
4. Check spam folder
5. Verify email quota hasn't been exceeded

---

### ❌ Validation errors

**Cause:** Input doesn't meet requirements

**Solution:**
- Name must be ≥ 2 characters
- Email must be valid format
- Message must be ≥ 10 characters

---

## 🎨 Customization Options

### Change Email Templates

Edit `server/utils/emailTemplates.js`:
- Modify HTML structure
- Update colors to match branding
- Add logo images (use absolute URLs)
- Change layout and content

### Add More Email Types

Create new template functions in `emailTemplates.js`:
```javascript
const createOTPEmailTemplate = (otp, email) => {
  return `...`;
};

module.exports = {
  createOwnerEmailTemplate,
  createUserEmailTemplate,
  createOTPEmailTemplate,  // Add here
};
```

### Change Port

In `server/.env`:
```env
PORT=5001  # Change from default 5000
```

Then update frontend fetch URL in `Contact.jsx`:
```javascript
fetch('http://localhost:5001/api/send-email', ...)
```

---

## 📊 Production Deployment Checklist

Before deploying to production:

- [ ] Update `.env` with production email credentials
- [ ] Set `NODE_ENV=production`
- [ ] Deploy backend to hosting service (Heroku, Railway, Render, etc.)
- [ ] Update frontend API URL to deployed backend URL
- [ ] Set environment variables on hosting platform
- [ ] Test email sending in production
- [ ] Monitor email delivery logs
- [ ] Set up error tracking (e.g., Sentry)

---

## 💡 Best Practices

### 1. **Email Sending**
- Send emails in parallel (using `Promise.all`)
- Use queue system for high volume (e.g., Bull + Redis)
- Implement retry logic for failed sends

### 2. **Security**
- Never commit `.env` files to git
- Use strong passwords
- Enable rate limiting on API endpoints
- Validate all inputs server-side

### 3. **Performance**
- Cache email templates if complex
- Use background jobs for bulk emails
- Implement email queuing

### 4. **Monitoring**
- Log all email sends
- Track delivery rates
- Set up alerts for failures
- Monitor API health endpoint

---

## 📚 Additional Resources

### Nodemailer Documentation
- Official docs: https://nodemailer.com/
- SMTP configuration: https://nodemailer.com/smtp/
- Email templates: https://nodemailer.com/message/

### Hostinger SMTP Settings
- SMTP Host: `smtp.hostinger.com`
- Port: 465 (SSL) or 587 (TLS)
- Authentication: Required

### Email Client Testing
- Test on multiple email clients (Gmail, Outlook, etc.)
- Use tools like Litmus or Email on Acid
- Check mobile responsiveness

---

## 🎉 Success Indicators

When everything works correctly:

1. ✅ Backend starts without errors
2. ✅ "Email server is ready to send messages" appears
3. ✅ Frontend loads successfully
4. ✅ Form submission shows success message
5. ✅ Console logs show "✅ Emails sent successfully!"
6. ✅ Owner receives detailed inquiry email
7. ✅ Customer receives professional auto-reply
8. ✅ Both emails have proper HTML formatting

---

## 🆘 Need Help?

### Check These First:
1. Backend terminal logs
2. Browser console errors
3. `.env` configuration
4. Network tab in browser DevTools

### Useful Commands:
```bash
# Test backend health
curl http://localhost:5000/api/health

# Test email endpoint
curl -X POST http://localhost:5000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

---

**Created**: March 31, 2026  
**Tech Stack**: Node.js + Express + Nodemailer + React  
**Architecture**: RESTful API with reusable services  
**Status**: Production Ready ✅
