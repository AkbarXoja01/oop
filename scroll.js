class Scroll {
  constructor({ nav, top, unit }) {
    this.nav = document.querySelector(nav);
    this.top = top ?? 100;
    this.unit = unit || "%";

    this.nav.style = `position:fixed;
                        top:${this.scrollUnit()}px`;
    window.addEventListener("scroll", () => {
      if (scrollY) {
        this.nav.style = `top:${this.scrollUnit()}px - scrollY`;
      }
      if (scrollY >= window.innerHeight - this.nav.clientHeight) {
        this.nav.style = `position:fixed`;
      }
      console.log(window.innerHeight - this.nav.clientHeight);
    });
    const hc = document.querySelector(".header__content");
    hc.addEventListener("mouseover", () => {
      hc.style = `transform: translateX(300px)
                               translateY(-200px)`;
      //   var maxX = window.innerWidth - hc.clientWidth;
      //   var maxY = window.innerHeight - hc.clientHeight;
      //   var newX = Math.floor(Math.random() * maxX);
      //   var newY = Math.floor(Math.random() * maxY);
      //   hc.style.left = newX + "px";
      //   hc.style.top = newY + "px";
    });
  }
  scrollUnit() {
    if (this.unit == "px") {
      return this.top;
    } else {
      return (window.innerHeight / 100) * this.top - this.nav.clientHeight;
    }
  }
}
new Scroll({
  nav: ".header__nav",
  top: 100,
  unit: "%",
});
