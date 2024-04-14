const nav = document.getElementById("nav");
const extras_button = document.getElementById("extras_button");
const defaultColor = window.getComputedStyle(nav).backgroundColor;
const logo = document.getElementById("logo_img");
let main = document.getElementById('main').clientHeight;

if (window.innerWidth >750){
    document.addEventListener("scroll", () => {
        // if (window.scrollY > 30) {
        //     nav.style.backgroundColor = 'black';
        //     extras_button.style.backgroundColor = 'black';
        //     logo.style.backgroundColor = 'black';
        //     logo.style.borderRadius='32px'
        // } else {
        //     nav.style.backgroundColor = defaultColor;
        // }


        // if(window.scrollY > main - 100){
        //     nav.style.opacity= '0'
        // }else{
        //     nav.style.opacity= '1'
        // }
        if(window.scrollY > main - 100){
            nav.style.transform= 'translate(-50%, -100px)'
        }else{
            nav.style.transform= 'translate(-50%, 0)'
        }
    });
    
}
