import { EnginMotorise } from './../engin-motorise/EnginMotorise';
import { Garage } from '../garage/Garage';
import { Personne } from './Personne';
import { Voiture } from '../engin-motorise/concretes/Voiture';
import { Moto } from '../engin-motorise/concretes/Moto';
import { Camion } from '../engin-motorise/concretes/Camion';

export class Conducteur extends Personne {
    
    private _garage: Garage

    constructor(nom: string, age: number, garage: Garage) {
        super(age, nom);
        this._garage = garage;
    }

    conduire(engin: EnginMotorise) {
        if (engin instanceof Camion) {
            return `${engin.attacherRemorque()}` 
        }  
        if (engin instanceof Moto) {
            return `${engin.faireUnWheeling()}`
        } 
        if (engin instanceof Voiture) {
            return `${engin.avancer()} et ${engin.reculer()}`
        }
        return "C'est pas un véhicule ça";
    }

    presenterGarage(): string {
        return `${super.sePresenter()} => ${this._garage.presenterGarageComplet()}`
    }
}