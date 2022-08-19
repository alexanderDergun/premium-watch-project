document.querySelector('.catalogList').addEventListener('click', async (event) => {
    event.preventDefault();
    const id = Number(event.target.dataset.id);
    const responseModal = await fetch(`/${id}/modal`);
    const html = await responseModal.text();
    if (html.data === null) {

    } else {
        document.body.insertAdjacentHTML('beforeend', html)
        const deleteButton = document.querySelector(".deleteButton");

            deleteButton.addEventListener("click", async (event) => {
            // event.preventDefault();

            const response = await fetch(`/${id}/modal`, {
                method: "delete",
            });
            });
    }

    document.querySelector('[data-bs-dismiss="modal"]').addEventListener('click', (modalEvent) => {
        modalEvent.target.closest('.modal').remove();
    });
});
