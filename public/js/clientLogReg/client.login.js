const { application } = require("express");

const form = document.querySelector('#logForm');
const btnLogin = document.querySelector('#btnLogin')

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {email, password, action, method} = event.target
    
    const response = await fetch(action, {
        method,
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify ({
            email: email.value,
            password: password.value
        })
    })

    const data = await response.json();
    if(!data.login) {
        btnLogin.insertAdjacentHTML('beforebegin', '<div>Логин или пароль не верные</div>');
    }

})


