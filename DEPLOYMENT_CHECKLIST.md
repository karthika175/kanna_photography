# Google Apps Script Deployment Checklist

## CRITICAL: Follow these exact steps to fix 302/401 errors

### Step 1: Clean Slate
- [ ] Open Google Sheet → Extensions → Apps Script
- [ ] Copy ALL code from `google-sheets-script.js`
- [ ] Paste into Apps Script editor (replace everything)
- [ ] Click Save (Ctrl/Cmd + S)

### Step 2: Remove Old Deployments
- [ ] Click Deploy → Manage deployments
- [ ] Archive ALL existing deployments
- [ ] Click Close

### Step 3: Create New Deployment (Authorization happens here)

**IMPORTANT: The authorization will happen DURING deployment, not before.**

Here's the correct process for the current Google Apps Script:

**3a. Start the deployment:**
- [ ] Click **Deploy** → **New deployment**
- [ ] Click the **gear/settings icon** next to "Select type"
- [ ] Choose **Web app**

**3b. Configure deployment settings (THIS IS CRITICAL):**
- [ ] Fill in these EXACT settings:
```
Description: Contact Form Handler v1
Execute as: Me (your-email@gmail.com)    ← MUST BE "Me"
Who has access: Anyone                    ← MUST BE "Anyone"
```

**3c. Click Deploy - Authorization will happen NOW:**
- [ ] Click the blue **Deploy** button
- [ ] **One of two things will happen:**

**OPTION A: Authorization dialog appears**
- [ ] Click **Authorize access**
- [ ] Choose your Google account
- [ ] Click **Advanced** → **Go to [Project] (unsafe)**
- [ ] Click **Allow**

**OPTION B: No authorization dialog (already authorized)**
- [ ] Deployment completes immediately
- [ ] You'll see the success screen with the Web app URL

**3d. Get your deployment URL:**
- [ ] Copy the **Web app URL** (starts with `https://script.google.com/macros/s/...`)
- [ ] Click **Done**

### Step 4: Test Deployment (CRITICAL - Do this before using the URL)
- [ ] Copy the Web app URL
- [ ] Open a NEW browser tab
- [ ] Paste URL and press Enter
- [ ] **YOU SHOULD SEE:**
```json
{"status":"success","message":"Contact form script is working! Your deployment is configured correctly."}
```

**If you see anything else (HTML, redirect, error), the deployment is WRONG. Go back to Step 2.**

**What different responses mean:**
- ✅ JSON success message = Working correctly, proceed to Step 5
- ❌ HTML page = "Execute as" is set wrong, go back to Step 3
- ❌ Redirect/302 = "Execute as" is set wrong, go back to Step 3
- ❌ 401 error = Not authorized, go back to Step 3 and authorize

### Step 5: Update Your Website
- [ ] Copy the Web app URL
- [ ] Open `src/components/Contact.jsx`
- [ ] Replace the URL at line 32
- [ ] Save the file
- [ ] Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- [ ] Test the contact form

## What Each Error Means

| Error | Cause | Solution |
|-------|-------|----------|
| 302 Redirect | "Execute as" is wrong OR not authorized | Follow steps above exactly |
| 401 Unauthorized | Script not authorized properly | Re-authorize in Step 3 |
| 405 / CORS | Sending JSON instead of FormData | Already fixed in code |
| Form works but no data | Sheet permissions or authorization | Check "Execute as: Me" |

## Common Mistakes

❌ Setting "Execute as" to "User accessing the web app"
✅ Must be "Me (your-email@gmail.com)"

❌ Setting "Who has access" to "Only myself"
✅ Must be "Anyone"

❌ Skipping the authorization step
✅ Must click "Allow" when prompted

❌ Using an old deployment URL
✅ Must use the NEW URL from the fresh deployment

❌ Not testing the URL in browser first
✅ Always test URL shows success message before using in code
