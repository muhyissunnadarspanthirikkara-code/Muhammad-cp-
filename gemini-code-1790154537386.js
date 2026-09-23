// Dark / Light Theme Toggle Function
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById("themeIcon");

  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  }
}

// Load Theme from LocalStorage on Page Load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const themeIcon = document.getElementById("themeIcon");

  if (savedTheme === "light") {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
});

// Copy Phone Number Function
function copyNumber() {
  const phoneNumber = "9562303634";
  
  navigator.clipboard.writeText(phoneNumber).then(() => {
    const alertBox = document.getElementById("copyAlert");
    alertBox.innerText = "Number copied to clipboard! (9562303634)";
    
    setTimeout(() => {
      alertBox.innerText = "";
    }, 3000);
  }).catch(err => {
    console.error("Could not copy number: ", err);
  });
}