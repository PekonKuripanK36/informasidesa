function doGet(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var formData = e.parameter;
    
    // Get the form data and add it to the sheet
    sheet.appendRow([
      formData.fname,
      formData.lname,
      formData.email,
      formData.subject,
      formData.message
    ]);
    
    // Return a success message
    return ContentService.createTextOutput("Form submitted successfully!");
  }