// form.js
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('body').value;

    // Send form data using fetch API
    fetch('/submit-form-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message
        })
    })
    .then(response => response.json())
    .then(data => {
        // Handle response
        console.log(data);
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
});
