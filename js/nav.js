function init() {
    /*
    document.querySelector('.hamburger-wrapper').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.overlay-wrapper').classList.toggle('show');
        document.querySelector('body').classList.toggle('noScroll');
    })
    */ 

    // alternative syntax
    
    document.querySelector('.hamburger-wrapper').onclick = function() {
        this.classList.toggle('active');
        document.querySelector('.overlay-wrapper').classList.toggle('show');
        document.querySelector('html').classList.toggle('no-scroll'); /*changed the class-name from camelCase to kebab-case as it stopped working (set `overflow-x` to `hidden` for `html` tag due to slider issue in the base stylesheet) and also selected `html` instead of `body`*/
    }
}
document.addEventListener("DOMContentLoaded", init, false);


