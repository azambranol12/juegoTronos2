import Casa from "./Casa.js";
import Personaje from "./Personaje.js";

class Batalla {

    #guerrerosMuertos;

    constructor() {
        this.#guerrerosMuertos = [];
    }

    iniciarBatalla(casaA, casaB) {

        let guerrerosA = casaA.getMiembros();
        let guerrerosB = casaB.getMiembros();

        while (guerrerosA.length > 0 && guerrerosB.length > 0) {

            const atacanteA = guerrerosA[Math.floor(Math.random() * guerrerosA.length)];
            const atacanteB = guerrerosB[Math.floor(Math.random() * guerrerosB.length)];

            console.log("\nNuevo enfrentamiento: " + atacanteA.getNombre() + " vs " + atacanteB.getNombre());

            // Ataques
            atacanteA.atacar(atacanteB);
            if (!atacanteB.estaMuerto()) {
                atacanteB.atacar(atacanteA);
            }

            let nuevosGuerrerosA = [];
            for (const g of guerrerosA) {
                if (g.estaMuerto()) {
                    console.log(g.getNombre() + " ha muerto.");
                    this.#guerrerosMuertos.push(g);
                } else {
                    nuevosGuerrerosA.push(g);
                }
            }
            guerrerosA = nuevosGuerrerosA;

            let nuevosGuerrerosB = [];
            for (const g of guerrerosB) {
                if (g.estaMuerto()) {
                    console.log( g.getNombre() + " ha muerto.");
                    this.#guerrerosMuertos.push(g);
                } else {
                    nuevosGuerrerosB.push(g);
                }
            }
            guerrerosB = nuevosGuerrerosB;

            // Mostrar estado actual
            const nombresA = [];
            for (const g of guerrerosA) {
            nombresA.push(g.getNombre());
            }

            const nombresB = [];
            for (const g of guerrerosB) {
            nombresB.push(g.getNombre());
            }

            console.log("Guerreros A: " + nombresA.join(", "));
            console.log("Guerreros B: " + nombresB.join(", "));
        }

        // Determinar ganador
        if (guerrerosA.length === 0 && guerrerosB.length === 0) {
            console.log("\nEl combate terminó en empate.");
        } else if (guerrerosA.length > 0) {
            console.log("\n¡Guerreros de la casa " + casaA.getNombre() + " ganan la batalla!");
        } else {
            console.log("\n¡Guerreros de la casa " + casaB.getNombre() + " ganan la batalla!");
        }
    }

    mostrarGuerrerosMuertos() {
        if (this.#guerrerosMuertos.length === 0) {
            console.log("No ha muerto ningún guerrero en esta batalla.");
            return;
        }

        console.log("\nGuerreros muertos en la batalla:");
        for (const guerrero of this.#guerrerosMuertos) {
            console.log(guerrero.getNombre());
        }
    }
}

export default Batalla;
