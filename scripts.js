let userName = document.querySelector('#user');
let password = document.querySelector('#password');
let button = document.querySelector('#btn');

button.addEventListener('click', function() {
    console.log(userName.value);
    console.log(password.value);
    let logName = userName.value;
    let logKey = password.value;
    if (logKey === 'thissucks00' && logName === 'coder007') {
        alert('log in sucessful');
    } else {
        alert('log in failed');
    }
});