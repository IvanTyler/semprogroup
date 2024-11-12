document.querySelectorAll('.form_input').forEach(el => {
    el.addEventListener('input', (e) => addFocusOverInput(e))
});

function addFocusOverInput(e) {
    const inputValueLength = e.target.value.trim().length

    inputValueLength > 0 ?
        e.target.classList.add('focus') :
        e.target.classList.remove('focus')

    if (inputValueLength === 2) e.target.classList.remove('focus')
}