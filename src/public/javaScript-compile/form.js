
const $form = document.querySelector('.form-order-call')

const $form_name = document.querySelector('#name')
const $form_phone = document.querySelector('#phone')
const $form_email = document.querySelector('#email')

const $form_name_wrapper = document.querySelector('.form-order-call__wrapper-input.name')
const $form_phone_wrapper = document.querySelector('.form-order-call__wrapper-input.phone')
const $form_email_wrapper = document.querySelector('.form-order-call__wrapper-input.email')

$form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target))

    if (!$form_name.value) {
        $form_name_wrapper.classList.add('error')
    } else {
        $form_name_wrapper.classList.remove('error')
    }

    if ($form_phone.value.trim().length < 18) {
        $form_phone_wrapper.classList.add('error')
    } else {
        $form_phone_wrapper.classList.remove('error')
    }

    if (!$form_email.value) {
        $form_email_wrapper.classList.add('error')
    } else {
        $form_email_wrapper.classList.remove('error')
    }

    if (!$form_name.value && $form_phone.value.trim().length < 18) {
        $form_name_wrapper.classList.add('error')
        $form_phone_wrapper.classList.add('error')
    }

    if (!$form_email.value &&
        $form_phone.value.trim().length < 18 &&
        !$form_name.value
    ) {
        $form_name_wrapper.classList.add('error')
        $form_phone_wrapper.classList.add('error')
        $form_email_wrapper.classList.add('error')
    }

    if (($form_email.value) &&
        ($form_phone.value.trim().length === 18) &&
        ($form_name.value)
    ) {
        $form_email.classList.remove('focus')
        $form_phone.classList.remove('focus')
        $form_name.classList.remove('focus')

        $form_name_wrapper.classList.remove('error')
        $form_phone_wrapper.classList.remove('error')
        $form_email_wrapper.classList.remove('error')

        $form.reset();
        console.log(formData);
    }
})