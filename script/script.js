var tablinks = document.getElementsByClassName("tab-links");
// var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// var sidemenu = document.getElementById("sidemenu");

// function openmenu() {
//   sidemenu.style.right = "300px";
// }

// function closemenu() {
//   sidemenu.style.right = "-900px";
// }
function toggleMenu() {
  var navItems = document.querySelector(".nav-items");
  navItems.style.display = navItems.style.display === "flex" ? "none" : "flex";
}

function navigate(section) {
  // You can add functionality to navigate to the specific section/page
  console.log("Navigating to " + section);
  // For simplicity, just log the section for now
}
