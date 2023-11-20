import { validate } from 'uuid';

export class idDTO{
    private constructor(
        public id:string,
    ){}

    static create(required:boolean,id?:any|unknown):[string,string?]{
        if(!id && required) return [id,"Id is missing"]
        if(!id && !required) return [id,undefined,]
        if(typeof id !== "string") return [id,"Id is not a string",]
        if(!validate(id)) return [id,"Id is invalid"];
        return [String(id),undefined]
        
    }
}