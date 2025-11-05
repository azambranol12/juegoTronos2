import Casa from "./Casa.js";
import Personaje from "./Personaje.js";

class Reino{
    #nombre;
    #casas;
    #rey;

    constructor(nombre) {
        this.#nombre = nombre;
        this.#casas = [];
        this.#rey = null;
    }

    // Getters y Setters
    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getCasas() {
        return this.#casas;
    }

    setCasas(casas) {
        this.#casas = casas;
    }

    getRey() {
        return this.#rey;
    }

    setRey(rey) {
        this.#rey = rey;
    }

    //Metodos de agregar casas mostrar rey listar casas y agragar rey

    agregarCasa(casa) {
        if (casa instanceof Casa) {
            let existe = false;
            for (let i = 0; i < this.#casas.length; i++) {
                if (this.#casas[i].getNombre() === casa.getNombre()) {
                    existe = true;
                }
            }

            if (existe) {
                console.log("Esta casa ya existe");
            } else {
                this.#casas.push(casa);
                console.log("La " + casa.getNombre() + " ha sido agregada al Reino de " + this.#nombre);
            }
        } else {
            console.log("Solo se pueden agregar instancias Casa");
        }
    }

    mostrarRey() {
        if (this.#rey === null) {
            console.log("Este reino no tiene rey aún");
        } else {
            console.log("El rey actual es " + this.#rey.getNombre() + " de la casa " + this.#rey.getCasa());
        }
    }

    listarCasas() {
        for (let i = 0; i < this.#casas.length; i++) {
            console.log(this.#casas[i].getNombre());
        }
    }

    agregarRey(rey) {
        if (rey instanceof Personaje) {
            let casa = null;
            for (let i = 0; i < this.#casas.length; i++) {
                if (this.#casas[i].getNombre() === rey.getCasa()) {
                    casa = this.#casas[i];
                }
            }

            if (casa === null) {
                console.log("La casa de este personaje no existe");
                return;
            }

            let existeMiembro = false;
            let miembros = casa.getMiembros();
            for (let i = 0; i < miembros.length; i++) {
                if (miembros[i].getNombre() === rey.getNombre()) {
                    existeMiembro = true;
                }
            }

            if (!existeMiembro) {
                console.log("El personaje no existe en esta casa");
                return;
            }

            this.#rey = rey;
            console.log(rey.getNombre() + " ha sido proclamado rey de " + this.#nombre);
        } else {
            console.log("El rey debe ser una instancia de personaje");
        }
    }


}

export default Reino;