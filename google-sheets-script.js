// Google Apps Script for handling contact form submissions
// This script should be added to your Google Sheets Apps Script Editor

function doGet(e) {
  // Test endpoint - visit your web app URL in browser to test if it's working
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Contact form script is working! Your deployment is configured correctly.'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Get form data from the POST request
    const name = e.parameter.name || '';
    const email = e.parameter.email || '';
    const phone = e.parameter.phone || '';
    const message = e.parameter.message || '';

    // Create a timestamp
    const timestamp = new Date();

    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Message']);
    }

    // Append the form data to the sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      phone,
      message
    ]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Form submitted successfully' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
