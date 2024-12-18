document.getElementById('send-button').onclick = function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        alert(
            `Message Sent!\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
        );
        // Reset the form
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
};
