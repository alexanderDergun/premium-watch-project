const addFile = document.querySelector("#addFile");

if (addFile) {
  addFile.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { watchName, picture, description, price } = event.target;

    const response = await fetch('/lk/newFile', {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        watchName: watchName.value,
        picture: picture.value,
        description: description.value,
        price: price.value,
      }),
    });
  });
}