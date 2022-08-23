const burgerButton = document.querySelector('#jsBurgerButton')
const sidebarButton = document.querySelector('#jsSidebarButton')
const sidebar = document.querySelector("#jsSidebar")

burgerButton.addEventListener("click", function () {
    sidebar.classList.add("pinkitude-sidebar_show")
})

sidebarButton.addEventListener("click", function () {
    sidebar.classList.remove("pinkitude-sidebar_show")
})