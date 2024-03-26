class Typing {
  constructor({ el, interval, delay }) {
    this.el = document.querySelector(el);
    this.interval = interval || 500;
    this.delay = delay ?? 1000;
    this.text = this.el.innerHTML;
    this.el.innerHTML = "";
    setTimeout(() => {
      this.write();
    }, this.delay);
  }
  write(i = 0) {
    this.el.innerHTML += this.text[i]; //HEADE
    i++;
    if (this.text.length > i) {
      setTimeout(() => {
        this.write(i);
      }, this.interval);
    }
  }
}
new Typing({
  el: ".header__content h1",
  interval: 300,
  delay: 1000,
});
new Typing({
  el: ".header__content p",
  interval: 500,
  delay: 0,
});
