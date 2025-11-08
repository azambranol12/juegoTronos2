import Personaje from '../Personaje.js';

class Consejero extends Personaje{

    #especialidad;

    constructor(nombre,edad,casa,vivo,especialidad) {
        super(nombre,edad,casa,vivo);
        this.#especialidad = especialidad;
    }

    setEspecialidad(especialidad){
        this.#especialidad = especialidad;
    }

    getEspecialidad(){
        return this.#especialidad;
    }

    luchar(){
        console.log($this.getNombre()+" no lucha con armas, si no con palabras e inteligencia.");
    }

    aconsejar(rey){
        console.log($this.getNombre()+" aconseja a ${rey.getNombre()} con su sabiduria en "+ $this.#especialidad+".");
    }

}

export default Consejero;