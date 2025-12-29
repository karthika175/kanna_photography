# Google Sheets Contact Form Setup

This guide will help you set up Google Sheets integration for your contact form.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Kanna Photography - Contact Form Submissions"
4. The sheet will automatically create headers when the first submission comes in

## Step 2: Set Up Google Apps Script

1. In your Google Sheet, click on **Extensions** > **Apps Script**
2. Delete any code in the script editor
3. Copy all the code from `google-sheets-script.js` and paste it into the script editor
4. Click the **Save** icon (disk icon) and name your project (e.g., "Contact Form Handler")

**IMPORTANT:** Make sure you're using the latest version of `google-sheets-script.js` which uses FormData to avoid CORS issues. The script should use `e.parameter` to read form data, not `JSON.parse`.

## Step 3: Deploy the Script as a Web App

1. Click on **Deploy** > **New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Fill in the deployment settings:
   - **Description**: Contact Form Handler (or any name you prefer)
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** > **Go to [Project Name] (unsafe)**
   - Click **Allow**
6. Copy the **Web app URL** that appears (it will look like: `https://script.google.com/macros/s/...`)

## Step 4: Update Your React Component

1. Open `src/components/Contact.jsx`
2. Find line 32 where it says:
   ```javascript
   const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_SCRIPT_URL_HERE'` with the Web app URL you copied in Step 3
4. Save the file

## Step 5: Test Your Form

**First, test if the deployment is working:**
1. Copy your Web app URL
2. Paste it into a new browser tab and press Enter
3. You should see a message: `{"status":"success","message":"Contact form script is working! Your deployment is configured correctly."}`
4. If you see a 401 error or authorization error, go back and follow the authorization steps in Step 3

**Then test the actual form:**
1. Run your development server if it's not already running
2. Navigate to the contact section of your website
3. Fill out and submit the form
4. Check your Google Sheet to see if the data appears

## Troubleshooting

### Quick Error Reference
- **302 Redirect Error** → Deployment settings wrong, see below
- **401 Unauthorized** → Authorization issue, see below
- **405 / CORS Error** → Need to use FormData (already fixed in code)
- **Form submits but no data** → Check authorization & sheet permissions

### ✓ Correct Deployment Settings Checklist
When you deploy, these settings MUST be exactly right:
- ✓ Deployment type: **Web app** (not API executable)
- ✓ Execute as: **Me (your-email@gmail.com)** (not "User accessing")
- ✓ Who has access: **Anyone**
- ✓ Script is authorized (you clicked "Allow" during deployment)
- ✓ Test URL in browser shows success message (not HTML/redirect)

### Form submission fails
- Make sure the Web app URL is correct in Contact.jsx
- Verify that the Apps Script deployment is set to "Anyone" for access
- Check the browser console for any error messages

### Getting 302 Redirect Error

**This means the deployment isn't configured correctly.** The script is redirecting instead of executing. Follow these steps carefully:

1. **Go to your Google Apps Script editor** (Extensions > Apps Script)

2. **Verify you have the correct code:**
   - Make sure you copied the ENTIRE code from `google-sheets-script.js`
   - It should have both `doGet` and `doPost` functions
   - Click **Save**

3. **COMPLETELY REMOVE all old deployments:**
   - Click **Deploy** > **Manage deployments**
   - For EACH deployment listed, click the **Archive** button (trash icon)
   - Click **Close** when all are archived

4. **Create a BRAND NEW deployment from scratch:**
   - Click **Deploy** > **New deployment**
   - Click the **gear/settings icon** next to "Select type"
   - Choose **Web app**
   - Fill in these EXACT settings:
     - **Description**: Contact Form (or anything you want)
     - **Web app** section:
       - **Execute as**: Select **Me (your-email@gmail.com)**
       - **Who has access**: Select **Anyone**
   - Click **Deploy**

5. **You WILL need to authorize it:**
   - Click **Authorize access**
   - Choose your Google account
   - You'll see "Google hasn't verified this app"
   - Click **Advanced** (at the bottom left)
   - Click **Go to [Your Project Name] (unsafe)**
   - Click **Allow**
   - Wait for it to complete

6. **Copy the Web app URL** that appears (starts with `https://script.google.com/macros/s/...`)

