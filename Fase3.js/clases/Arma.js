class Arma{

    #nombre;
    #daño;
    #tipo;

    constructor(nombre,daño,tipo) {
        this.#daño = daño;
        this.#nombre = nombre;
        this.#tipo = tipo;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }

    setDaño(daño){
        this.#daño = daño;
    }

    getDaño(){
        return this.#daño;
    }

    setTipo(tipo){
        this.#tipo = tipo;
    }

    getTipo(){
        return this.#tipo;
    }

    //Metodos

    descripcion(){
        console.log(this.#nombre + '('+this.#tipo +') - daño:'+ this.#daño);
    }
}

export default Arma;