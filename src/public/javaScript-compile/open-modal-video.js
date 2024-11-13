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