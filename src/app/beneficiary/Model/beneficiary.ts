export class Beneficiary {
    id: number;
    name: string;
    accountNumber: string;
    reference: string;

    constructor (id: number, name: string, accountNumber: string, reference: string){
        this.name = name;
        this.accountNumber = accountNumber;
        this.reference = reference;
        this.id = id;
    }
}