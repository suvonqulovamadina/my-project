const menuIcon = document.querySelector(".menu-icon")
const mobileMenu = document.querySelector(".mobile-menu")
const html = document.querySelector("html")

function toggleMobileMenu(){
    mobileMenu.classList.toggle("active")

    if (mobileMenu.classList.contains("active")){
        HTMLAllCollection.style.overflow = "hidden"
    }else{
        HTMLAllCollection.style.overflow = "scroll"
    }
}

menuIcon.addEventListener("click", toggleMobileMenu)