document.getElementById('nameForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    localStorage.setItem('name', name);
});
