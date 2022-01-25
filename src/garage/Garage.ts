import { Moto } from '../engin-motorise/concretes/Moto';
import { EnginMotorise } from './../engin-motorise/EnginMotorise';
export class Garage {
    private _listeVehicules: EnginMotorise[] = [];

    ajouterEnginMotorise(engin: EnginMotorise): void {
        this._listeVehicules.push(engin);
    }

    retirerEnginMotorise(enginARetirer: EnginMotorise): void {
        this._listeVehicules = this._listeVehicules.filter((engin) => enginARetirer !== engin)
    }

    presenterGarageComplet(): string {
        let resultat: string = "Voici mon garage:"
        this._listeVehicules.forEach(engin => {
            resultat += `\n${engin.decrire()}`
        });
        return resultat;
    }

    presenterMotos(): void {
        this._listeVehicules.forEach(engin => {
            if (engin instanceof Moto){
                console.log(engin);
            }
        });
    }
}