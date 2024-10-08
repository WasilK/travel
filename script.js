// Login form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill out both fields.');
    } else {
        alert('Login successful!');
    }
});

// Registration form validation
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Registration successful!');
    }
});
