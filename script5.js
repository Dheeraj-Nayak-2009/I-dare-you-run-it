document.getElementById('liarForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const response = document.activeElement.value; // Get the value of the clicked button

    if (response === 'Yes, I am a liar.') {
        this.action = 'index6.html';
    } else if (response === 'No, I am a liar.') {
        this.action = 'index6.html';
    }

    this.submit(); // Submit the form with the new action
});
