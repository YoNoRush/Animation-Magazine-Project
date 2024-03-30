// Wait helper function
function wait(ms) {
    return new Promise(time => setTimeout(time, ms));
}

function coverUp() {
    document.getElementById("screen-gal").style.top = "10%";
    document.getElementById("screen-cover").style.bottom = "100%";
}

function gotoPage(from, moveTo, destination) {
    console.log(from);
    var galleryChildren = document.getElementById("screen-gal").children;
    for (let i = 0; i < galleryChildren.length; i++) {
        if (galleryChildren[i] != from) {
            galleryChildren[i].style.opacity = "0%";
        }
        from.style.left = "" + moveTo + "%";
        // Wait for slide animation to finish, then fade the clicked card
        wait(1000).then(() => { 
            from.style.opacity = "0%";
            // Wait again for clicked card to fade, then load new page
            wait(1000).then(() => {
                window.location.href = destination;
            });
        });

    }
}