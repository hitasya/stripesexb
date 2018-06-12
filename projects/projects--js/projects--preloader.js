window.addEventListener('load', function(){
    let preloader = document.querySelector('.preloader-wrapper');
    let main = document.querySelector('main');
    let body = document.querySelector('body');
    
    preloader.style.display = 'none';
    main.style.display = 'flex';
    body.classList.toggle('preloader');
});