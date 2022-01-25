import { AbstractMoteurThermique } from "./AbstractMoteurThermique";

export class MoteurEssence extends AbstractMoteurThermique {
    
    constructor() {
        super("essence");
    }
    
    augmenterTours(): string {
        return "vrouum";
    }
    
}