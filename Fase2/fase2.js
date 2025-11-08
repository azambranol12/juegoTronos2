import Personaje from "./Fase1/Clases/Personaje.js";
import Casa from "./Fase1/Clases/Casa.js";
import Reino from "./Fase1/Clases/Reino.js";
import Arma from "./Fase1/Clases/Arma.js";

let reinoPrincipal = new Reino("Poniente");
let familiaLannister = new Casa("Casa Lannister", "Un Lannister siempre paga sus deudas");
let familiaStark = new Casa("Casa Stark", "Se acerca el invierno");
let personajeJhon = new Personaje("Jhon Snow", 23, "Casa Stark", true);
let personajeArya = new Personaje("Arya Stark", 18, "Casa Stark", true);
let personajeJaime = new Personaje("Jaime Lannister", 43, "Casa Lannister", true);
let armaGarra = new Arma("Garra", 25, "Espada");
let armaAguja = new Arma("Aguja", 15, "Espada");

// Se incorporan las casas al reino
console.log("\nAgregamos las casas al reino");
reinoPrincipal.agregarCasa(familiaLannister);
reinoPrincipal.agregarCasa(familiaStark);

// Se asignan armas a los personajes creados
console.log("\nAsignamos armas a los personajes");
personajeJhon.agregarArma(armaGarra);
personajeArya.agregarArma(armaAguja);

// Se añaden los personajes a sus respectivas casas
console.log("\nIncorporamos los personajes en sus respectivas casas");
familiaStark.añadirMiembro(personajeJhon);
familiaStark.añadirMiembro(personajeArya);
familiaLannister.añadirMiembro(personajeJaime);

// Se designa al nuevo rey del reino
console.log("\nNombramos al nuevo rey del reino");
reinoPrincipal.agregarRey(personajeJaime);

// Se muestra el listado de casas dentro del reino
console.log("\nMostramos todas las casas pertenecientes al reino");
reinoPrincipal.listarCasas();

// Se visualiza la información del rey actual
console.log("\nMostramos información del rey actual");
reinoPrincipal.mostrarRey();

// Se enseñan los miembros que pertenecen a cada casa
console.log("\nDesplegamos los miembros de cada casa");
familiaStark.mostrarMiembros();
familiaLannister.mostrarMiembros();

// Se ejecutan las frases emblemáticas de cada personaje
console.log("\nEjecutamos las frases características de cada personaje");
personajeJhon.decirFrase();
personajeArya.decirFrase();
personajeJaime.decirFrase();

// Se muestran los detalles de las armas disponibles
console.log("\nPresentamos las armas disponibles");
armaGarra.descripcion();
armaAguja.descripcion();
