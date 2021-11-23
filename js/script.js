$(document).ready(function() {
  $('.header_burger').click(function(event) {
    $('.header_burger, .navigation_content nav  ').toggleClass('active');
    toggleNav();
  });
});

function toggleNav(){
  const navContainer = document.getElementsByTagName("nav")[0];
  const isVisable = navContainer.style.display !== "block";
  navContainer.style.display = isVisable ? "block":"none";

}