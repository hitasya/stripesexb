function fn() {

    let link = document.querySelectorAll('.project-text');

    link.forEach(function(){
        addEventListener('click', function() {
            this.classList.toggle('show');
        });
    });
 
}
document.addEventListener('DOMContentLoaded', fn, false);