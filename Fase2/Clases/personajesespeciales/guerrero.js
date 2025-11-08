import Personaje from "./Fase2/Clases/Personaje.js";
import Arma from "./Fase2/Clases/Arma.js";

class Guerrero extends Personaje{

    #arma;

    constructor(nombre, gdad, casa, estado, arma){
        super(nombre, gdad, casa, estado);
        if(arma instanceof Arma)
        {
            this.#arma = arma;
            console.log($this.getNombre()+ " ha equipado el arma " + arma.getNombre());
        }else{
            console.log("Debe ser una instancia de Arma")
        }
    }

    //Agrega el arma al personaje
    agregarArma(arma) {
        if (arma instanceof Arma) {
            this.#arma = arma;
            console.log(this.getNombre + " ha equipado el arma " + arma.getNombre());
        } else {
            console.log("Debe ser una instancia de Arma");
        }
    }

    // Muestra el arma del personaje si la tiene
    verArma() {
        if (this.#arma == null) {
            console.log("Este personaje aun no tiene un arma");
        } else {
            return this.#arma;
        }
    }
    luchar(){ 
        console.log(this.getNombre() + " ataca con " + this.#arma.getNombre() + " causando " + this.#arma.getDaño() + " puntos de daño."); 
    }

    entrenar(){ 
        console.log(this.getNombre() + " entrena hasta el cansancio para su próxima batalla."); 
    }
}