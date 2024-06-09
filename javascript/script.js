const header = document.querySelector("header");

window.addEventListener("scroll", function () {
header.classList.toggle("sticky",
this.window.scrollY>60)
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function res() {
    const manue = document.querySelector('.manue-icon');
    const icon = document.querySelector('.manue-links');
    icon.classList.toggle('open')
}

