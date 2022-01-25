export class Personne {
    private _age: number;
    private _nom: string;

    constructor(age: number, nom: string) {
        this._age = age;
        this._nom = nom
    }
    
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }

    sePresenter(): string {
        return `Je m'appelle ${this.nom}, j'ai ${this.age} ans`
    }
}