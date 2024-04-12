const nav = document.getElementById("links");
const extras_button = document.getElementById("extras_button");
const defaultColor = window.getComputedStyle(nav).backgroundColor;
const logo = document.getElementById("logo_img");

if (window.innerWidth >750){
    document.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            nav.style.backgroundColor = 'black';
            extras_button.style.backgroundColor = 'black';
            logo.style.backgroundColor = 'black';
            logo.style.borderRadius='32px'
        } else {
            nav.style.backgroundColor = defaultColor;
            extras_button.style.backgroundColor = defaultColor;
        }
    });
    
}
