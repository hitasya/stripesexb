window.addEventListener('load', function(){
    let preloader = document.querySelector('.preloader-wrapper');
    let main = document.querySelector('div.grid-container');
    
    preloader.style.display = 'none';
    main.classList.toggle('not-visible');
});