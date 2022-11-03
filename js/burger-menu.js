(function () {
  const headerBurger = document.querySelector(".header__burger");
  const headerNav = document.querySelector(".header__nav");
  const headerPromo = document.querySelector(".header__promo")
  headerBurger.addEventListener("click", function () {
    document.body.classList.toggle("lock");
    headerBurger.classList.toggle("active");
    headerPromo.classList.toggle('active')
    headerNav.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".header__nav-link");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function () {
      if (headerBurger.classList.contains("active")) {
        document.body.classList.remove("lock");
        headerBurger.classList.remove("active");
        headerNav.classList.remove("active");
        headerPromo.classList.remove("active")
      }
    });
  });
})();
