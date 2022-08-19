document.querySelector('.catalogList').addEventListener('click', async (event) => {
    event.preventDefault();
    const id = Number(event.target.dataset.id);
    const responseModal = await fetch(`/${id}/modal`);
    const html = await responseModal.text();
    console.log(html);
    if (html.data === null) {

    } else {
        document.body.insertAdjacentHTML('beforeend', html)

    }

    document.querySelector('[data-bs-dismiss="modal"]').addEventListener('click', (modalEvent) => {
        modalEvent.target.closest('.modal').remove();
    });
});
