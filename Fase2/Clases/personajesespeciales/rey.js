import Personaje from "./Fase2/Clases/Personaje.js";

class Rey extends Personaje{

    #reinado;

    constructor(nombre,gedad,casa,vivo,reinado) {
        super(nombre,gedad,casa,vivo);
        if(reinado<0){
            console.log("Los años de reinado no pueden ser menores a 0");
            this.#reinado = 0;
        }else{
            this.#reinado = reinado;
        }
    }

    getAniosReinado(){
        return this.#reinado;
    }

    setAniosReinado(reinado){
        this.#reinado = reinado;
    }

    luchar(){
        console.log(`${this.getNombre()} lidera la batlla y anima a sus tropas.`);
    }

    gobernar(){
        console.log(`${this.getNombre()} gobierna con sabiduria desde hace ${this.#reinado} años.`);
    }

}

export default Rey;
