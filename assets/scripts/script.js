const sidebar = document.querySelector("#jsSidebar");
const burger = document.querySelector("#jsBurgerButton")
const close = document.querySelector("#jsCloseButton")



burger.addEventListener("click", function(){
    sidebar.classList.add("pinkitude-navbar__sidebar_show")
})
close.addEventListener("click", function(){
    sidebar.classList.remove("pinkitude-navbar__sidebar_show")
})