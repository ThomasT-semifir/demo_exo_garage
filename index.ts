import { Conducteur } from './src/personne/Conducteur';
import { MoteurElectrique } from './src/moteur/concretes/MoteurElectrique';
import { MoteurDiesel } from './src/moteur/concretes/MoteurDiesel';
import { Voiture } from './src/engin-motorise/concretes/Voiture';
import { EnginMotorise } from './src/engin-motorise/EnginMotorise';
import { Moteur } from './src/moteur/Moteur';
import { MoteurEssence } from './src/moteur/concretes/MoteurEssence';
import { Moto } from './src/engin-motorise/concretes/Moto';
import { Garage } from './src/garage/Garage';
let moteurEssence: Moteur = new MoteurEssence();
let moteurDiesel: Moteur = new MoteurDiesel();
let moteurElec: Moteur = new MoteurElectrique();

let voitureEssence: Voiture = new Voiture("Fiat", moteurEssence)
let voitureDiesel: Voiture = new Voiture("Lancia", moteurDiesel)
let voitureElec: Voiture = new Voiture("Tesla", moteurElec)
let moto: Moto = new Moto("Honda", moteurEssence)


// console.log(voitureEssence.decrire());
// console.log(voitureEssence.faireLePlein());
// console.log(voitureDiesel.decrire());
// console.log(voitureDiesel.faireLePlein());
// console.log(voitureElec.decrire());
// console.log(voitureElec.faireLePlein());
// console.log(moto.decrire());
// console.log(moto.faireLePlein());

let garage = new Garage();

garage.ajouterEnginMotorise(moto);
garage.ajouterEnginMotorise(voitureElec);

let thomas = new Conducteur("Thomas", 35, garage);
console.log(thomas.presenterGarage());