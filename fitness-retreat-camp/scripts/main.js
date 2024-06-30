document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    const message = `New booking request from ${name} (${email})`;

    // In a real-world application, you would send the email via a server.
    // Here, we're just logging it to the console for simplicity.
    console.log(message);
    
    alert('Your booking request has been submitted!');
    document.getElementById('bookingForm').reset();
});
