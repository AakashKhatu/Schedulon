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

const handleSwipe = () => {
    let xFirst = null; 
    document.addEventListener('touchstart', e => {
        const firstTouchEvent = event.touches[0];
        xFirst = firstTouchEvent.clientX;
    }, false);

    document.addEventListener('touchmove', e => {
        if (!xFirst)
            return;
        
        let xLast = event.touches[0].clientX;
        let dx = xFirst - xLast;

        if (xFirst <= 40 && dx < 0)
            handleClick();
        else if (dx > 0 && drawerOpen)
            handleClick();
        xFirst = null;
        return;
    }, false);
}

document.addEventListener("DOMContentLoaded", e => {
    handleSwipe();
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.zIndex = -20;
    }, 750)
});

