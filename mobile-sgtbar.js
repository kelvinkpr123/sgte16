class Mobilesgtbar {
  constructor(mobileMenu, sgtList, sgtLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.sgtList = document.querySelector(sgtList);
    this.sgtLinks = document.querySelectorAll(sgtLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.sgtLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `sgtLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.sgtList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobilesgtbar = new Mobilesgtbar(
  ".mobile-menu",
  ".sgt-list",
  ".sgt-list li",
);
mobilesgtbar.init();
