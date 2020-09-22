let toggleNavStatus = false;
let toggleNav = function() {
    let getNavMenuMobile = document.querySelector('.nav-menu-mobile')
    let getMenuClose = document.querySelectorAll('.menu-close img')
    let getDeviceWidth = window.matchMedia("(min-width: 992px)")

    if (toggleNavStatus === false) {
        
        if (getDeviceWidth.matches) {
            getNavMenuMobile.style.left = "50%"
            getNavMenuMobile.style.setProperty('box-shadow', '-10px 0px 15px')
        } 
        else {
            getNavMenuMobile.style.left = "0%"
        }
        
        
        toggleNavStatus = true
    }
    else if (toggleNavStatus === true) {
        
        getNavMenuMobile.style.left = "100%"
        getNavMenuMobile.style.setProperty('box-shadow', 'none')
            // getNavMenuMobile.style.setProperty(proper)
        

        // getNavMenuMobile.style.display = "none"
        
        toggleNavStatus = false
    }
}


//Create function to select elements
// const selectElement = (element) => document.querySelector(element);



// selectElement('.menu-btn').addEventListener('click', () => {
//     selectElement('body').style.backgroundColor = "red";
// })
//open and close menu on clicks
// selectElement('.menu-btn').addEventListener('click', () => {
//     selectElement('.nav-menu-shown').classList.toggle('active');
// })
// selectElement('.menu-close').addEventListener('click', () => {
//     selectElement('.nav-menu-mobile').classList.remove('active');
// })