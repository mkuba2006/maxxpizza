const default_color = document.getElementById("nav").style.backgroundColor;

document.body.addEventListener("scroll", () => {
    var nav = document.getElementById("nav");
    if (document.body.scrollTop > 0) {
        nav.style.backgroundColor = '#000000c7';
        console.log('w dół');
    } else {
        nav.style.backgroundColor = default_color;
        console.log('w górę');
    }
});