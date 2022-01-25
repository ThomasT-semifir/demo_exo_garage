import { Voiture } from "./Voiture";

export class Camion extends Voiture {
    attacherRemorque(): string {
        return "J'attache la remorque";
    }

    detacherRemorque(): string {
        return "Je détache la remorque";
    }
}
