class WatchTime extends HTMLElement {
  constructor() {
    super();
    loadTemplate("#watch-time", this);
    /*this.date = new Date();
    this.hour = this.date.getHours();
    this.minute = this.date.getMinutes();
    this.second = this.date.getSeconds();
    this.colon = this.shadowRoot.getElementById("colon");
    this.blink(this.colon);
    this.loadTime();*/
    

  }

  connectedCallback() {
    this.colon = this.shadowRoot.querySelectorAll(".colon");   
    
    this.blinkAll(this.colon);
    this.loadTime();
    //this.updateTime();
    //this.shadowRoot.querySelector("#second")
  }  

  loadTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    
    this.shadowRoot.querySelector("#hour").innerText = this.addZero(hour);
    this.shadowRoot.querySelector("#minute").innerText = this.addZero(minute);
    this.shadowRoot.querySelector("#second").innerText = this.addZero(second);    


    /*Joel: cómo va?? Dejé esto acá comentado porque tengo una consulta:
      Encontré en internet una solución que utilizaba una función similar para actualizar el tiempo y hacía uso de un setTimeout()
      dentro de una función parecida a loadTime() para actualizar el tiempo del reloj.
      Esta opción también funciona... La consulta es la siguiente:
      Qué pasa con el stack en JS? Esta solución, como se invoca dentro de loadTime(), me estaría llenando
      la pila, haciéndome un stack overflow? Porque invoca a this.loadTime() dentro de loadTime(), entonces nunca
      permite que se vaya vaciando la pila??
      Sé que es más del backend, pero me interesaría mucho saber qué es lo que pasa a nivel interno y si realmente
      esta solución me estaría produciendo un stack overflow y la otra no.
    */

    /*
      Joel! Dejé la consulta de arriba que era la original... Ahora va otra consulta:
        Acabo de chequear en el task manager de Chrome, y veo que me va consumiendo cada vez más RAM la solución de updateTime() también... Por qué será?
        Capaz que el problema no está en estas funciones y lo tengo en otro lado,
        pero no se me ocurre dónde.
    */

  
    setTimeout(() => {      
      this.loadTime();    
    }, 1000);
  
  }

  updateTime() {
    setInterval(() => {      
      this.loadTime();    
    }, 1000);
  }

  //Function that makes the colons blink. In an optimized design, it's too much visual information having two blinking colons when the seconds appear as numbers.
    blinkAll(selectors) {
      //querySelectorAll devuelve un array, por lo que hay que leerlo como una lista con un forEach, si no, no funca.  
      selectors.forEach(element => element.style.animation = "blink 1s infinite");
    }

  //Function that makes a colon blink. It will be used in the future when the design and code are completed.
  /*blink(element) {
    element.style.animation = "blink 1s infinite";
  }*/

  addZero(number) {
    if (number < 10) {
      return "0" + number;
    }
    else {
      return number;
    }
  }
}

window.customElements.define("watch-time", WatchTime);








