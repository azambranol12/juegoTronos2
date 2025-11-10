import Personaje from "../Personaje.js";
import Arma from "../Arma.js";

class Guerrero extends Personaje{

    #arma;
    #vida;

    constructor(nombre, gdad, casa, estado, arma){
        super(nombre, gdad, casa, estado);
        if(arma instanceof Arma)
        {
            this.#arma = arma;
            this.#vida = 100;
            //console.log(this.getNombre()+ " ha equipado el arma " + arma.getNombre());
        }else{
            console.log("Debe ser una instancia de Arma")
        }
    }

    //Agrega el arma al personaje
    agregarArma(arma) {
        if (arma instanceof Arma) {
            this.#arma = arma;
            //console.log(this.getNombre() + " ha equipado el arma " + arma.getNombre());
        } else {
            console.log("Debe ser una instancia de Arma");
        }
    }

    // Muestra el arma del personaje si la tiene
    verArma() {
        if (this.#arma == null) {
            console.log("Este personaje no tiene un arma tonto");
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

    atacar(objetivo) {
        const daño = Math.floor(this.#arma.getDaño() * (0.7 + Math.random() * 0.6));
        console.log(this.getNombre() + " ataca a " + objetivo.getNombre() + " causando " + daño + " puntos de daño.");
        objetivo.recibirDaño(daño);
        console.log(this.getNombre() + ": " + this.#vida + " | " + objetivo.getNombre() + ": " + objetivo.getVida());
    }

    recibirDaño(puntos) {
        this.#vida -= puntos;
        if (this.#vida <= 0) {
            this.#vida = 0;
            this.morir(); // Cambia estado a muerto
        }
    }

     getVida(){
        return this.#vida;
     }
}

export default Guerrero;