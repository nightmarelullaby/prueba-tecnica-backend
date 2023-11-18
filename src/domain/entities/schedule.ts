export class Schedule {
    public name:string;
    public email:string;
    public phone_number:string;
    public id?:string;

    constructor(id:string,name:string,email:string,phone_number:string){
        this.name = name
        this.email = email
        this.phone_number = phone_number
        this.id = id

    }
}