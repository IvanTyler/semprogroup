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

    if ($modal_video.classList.contains('close')) $modal_video.classList.remove('close')
})

$close_modal_video?.addEventListener('click', () => closeModalVideo())

function closeModalVideo() {
    $modal_video.classList.add('close')
    $modal_video.classList.add('close')
    $inchapin_video.style.display = 'none'

    $inchapin_video.pause()

    if ($modal_video.classList.contains('open')) $modal_video.classList.remove('open')

    setTimeout(() => $modal_video.style.display = 'none', 500)
}