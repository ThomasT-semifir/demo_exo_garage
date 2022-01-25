import { AbstractMoteurThermique } from "./AbstractMoteurThermique";

export class MoteurDiesel extends AbstractMoteurThermique{
    
    constructor() {
        super("diesel");
    }

    augmenterTours(): string {
        return "VROUUUUUM";
    }
}
