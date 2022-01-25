import { Moteur } from './../Moteur';
export abstract class AbstractMoteurThermique implements Moteur{
    private _carburant: string;

    constructor(carburant: string) {
        this._carburant = carburant
    }

    get carburant(): string{
        return this._carburant;
    }

    abstract augmenterTours(): string;
}