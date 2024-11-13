const $open_modal_form = document.querySelector('.header__order-call')

const $modal = document.querySelector('.modal')
const $close_modal_form = document.querySelector('.modal__close')

$open_modal_form?.addEventListener('click', (e) => {
    $modal.style.display = 'block';

    $modal.classList.add('open')
    $modal.classList.add('open')

    closeEscForm()

    if ($modal.classList.contains('close')) $modal.classList.remove('close')
})

$close_modal_form?.addEventListener('click', (e) => closeModal())


function closeModal() {
    $modal.classList.add('close')
    $modal.classList.add('close')

    if ($modal.classList.contains('open')) $modal.classList.remove('open')

    setTimeout(() => $modal.style.display = 'none', 500)
}

function closeEscForm() {
    if ($modal.classList.contains('open')) {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal()
        })
    }
}
