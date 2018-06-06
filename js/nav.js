function init() {
    document.querySelector('.hamburger-wrapper').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.overlay-wrapper').classList.toggle('show');
        document.querySelector('body').classList.toggle('disableScrollForBody');
    })

    // alternative syntax
    
    /*
    document.querySelector('.hamburger-wrapper').onclick = function() {
        this.classList.toggle('active');
        document.querySelector('.overlay-wrapper').classList.toggle('show');
        document.querySelector('body').classList.toggle('disableScrollForBody');
    }
    */
}
document.addEventListener("DOMContentLoaded", init, false);


