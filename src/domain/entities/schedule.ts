export class Schedule {
    public name:string;
    public email:string;
    public phone_number:string;
    public id?:number;

    constructor(name:string,email:string,phone_number:string){
        this.name = name
        this.email = email
        this.phone_number = phone_number

    }
}