7. **Test the URL immediately:**
   - Open a NEW browser tab
   - Paste the URL and press Enter
   - You should see: `{"status":"success","message":"Contact form script is working!..."}`
   - If you see HTML or get redirected, something is wrong with the deployment

8. **If the test works, update your Contact.jsx:**
   - Replace the URL at line 32 with the new URL
   - Save the file
   - Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
   - Test the form

**Common mistakes that cause 302:**
- "Execute as" is set to "User accessing the web app" instead of "Me"
- Didn't authorize the script properly
- Using an old/archived deployment URL
- Didn't select "Web app" as the deployment type

### Getting 401 Unauthorized Error

**This is an authorization issue.** Follow these exact steps:

1. **Go to your Google Apps Script editor**

2. **Test the script first:**
   - At the top of the editor, click the dropdown that says "Select function"
   - Select `doPost`
   - Click the **Run** button (play icon)
   - You'll see "Authorization required" - click **Review permissions**
   - Choose your Google account
   - Click **Advanced** > **Go to [Your Project Name] (unsafe)**
   - Click **Allow**
   - Wait for it to finish running

3. **Delete the old deployment and create a fresh one:**
   - Click **Deploy** > **Manage deployments**
   - Click the **Archive** button (trash icon) next to your current deployment
   - Click **Close**
   - Click **Deploy** > **New deployment**
   - Click the gear icon and select **Web app**
   - **CRITICAL SETTINGS:**
     - **Description**: Contact Form Handler v2
     - **Execute as**: **Me (your-email@gmail.com)** ← THIS MUST BE "Me"
     - **Who has access**: **Anyone** ← THIS MUST BE "Anyone"
   - Click **Deploy**
   - You may need to authorize again - if so, click **Authorize access** and repeat the authorization steps
   - **Copy the NEW Web app URL**

4. **Update your Contact.jsx file:**
   - Replace the old URL at line 32 with the new URL you just copied
   - Save the file

5. **Hard refresh and test:**
   - Clear browser cache with Ctrl+Shift+R (or Cmd+Shift+R on Mac)
   - Try submitting the form again

**Why this happens:** The 401 error occurs when "Execute as" is set incorrectly or the script isn't authorized. The script needs to run as YOU (the sheet owner) to have permission to write to the sheet.

### Data not appearing in the sheet
- Check that you authorized the Apps Script properly
- Try redeploying the Web app (Deploy > Manage deployments > Edit > New version)
- Make sure your Google Sheet is not in a restricted folder

### CORS errors (405 error on preflight request)

**This is the most common issue!** If you see "CORS error" or "405" errors in the browser console, follow these exact steps:

1. **Update the Google Apps Script code:**
   - Go to your Google Sheet
   - Click **Extensions** > **Apps Script**
   - **Delete ALL existing code** in the editor
   - Open the `google-sheets-script.js` file from your project
   - **Copy the ENTIRE code** from that file
   - Paste it into the Apps Script editor
   - The code should use `e.parameter.name` (NOT `JSON.parse`) - this is critical!
   - Click **Save** (Ctrl/Cmd + S)

2. **Redeploy with a NEW version:**
   - Click **Deploy** > **Manage deployments**
   - Click the **edit icon** (pencil) next to your existing deployment
   - Under **Version**, select **New version**
   - Click **Deploy**
   - **Copy the new Web app URL** (it should be the same, but now points to the new version)

3. **Verify the deployment settings:**
   - Make sure **Execute as** is set to "Me (your email)"
   - Make sure **Who has access** is set to "Anyone"

4. **Hard refresh your website:**
   - Press Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac) to clear cache
   - Or open DevTools (F12), right-click the refresh button, and select "Empty Cache and Hard Reload"

5. **Test the form again**

**Why this happens:** Google Apps Script doesn't handle JSON POST requests with `Content-Type: application/json` well due to CORS. The fix uses FormData instead, which Google Apps Script handles natively without CORS issues.

## Data Privacy Note

All form submissions will be stored in your Google Sheet. Make sure to:
- Keep the Google Sheet private and only share with authorized people
- Comply with privacy regulations (GDPR, etc.) in your region
- Consider adding a privacy policy to your website

## Optional Enhancements

You can enhance the Google Apps Script to:
- Send email notifications when new submissions arrive
- Validate data before saving
- Integrate with other services (e.g., send to Slack, Discord, etc.)

For more advanced features, refer to the [Google Apps Script documentation](https://developers.google.com/apps-script).
