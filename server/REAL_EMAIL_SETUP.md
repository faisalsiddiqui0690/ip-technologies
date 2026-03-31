# 📧 REAL EMAIL SETUP - QUICK GUIDE

## ⚠️ ACTION REQUIRED: Update Your Email Credentials

Your email system is configured but needs YOUR actual email credentials to send real emails.

---

## 🎯 What You Need to Do NOW:

### Step 1: Open `.env` File

Open this file: `server/.env`

### Step 2: Update These TWO Lines:

```env
EMAIL_USER=your-actual-email@iptechnologies.in     # ← Replace with your REAL email
EMAIL_PASS=your-actual-password                     # ← Replace with your REAL password
```

**Example (if your email is info@iptechnologies.in):**
```env
EMAIL_USER=info@iptechnologies.in
EMAIL_PASS=MySecurePassword123!
```

---

## 📝 Where to Find Your Email Credentials:

### If Using Hostinger Business Email:

1. **Login to Hostinger**: https://hpanel.hostinger.com/
2. Go to **Email** section
3. Find your email account
4. If you forgot password, click **Change Password**
5. Use that email address and password in `.env`

### If Using Gmail:

Change these lines in `.env`:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=yourname@gmail.com
EMAIL_PASS=abcdefghijklmnop    # 16-char App Password (NOT regular password!)
```

**To get Gmail App Password:**
1. Go to https://myaccount.google.com/apppasswords
2. Enable 2-Step Verification if needed
3. Create app password for "Mail"
4. Copy the 16-character code (no spaces)

---

## ✅ After Updating .env:

1. **Save the file**
2. Server will auto-restart (nodemon)
3. Look for this in terminal:
   ```
   ✅ Email server is ready to send messages
   ```
4. **Test the contact form** at http://localhost:5173/contact
5. **Check your REAL email inbox!**

---

## 🧪 Test It:

1. Fill out contact form
2. Submit
3. Check these inboxes:
   - **Owner email** (info@iptechnologies.com) - receives inquiry
   - **Customer email** (the one you used in form) - receives auto-reply

---

## 🔍 Troubleshooting:

### Still Getting Authentication Error?

**Check:**
- ✅ No extra spaces in EMAIL_USER or EMAIL_PASS
- ✅ Using correct email address (case-sensitive)
- ✅ Using correct password
- ✅ For Gmail: Using App Password, not regular password

### Common Mistakes:

❌ **WRONG:**
```env
EMAIL_USER=YOUR-ACTUAL-EMAIL@iptechnologies.in
EMAIL_PASS=your-actual-password
```

✅ **CORRECT:**
```env
EMAIL_USER=info@iptechnologies.in
EMAIL_PASS=MyRealPassword123!
```

---

## 📧 SMTP Settings Reference:

### Hostinger
```env
EMAIL_HOST=smtp.hostinger.com
EMAIL_PORT=465
```

### Gmail
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
```

### Outlook
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
```

---

## 🎉 Success Indicators:

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
✅ Email sent to info@iptechnologies.com: <message-id>
✅ Email sent to user@example.com: <message-id>
✅ Emails sent successfully!
```

---

## 💡 Important Notes:

- **NEVER commit .env to git** (already in .gitignore ✅)
- **Use strong passwords** for security
- **Test with a real email address** you can access
- **Check spam folder** if emails don't arrive

---

**NEXT STEP:** Open `server/.env` NOW and update EMAIL_USER and EMAIL_PASS with your REAL credentials! 🎯
