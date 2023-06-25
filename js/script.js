<script>
window.addEventListener('load', (event) => {
    let path = window.location.pathname.split('/')[1];
    elms = document.getElementsByClassName("nav-link");
    
    for(let i = 0; i < elms.length; i++) {
        let text = elms[i].textContent.toLowerCase().trim();    
        if(text == path) {
            elms[i].classList.add("active");
            break;
        }
    }
});
</script>