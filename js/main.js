"use strict";

const MovementWine = () => {
  window.addEventListener("scroll", function () {
    const element = document.querySelector(".img-section-one");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};
MovementWine();

const AnimateBloc3 = () => {
  window.addEventListener("scroll", function () {
    const element = document.querySelector(".container-three");
    const positionFromTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};
AnimateBloc3();

const AnimateImgbloc4Left = () => {
  window.addEventListener("scroll", function () {
    const element = document.querySelector(".img-bloc-one-4");
    const positionFromTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};
AnimateImgbloc4Left();

const AnimateImgbloc4Right = () => {
  window.addEventListener("scroll", function () {
    const element = document.querySelector(".img-bloc-two-4");
    const positionFromTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};
AnimateImgbloc4Right();

const AnimateBloc5 = () => {
  window.addEventListener("scroll", function () {
    const element = document.querySelector(".bloc-one-5");
    const positionFromTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};
AnimateBloc5();

const Footer = () => {
  window.addEventListener("scroll", function () {
    const element = document.querySelector("footer");
    const positionFromTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};
Footer();

const navBar = () => {
  // Sélectionner les éléments du menu
  const burgerMenu = document.querySelector(".burger-menu");
  const linkNav = document.querySelector(".link-nav ul");

  // Ajouter un gestionnaire d'événement au menu burger
  burgerMenu.addEventListener("click", function () {
    // Vérifier si la classe 'show-links' est présente
    if (linkNav.classList.contains("show-links")) {
      // Supprimer la classe 'show-links'
      linkNav.classList.remove("show-links");
    } else {
      // Ajouter la classe 'show-links'
      linkNav.classList.add("show-links");
    }
  });
};
navBar();

const navBar2 = () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const linkNav = document.querySelector(".link-nav ul");

  burgerMenu.addEventListener("click", () => {
    linkNav.classList.toggle("show-links");
  });
};
navBar2;

const age = () => {
  const ageOkayButton = document.getElementById("ageOkay");
  const ageWrapper = document.getElementById("ageWrapper");

  const userAgeResponse = localStorage.getItem("userAgeResponse");

  if (userAgeResponse === "yes") {
    ageWrapper.style.display = "none";
    ageWrapper.style.opacity = "0px";
  }

  ageOkayButton.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("userAgeResponse", "yes");
    ageWrapper.style.display = "none";
    ageWrapper.style.opacity = "0px";
  });
};

age();
