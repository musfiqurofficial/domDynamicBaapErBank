document.getElementById('btn-submit').addEventListener('click', function () {

    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;
    const passwordField = document.getElementById('user-password');
    console.log(passwordField.value);

    if (email === 'musfiqurofficial1999@gmail.com' || passwordField === 'iloveyoufatema') {
        window.location.href = 'bank.html';
    } else {
        alert('Invalid email or password');
    }
})

