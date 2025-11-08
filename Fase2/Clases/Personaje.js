import Arma from "./Arma.js";

class Personaje{
    #nombre;
    #gdad;
    #estado;
    #casa;
    #frase;


    constructor(nombre,gdad,casa,estado){
        this.#nombre = nombre;
        this.#gdad = gdad;
        this.#estado = estado;
        this.#casa = casa;
        this.#frase = "Soy " + this.#nombre + " de la " + this.#casa;
    }

    //Geters and Setters
    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getEdad() {
        return this.#gdad;
    }

    setEdad(gdad) {
        this.#gdad = gdad;
    }

    getCasa() {
        return this.#casa;
    }

    setCasa(casa) {
        this.#casa = casa;
    }

    decirFrase() {
        console.log(this.#frase);
    }

    estado(){
        if(this.#estado){
            console.log("Esta vivo");
        }else{
            console.log("Esta muerto");
        }
    }

    //Metodos

    //Cambia el estado de vivo a muerto
    morir(){
        this.#estado = false;
    }
}

export default Personaje;