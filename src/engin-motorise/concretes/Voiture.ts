import { AbstractVehicule } from "./AbstractVehicule";

export class Voiture extends AbstractVehicule{
    decrire(): string {
        return `Description de la voiture: ${super.decrire()}`
    }

    reculer(): string {
        return "Je recule";
    }
}