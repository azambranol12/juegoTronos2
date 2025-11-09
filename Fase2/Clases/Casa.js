import Personaje from "./Personaje.js";

class Casa{
    #nombre;
    #frase;
    #miembros;

    constructor(nombre,frase){
        this.#nombre = nombre;
        this.#frase = frase;
        this.#miembros = [];
    }

    //Getters and Setters
    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    
    getFrase() {
        return this.#frase;
    }


    setFrase(frase) {
        this.#frase = frase;
    }

    getMiembros(){
        return this.#miembros;
    }


    //Mostramos a los miembros de la casa.
    mostrarMiembros() {
        console.log('Miembros de la ' + this.#nombre);
        for (let i = 0; i < this.#miembros.length; i++) {
            console.log("-" + this.#miembros[i].getNombre());
        }
    }

    //Añadimos a un miembro a la casa, verificamos que el miembro no exista ya en la casa.
    añadirMiembro(miembro) {
        if (miembro instanceof Personaje) {
            let existe = false;
            for (let i = 0; i < this.#miembros.length; i++) {
                if (this.#miembros[i].getNombre() == miembro.getNombre()) {
                    existe = true;
                }
            }

            if (existe) {
                console.log("Este miembro ya esta en esta casa");
            } else {
                this.#miembros.push(miembro);
                console.log(miembro.getNombre() + " ha sido agregado a la " + this.#nombre);
            }

        } else {
            console.log("Debe ser una instancia de Personaje");
        }
    }

}

export default Casa;