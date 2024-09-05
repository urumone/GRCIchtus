// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active untuk searc form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klick di luar element
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Data Statistik Gereja
document.addEventListener("DOMContentLoaded", function () {
  const stats = [
    { id: "pastors", count: 2, progress: 50 },
    { id: "elders", count: 2, progress: 50 },
    { id: "youth", count: 20, progress: 60 },
    { id: "members", count: 100, progress: 80 },
  ];

  stats.forEach((stat) => {
    document.getElementById(`${stat.id}-count`).textContent = stat.count;
    const progressBar = document.getElementById(`${stat.id}-progress`);

    // Mengatur lebar progres bar setelah sedikit delay untuk animasi
    setTimeout(() => {
      progressBar.style.width = `${stat.progress}%`;
    }, 100);
  });
});
