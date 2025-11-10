import Arma from "./Clases/Arma.js";
import Guerrero from "./Clases/personajesespeciales/guerrero.js";
import Consejero from "./Clases/personajesespeciales/consejero.js";
import Rey from "./Clases/personajesespeciales/rey.js";

// Jon Snow
const garra = new Arma("Garra", 25, "Espada");
const jonSnow = new Guerrero("Jon Snow", 23, "Casa Stark", true, garra);
jonSnow.decirFrase(); 
jonSnow.luchar();
jonSnow.entrenar();

// Tyrion Lannister
const tyrion = new Consejero("Tyrion Lannister", 38, "Casa Lannister", true, "política");
tyrion.decirFrase();
tyrion.luchar();
tyrion.aconsejar(new Rey("Robert Baratheon", 45, "Casa Lannister", true, 15));

// Robert Baratheon
const robert = new Rey("Robert Baratheon", 45, "Casa Lannister", true, 15);
robert.decirFrase();
robert.gobierna();
robert.lucha();
