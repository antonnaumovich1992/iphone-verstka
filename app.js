let oldScrollY = 0;
let div = document.getElementsByClassName("fading-text-block");

window.onscroll = () => {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled >= 18) {
        document.querySelector('.fading-text-block').style.display = 'none';
    } else {
        document.querySelector('.fading-text-block').style.display = 'block';
    }
}