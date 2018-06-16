window.addEventListener('load', function(){
    let preloader = document.querySelector('.preloader-wrapper');
    let main = document.querySelector('main#main');
    
    preloader.style.display = 'none';
    main.classList.toggle('not-visible');
}, false);