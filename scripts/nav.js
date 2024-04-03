const default_color = document.getElementById("links").style.backgroundColor;

document.body.addEventListener("scroll", () => {
    var nav = document.getElementById("links");
    var extras_button = document.getElementById("extras_button");
    if (document.body.scrollTop > 300) {
        nav.style.backgroundColor = 'black';
        extras_button.style.backgroundColor = 'black';
    } else {
        nav.style.backgroundColor = default_color;
        extras_button.style.backgroundColor = default_color;
    }
});
