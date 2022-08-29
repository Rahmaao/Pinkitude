const sidebar = document.querySelector("#jsSidebar");
const burger = document.querySelector("#jsBurgerButton")
const close = document.querySelector("#jsCloseButton")

const toggleSidebarDrop = document.querySelector("#dropable-sidebar-link");

toggleSidebarDrop.addEventListener("click", () => {
    sidebar.classList.toggle("show-dropmenu")
 })


burger.addEventListener("click", function(){
    sidebar.classList.add("pinkitude-navbar__sidebar_show")
})
close.addEventListener("click", function(){
    sidebar.classList.remove("pinkitude-navbar__sidebar_show")
})


$('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');
    
    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter:selector
    });
    return  false;
});
$(document).ready(function() {
var popup_btn = $('.popup-btn');
popup_btn.magnificPopup({
type : 'image',
gallery : {
    enabled : true
}
});
});