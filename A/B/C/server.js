const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const app = express();
const port = 3000;

app.use(cors()); // Use cors
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/submit-form-endpoint', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Log the form data to know who submitted the form
    console.log(`Form submitted by: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);

    // Send a response back to the client
    res.json({ status: 'success', message: 'Form submitted successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
