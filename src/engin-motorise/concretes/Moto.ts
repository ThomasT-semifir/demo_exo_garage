import { AbstractVehicule } from './AbstractVehicule';
import { DeuxRoues } from '../DeuxRoues';
export class Moto extends AbstractVehicule implements DeuxRoues {
    faireUnWheeling(): string {
        return "weeeeeeeeeeeeeeeeeeeeeeeeee";
    }
    
    decrire(): string {
        return `Description de la moto: ${super.decrire()}`
    }
}