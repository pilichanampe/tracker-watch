class WatchDate extends HTMLElement {
  constructor() {
    super();
    loadTemplate("#watch-date", this);
  }

  connectedCallback() {
    this.loadDate();
    this.updateDate();
  }

  loadDate() {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getMinutes();
    const dateDay = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const nameDay = days[day].slice(0, 3).toUpperCase();
    //console.log(nameDay);

    const months = ["Enero", "Febrero", "Marzo", "Abril" ,"Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const nameMonth = months[month].slice(0, 3).toUpperCase();
    //console.log(date);

    //Updates the Shadow DOM
    this.shadowRoot.querySelector('p').innerHTML = nameDay + " " + dateDay + " " + nameMonth + " " + year;
  }

  updateDate() {
    setInterval(() => {      
      this.loadDate();    
    }, 1000);  
  }
}

window.customElements.define("watch-date", WatchDate);