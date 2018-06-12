window.addEventListener('load', function(){
    let preloader = document.querySelector('.preloader-wrapper');
    let main = document.querySelector('main.flexbox');
    let body = document.querySelector('body');
    
    preloader.style.display = 'none';
    main.classList.toggle('not-visible');
    body.classList.toggle('preloader');
});