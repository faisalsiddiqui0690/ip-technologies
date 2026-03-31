# 🧪 Email Testing Guide

## Quick Test Command

```bash
cd server
npm run test:email
```

This will:
1. ✅ Check your email credentials
2. ✅ Test SMTP connection
3. ✅ Send a test email to YOUR email address
4. ✅ Verify everything is working

---

## What Each Test Does

### 1. Environment Check
- Verifies EMAIL_USER and EMAIL_PASS are set in .env
- Shows which credentials are configured
- Exits early if not configured (prevents errors)

### 2. SMTP Connection Test
- Connects to your email server
- Verifies authentication works
- Checks port and host configuration

### 3. Email Sending Test
- Sends a beautiful HTML email to your inbox
- Includes all configuration details
- Confirms end-to-end functionality

---

## Expected Output (Success)

```
🔍 Testing Nodemailer Configuration...

📋 Checking Environment Variables:
   EMAIL_HOST: ✅ Set
   EMAIL_PORT: 465
   EMAIL_USER: ✅ Set (hidden)
   EMAIL_PASS: ✅ Set (hidden)
   OWNER_EMAIL: ✅ Set

🔄 Testing SMTP connection...

✅ SMTP Connection Successful!
   Email server is ready to send messages

📧 Sending test email...

✅ Test Email Sent Successfully!
   Message ID: <abc123xyz@smtp.hostinger.com>

📬 Check your inbox: your-email@iptechnologies.in
   Subject: "✅ Nodemailer Test Successful!"

🎉 Your Nodemailer setup is working perfectly!

💡 Now you can:
   1. Start the frontend: npm run dev (in root directory)
   2. Go to http://localhost:5173/contact
   3. Submit the contact form
   4. Both owner and customer will receive emails
```

---

## Expected Output (Failure - Not Configured)

```
🔍 Testing Nodemailer Configuration...

📋 Checking Environment Variables:
   EMAIL_USER: ❌ Not configured
   EMAIL_PASS: ❌ Not configured

❌ ERROR: Email credentials not configured in .env file!
   Please update server/.env with your actual email credentials.
```

**Solution:** Open `server/.env` and add your real email credentials.

---

## Expected Output (Failure - Wrong Credentials)

```
🔍 Testing Nodemailer Configuration...

📋 Checking Environment Variables:
   EMAIL_USER: ✅ Set (hidden)
   EMAIL_PASS: ✅ Set (hidden)

🔄 Testing SMTP connection...

❌ SMTP Connection Failed!
   Error: Invalid login: 535 Authentication failed

💡 Troubleshooting:
   1. Check if EMAIL_USER and EMAIL_PASS are correct in .env
   2. For Gmail, use App Password (not regular password)
   3. Verify your email provider allows SMTP connections
   4. Check firewall settings for port 465

   See REAL_EMAIL_SETUP.md for detailed instructions.
```

**Solution:** Update credentials in `.env` with correct values.

---

## Common Issues & Solutions

### Issue 1: "Email credentials not configured"
**Solution:** Edit `server/.env` and replace placeholder values with real credentials.

### Issue 2: "Authentication failed"
**Solutions:**
- **Hostinger**: Use your full email address and correct password
- **Gmail**: Use 16-character App Password (get from https://myaccount.google.com/apppasswords)
- **Other**: Check email provider's SMTP requirements

### Issue 3: "Connection timeout"
**Solutions:**
- Check firewall settings
- Verify SMTP port (465 or 587)
- Ensure network connectivity
- Try different port if needed

### Issue 4: "Email quota exceeded"
**Solution:** Wait 24 hours or upgrade your email plan.

---

## After Successful Test

Once the test passes:

1. ✅ Your Nodemailer is configured correctly
2. ✅ You can now test the contact form
3. ✅ Real emails will be sent to both owner and customer

### Next Steps:

**Terminal 1** (Backend):
```bash
cd server
npm run dev
```

**Terminal 2** (Frontend):
```bash
npm run dev
```

Then visit: http://localhost:5173/contact

---

## Test Email Content

The test email includes:
- ✅ Professional HTML design
- ✅ Configuration verification
- ✅ Success confirmation
- ✅ Next steps guide
- ✅ Plain text fallback

You'll receive it at the email address specified in `EMAIL_USER`.

---

## Production Checklist

Before going live:

- [ ] Test email sending works
- [ ] OWNER_EMAIL is set correctly
- [ ] Using production email credentials
- [ ] NODE_ENV=production (optional)
- [ ] Frontend API URL updated (if deploying)

---

**Remember:** Never commit your `.env` file to git! It contains sensitive credentials.
