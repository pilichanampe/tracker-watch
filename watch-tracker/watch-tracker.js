class WatchTracker extends HTMLElement {
    constructor() {
      super();
      loadTemplate("#watch-tracker", this);
    }

    connectedCallback() {  
      //Para ver cómo cambia el latido del corazón y la cantidad de calorías quemadas, cambiar el valor de esta función.    
      this.updateTracker(200);      
    }

    //Updates the heart rate
    updateHeartbeat(frequency) {
      const beatInterval = 60/frequency;
      //Makes the heart icon blink
      this.shadowRoot.querySelector("#heart").style.animation = `blink ${beatInterval.toString()}s infinite`;
      return beatInterval;
    }

    //Updates the calories with a formula
    updateCalories(frequency) {
      //let sex = 'female';
      let age = 31;
      let weight = 63;
      let  averageHR = frequency;
      let exerciseTime = 45;/*length of exercise in minutes*/
      
      //Updates the burnt calories. Female formula
      this.burntCalories = Math.round((0.4472 * averageHR - 0.05741 * weight + 0.074 * age - 20.4022) * exerciseTime / 4.184);
      //Adds the burnt calories result into the HTML.
      this.shadowRoot.querySelector("#calories").innerHTML = `${this.burntCalories} KCAL`
    }

    //Updates the tracker
    updateTracker(frequency) {
      this.shadowRoot.querySelector("#bpm").innerHTML = `${frequency}`;
      this.updateHeartbeat(frequency);
      this.updateCalories(frequency);
    }
}

window.customElements.define("watch-tracker", WatchTracker);

