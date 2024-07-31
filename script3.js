document.getElementById('magicianForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const response = document.activeElement.value; // Get the value of the clicked button

    if (response === 'Yes') {
        this.action = 'index4.html';
    } else if (response === 'No') {
        this.action = 'index5.html';
    }

    this.submit(); // Submit the form with the new action
});
