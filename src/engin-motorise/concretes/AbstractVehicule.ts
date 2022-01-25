import { MoteurDiesel } from './../../moteur/concretes/MoteurDiesel';
import { MoteurEssence } from './../../moteur/concretes/MoteurEssence';
import { MoteurElectrique } from './../../moteur/concretes/MoteurElectrique';
import { EnginMotorise } from './../EnginMotorise';
import { Moteur } from "../../moteur/Moteur";

export abstract class AbstractVehicule implements EnginMotorise{
    private _marque: string;
    private _moteur: Moteur;
    
    constructor(marque: string, moteur: Moteur) {
        this._marque = marque;
        this._moteur = moteur;
    }
    
    get marque(): string {
        return this._marque;
    }
    
    get moteur(): Moteur {
        return this._moteur;
    }

    faireLePlein(): string {
        let result: string = `Le vehicule à ${this.moteur.carburant}`
        if (this.moteur instanceof MoteurElectrique){
            return `${result}: ${this.moteur.recharger()}... ça coûte presque rien` ;
        } else if (this.moteur instanceof MoteurEssence){
            return `${result} se remplit: c'est très cher!`;
        } else if (this.moteur instanceof MoteurDiesel){
            return `${result} se remplit: c'est cher!`;
        } else {
            return "Je connais pas ton moteur?"
        }
    }

    decrire(): string {
        return `marque: ${this.marque}, carburant: ${this.moteur.carburant}`
    }

    avancer(): string {
        return "J'avance";
    }

    freiner(): string {
        return "Je freine";
    }
}