// const {application} =require('express')
const regForm = document.getElementById('regForm');

if (regForm) {
    regForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const { name, email, phone, password, reppassword, action, method } = event.target;
        
        if (password.value === reppassword.value ) {

            const response = await fetch(action, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    phone: phone.value,
                    password: password.value,
                })
            })
            // const jsonResponse = await response.json();
            // console.log(jsonResponse);
        } else {
            alert('Пароли не совпадают')
        }

    })
}