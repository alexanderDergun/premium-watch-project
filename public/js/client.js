// const lkInfo = document.querySelector('#lk');
const fixData = document.querySelector("#fixData");

fixData.addEventListener("submit", async (event) => {
  event.preventDefault();

  const { action, name, email, phone, password, repeatPassword } = event.target;

  if (password.value && password.value === repeatPassword.value) {
    const response = await fetch(action, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
      }),
    });
  } else {
    const response = await fetch(action, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
      }),
    });
  }
});