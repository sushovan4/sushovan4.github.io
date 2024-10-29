window.addEventListener('load', (event) => {
    let path = window.location.pathname.split('/');
    elms = document.getElementsByClassName("nav-link");
    
    for(let i = 0; i < elms.length; i++) {
        let text = elms[i].textContent.toLowerCase().trim();
        if(text == path[1] && path[2] != 'publications') {
            elms[i].classList.add("active");
            break;
        }
    }
});
