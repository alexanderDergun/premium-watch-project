// const { application } = require("express");

const addForm = document.querySelector('#lk')
const button = document.querySelector('#addButton');




addForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const {watchName, picture, description, price, action, method} = event.target

    console.log(watchName.value, picture.value, description.value, price.value, action, method);

    const response = await fetch("/lk/newFile", {
        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify ({
            watchName: watchName.value,
            picture: picture.value,
            description: description.value,
            price: price.value,
        })
    })

    const data = await response.json();

    
})




