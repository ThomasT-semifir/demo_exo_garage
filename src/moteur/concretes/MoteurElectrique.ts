import { Moteur } from './../Moteur';
export class MoteurElectrique implements Moteur{
    private _carburant: string;

    /**
     *
     */
    constructor() {
        this._carburant = "electricité"
    }
    get carburant(): string {
        return this._carburant;
    }
    
    augmenterTours(): string {
        return "pffffffft";
    }

    recharger(): string {
        return "La voiture est en charge";
    }
}