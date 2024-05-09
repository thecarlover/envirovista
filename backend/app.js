import express from 'express';
import ExcelJS from 'exceljs'; // Use default import
import bodyParser from 'body-parser'; // Use default import
import { join } from 'path';

const app = express();

// Use body-parser middleware to parse JSON and URL-encoded request bodies
app.use(bodyParser.json()); // Use default import
app.use(bodyParser.urlencoded({ extended: true })); // Use default import

// Define the route for form submission
app.post('/submit', (req, res) => {
  const { email, experience } = req.body;

  // Create a new workbook and worksheet
  const workbook = new ExcelJS.Workbook(); // Use default import
  const worksheet = workbook.addWorksheet('Submissions');

  // Add headers to the worksheet
  worksheet.addRow(['Email', 'Experience']);
  
  // Add form submission data to the worksheet
  worksheet.addRow([email, experience]);

  // Save the workbook to a file
  const filePath = join(__dirname, 'submissions.xlsx');
  workbook.xlsx.writeFile(filePath)
    .then(() => {
      console.log('Form submission saved to submissions.xlsx');
      res.status(200).send('Form submission saved successfully');
    })
    .catch(err => {
      console.error('Error saving form submission:', err);
      res.status(500).send('Error saving form submission');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
