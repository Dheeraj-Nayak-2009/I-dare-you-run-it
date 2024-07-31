document.getElementById('eggForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const response = document.activeElement.value; // Get the value of the clicked button

    if (response === 'Make an omelette. \uD83C\uDF73') { // Unicode for 🍳
        this.action = 'index9.html';
    } else if (response === 'Hatch it. \uD83D\uDC23') { // Unicode for 🐣
        this.action = 'index11.html';
    }

    this.submit(); // Submit the form with the new action
});
