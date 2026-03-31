# 🔐 Email Credentials Setup - Fix Authentication Error

## ❌ Current Error

```
535 5.7.8 Error: authentication failed
code: 'EAUTH'
```

This means your email username/password in `.env` is incorrect or missing.

---

## ✅ SOLUTION: Update Your Credentials

### You have **TWO OPTIONS**:

---

## OPTION 1: Use Hostinger Business Email (Recommended)

If you have a business email with Hostinger (like `info@iptechnologies.in`):

### Step 1: Find Your Email Credentials

1. **Login to Hostinger** at https://hpanel.hostinger.com/
2. Go to **Email** → **Manage**
3. Find your email account
4. Click **Change Password** if you forgot it
5. Note down:
   - Email address (e.g., `info@iptechnologies.in`)
   - Password

### Step 2: Update .env File

Open `server/.env` and update:

```env
EMAIL_HOST=smtp.hostinger.com
EMAIL_PORT=465
EMAIL_USER=your-actual-email@iptechnologies.in     # ← Your real email
EMAIL_PASS=your-actual-password                     # ← Your real password
OWNER_EMAIL=info@iptechnologies.com
```

### Step 3: Save & Test

1. Save the file
2. Nodemon will auto-restart
3. Check terminal for "✅ Email server is ready to send messages"
4. Test the contact form again

---

## OPTION 2: Use Gmail (Alternative)

If you prefer using Gmail:

### Step 1: Enable 2-Step Verification

1. Go to https://myaccount.google.com/security
2. Enable **2-Step Verification** (if not already enabled)

### Step 2: Generate App Password

1. Go to https://myaccount.google.com/apppasswords
2. Select:
   - **App**: Mail
   - **Device**: Other (Custom name)
   - Enter: "IP Technologies Contact Form"
3. Click **Generate**
4. Copy the **16-character password** (e.g., `abcd efgh ijkl mnop`)

### Step 3: Update .env File

Open `server/.env` and update:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=yourname@gmail.com                      # ← Your Gmail address
EMAIL_PASS=abcdefghijklmnop                        # ← 16-char app password (no spaces)
OWNER_EMAIL=info@iptechnologies.com
```

### Step 4: Save & Test

1. Save the file
2. Restart server manually if needed: `rs` in terminal
3. Check for success message
4. Test the contact form

---

## 🧪 Testing Your Configuration

### Test 1: Check Server Logs

After updating credentials, you should see:

```
🚀 ========================================
📧 Email Server running on port 5000
✅ Email server is ready to send messages
========================================
```

If you still see authentication errors, double-check your credentials.

### Test 2: Health Endpoint

Visit: http://localhost:5000/api/health

Expected response:
```json
{
  "status": "OK",
  "message": "Email service is running"
}
```

### Test 3: Send Test Email

Fill out the contact form at http://localhost:5173/contact

Check backend terminal for:
```
📧 Processing contact form submission from: user@example.com
✅ Email sent to info@iptechnologies.com: <message-id>
✅ Email sent to user@example.com: <message-id>
✅ Emails sent successfully!
```

---

## 🔍 Troubleshooting

### Still Getting Authentication Error?

**Check These:**

1. ✅ No extra spaces in password
2. ✅ Correct email address (case-sensitive in some providers)
3. ✅ Using actual password, not placeholder
4. ✅ For Gmail: Using App Password, NOT regular password
5. ✅ For Hostinger: Using correct SMTP settings

### Common Mistakes:

❌ **Using placeholder values:**
```env
EMAIL_USER=your-email@iptechnologies.in  # WRONG!
EMAIL_PASS=your-email-password           # WRONG!
```

✅ **Use actual credentials:**
```env
EMAIL_USER=info@iptechnologies.in        # CORRECT!
EMAIL_PASS=MySecurePassword123           # CORRECT!
```

❌ **Gmail with regular password:**
```env
EMAIL_PASS=myRegularPassword123  # WRONG! Need App Password
```

✅ **Gmail with App Password:**
```env
EMAIL_PASS=abcd efgh ijkl mnop   # CORRECT! (16-char app password)
```

---

## 📧 SMTP Settings Reference

### Hostinger
```env
EMAIL_HOST=smtp.hostinger.com
EMAIL_PORT=465
# or
EMAIL_PORT=587  # Alternative
```

### Gmail
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
# Requires App Password (not regular password!)
```

### Outlook/Hotmail
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
```

### Yahoo Mail
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
# Requires App Password
```

---

## 🎯 Quick Fix Checklist

- [ ] Open `server/.env` file
- [ ] Replace `EMAIL_USER` with your actual email address
- [ ] Replace `EMAIL_PASS` with your actual password
- [ ] For Gmail: Generate and use App Password
- [ ] Save the file
- [ ] Wait for nodemon to restart (or type `rs`)
- [ ] Look for "✅ Email server is ready to send messages"
- [ ] Test the contact form
- [ ] Check both email inboxes

---

## 💡 Pro Tips

### Security Best Practices:

1. **Never commit `.env` to git** (already in `.gitignore` ✅)
2. **Use strong passwords** (mix of letters, numbers, symbols)
3. **Rotate passwords regularly** (especially for production)
4. **Use environment-specific credentials** (dev vs prod)

### For Production:

When deploying, set environment variables on your hosting platform instead of using `.env`:

**Heroku:**
```bash
heroku config:set EMAIL_USER=info@iptechnologies.in
heroku config:set EMAIL_PASS=yourpassword
```

**Railway/Render:**
- Go to Environment Variables tab
- Add variables there

---

## 🆘 Still Having Issues?

### If using Hostinger:

1. Login to Hostinger hPanel
2. Check if email account exists
3. Verify email quota hasn't been exceeded
4. Try logging into webmail to confirm credentials work
5. Contact Hostinger support if needed

### If using Gmail:

1. Confirm 2-Step Verification is ON
2. Generate NEW App Password
3. Make sure you're copying all 16 characters (no spaces)
4. Check Google Account security settings

### Alternative for Testing:

Use **Ethereal Email** (fake SMTP for testing):

```javascript
// In emailService.js, temporarily replace transporter with:
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: 'your-ethereal-user@ethereal.email',  // Create at ethereal.email
    pass: 'your-ethereal-pass',
  },
});
```

This creates fake emails you can view online (great for development!)

---

## ✅ Success Indicators

When credentials are correct, you'll see:

```
🚀 ========================================
📧 Email Server running on port 5000
✅ Email server is ready to send messages
========================================
```

And when sending:

```
📧 Processing contact form submission from: user@example.com
✅ Email sent to info@iptechnologies.com: <abc123xyz>
✅ Email sent to user@example.com: <def456uvw>
✅ Emails sent successfully!
```

---

**Next step:** Update your credentials in `server/.env` now! 🎯
