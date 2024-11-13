
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
const $header = document.querySelector('.header')

window.addEventListener('scroll', () => {
    const { y } = document.body.getBoundingClientRect()
    y < 0 ?
        $header.classList.add('scroll') :
        $header.classList.remove('scroll')
})

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
[].forEach.call(document.querySelectorAll('.tel'), function (input) {
    let keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        let pos = this.selectionStart;
        
        if (pos < 3) event.preventDefault()
        let matrix = "+7 (___) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            newValue = matrix.replace(/[_\d]/g, function (a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
        i = newValue.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            newValue = newValue.slice(0, i);
        }
        let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function (a) {
                return "\\d{1," + a.length + "}";
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 4 || keyCode > 47 && keyCode < 58) this.value = newValue;
        if (event.type == "blur" && this.value.length < 4) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
    input.addEventListener('mouseup', event => {
      event.preventDefault()
      if (input.value.length < 2) {
        input.setSelectionRange(2, 4)
      } else {
        input.setSelectionRange(input.value.length, input.value.length)
      }
    })
});
const $modal_video = document.querySelector('.modal.video')
const $inchapin_video = document.querySelector('.inchapin-video')

const $open_modal_video = document.querySelector('.video-circle__text')
const $close_modal_video = document.querySelector('.modal__close.video')

$open_modal_video?.addEventListener('click', (e) => {
    $modal_video.style.display = 'block';
    $inchapin_video.style.display = 'block'
    $inchapin_video.play()

    $modal_video.classList.add('open')
    $modal_video.classList.add('open')

    closeEscVideo()
    if ($modal_video.classList.contains('close')) $modal_video.classList.remove('close')
})

$close_modal_video?.addEventListener('click', () => {
    closeModalVideo()
    $inchapin_video.pause()
})

function closeModalVideo() {
    $modal_video.classList.add('close')
    $modal_video.classList.add('close')
    $inchapin_video.style.display = 'none'

    if ($modal_video.classList.contains('open')) $modal_video.classList.remove('open')

    setTimeout(() => $modal_video.style.display = 'none', 500)
}

function closeEscVideo() {
    if ($modal_video.classList.contains('open')) {
        console.log($modal_video.classList.contains('open'));
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModalVideo()
                $inchapin_video.pause()
            }
        })
    }
}
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

const mainNode = document.querySelector('.main');

Scrollbar.init(mainNode);