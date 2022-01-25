import { Moteur } from "../moteur/Moteur";

export interface EnginMotorise {
    faireLePlein(): string;
    decrire(): string;
    get moteur(): Moteur;
}
