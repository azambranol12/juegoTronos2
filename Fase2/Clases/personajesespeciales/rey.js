import Personaje from "../Personaje.js";

class Rey extends Personaje {

    #reinado;

    constructor(nombre, gedad, casa, vivo, reinado) {
        super(nombre, gedad, casa, vivo);
        if (reinado < 0) {
            console.log("Los años deben tener mas de 0");
            this.#reinado = 0;
        } else {
            this.#reinado = reinado;
        }
    }

    getAniosReinado() {
        return this.#reinado;
    }

    setAniosReinado(reinado) {
        this.#reinado = reinado;
    }

    lucha() { 
        console.log(this.getNombre() + " ordena a sus caballeros atacar mientras observa la batalla desde su trono."); 
    }

    gobierna() {
        console.log(this.getNombre() + " gobierna con sabiduría desde hace " + this.#reinado + " años.");
    }

}

export default Rey
