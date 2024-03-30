function coverUp() {
    document.getElementById("screen-gal").style.top = "10%";
    document.getElementById("screen-cover").style.bottom = "100%";
}

function gotoPage(from, moveTo) {
    console.log(from);
    var galleryChildren = document.getElementById("screen-gal").children;
    for (let i = 0; i < galleryChildren.length; i++) {
        if (galleryChildren[i] != from) {
            galleryChildren[i].style.opacity = "0%";
        }
        from.style.left = "" + moveTo + "%";
    }
}