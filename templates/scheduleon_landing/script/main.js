console.log('Hey there hackerman!');

let drawerOpen = false;
const handleClick = () => {
    const sidenavbg = document.querySelector(".sidenav-backdrop");
    const drawer = document.querySelector(".drawer");
    if (!drawerOpen) {
        sidenavbg.style.display = "block";
        setTimeout(() => {
            sidenavbg.style.opacity = 1;

        }, 100);
        drawer.style.left = "0";
        drawerOpen = true;
    } else {            
        sidenavbg.style.opacity = 0;
        setTimeout(() => {
            sidenavbg.style.display = "none";
        }, 600);
        drawer.style.left = "-210px";
        drawerOpen = false;
    }
}

document.addEventListener("DOMContentLoaded", e => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.zIndex = -20;
    }, 750)
});

