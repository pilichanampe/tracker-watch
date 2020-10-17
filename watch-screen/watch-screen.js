class WatchScreen extends HTMLElement {
  constructor() {
    super();
    loadTemplate("#watch-screen", this);
  }

  connectedCallback() {
    //Disables the turning border
    //this.shadowRoot.querySelector(".turning-border").style.animation = "none";
    
  }
}

window.customElements.define("watch-screen", WatchScreen);