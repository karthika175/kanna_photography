# Quick Fix for 302 Error (Current Google Apps Script)

## The Problem
You're getting a 302 redirect error because the Google Apps Script deployment settings are incorrect.

## The Solution (5 Simple Steps)

### Step 1: Open Your Google Apps Script
1. Go to your Google Sheet
2. Click **Extensions** → **Apps Script**
3. Make sure the code from `google-sheets-script.js` is pasted in the editor
4. Click **Save** (Ctrl/Cmd + S)

### Step 2: Delete Old Deployments
1. Click **Deploy** → **Manage deployments**
2. Click the **Archive icon** (🗑️) next to any existing deployments
3. Click **Close**

### Step 3: Create Fresh Deployment
1. Click **Deploy** → **New deployment**
2. Click the **⚙️ gear icon** next to "Select type"
3. Choose **Web app**
4. **Set these EXACT values:**
   - **Execute as:** Select **"Me ([your-email@gmail.com])"** from dropdown
   - **Who has access:** Select **"Anyone"** from dropdown
5. Click the blue **Deploy** button

**What happens next:**
- If you see an "Authorize access" button → click it and authorize
- If no authorization prompt → deployment continues (already authorized)

6. Copy the **Web app URL** that appears
7. Click **Done**

### Step 4: Test the URL IMMEDIATELY
1. Open a **new browser tab**
2. **Paste the URL** and press Enter
3. **You MUST see this:**
   ```
   {"status":"success","message":"Contact form script is working! Your deployment is configured correctly."}
   ```

**If you see anything else:**
- HTML page → "Execute as" is WRONG, go back to Step 3
- 302/Redirect → "Execute as" is WRONG, go back to Step 3
- 401 error → Not authorized, go back to Step 3

### Step 5: Update Your Website
1. Open `src/components/Contact.jsx`
2. Find line 32 (the `scriptURL` line)
3. Replace the URL with your new Web app URL
4. Save the file
5. **Hard refresh** your browser: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
6. Test the contact form

---

## Why This Happens

The 302 error occurs when **"Execute as"** is not set to **"Me"**.

When it's set to anything else (like "User accessing the web app"), Google can't execute the script because anonymous users don't have permission to write to YOUR Google Sheet.

Setting it to **"Me"** tells Google: "Run this script with MY permissions, so it can write to MY sheet."

---

## Still Having Issues?

**Double-check these settings in your deployment:**
- ✅ Deployment type: Web app (NOT API executable)
- ✅ Execute as: Me (your-email@gmail.com) - NOT "User accessing"
- ✅ Who has access: Anyone

**The URL test in Step 4 is the key:**
- If the URL shows the success JSON message → deployment is correct
- If the URL shows anything else → deployment settings are wrong

The test MUST pass before using the URL in your code.
