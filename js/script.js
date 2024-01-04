function toggleVideo(){
    const trailer = document.querySelector('.trailer')
    const video = document.querySelector('video')
    video.pause();
    trailer.classList.toggle('active')
}
function changeBg(bg, title){
    const banner = document.querySelector(".banner")
    const contents = document.querySelectorAll('.content')
    banner.style.background = `url("../assets/images/movies/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

}