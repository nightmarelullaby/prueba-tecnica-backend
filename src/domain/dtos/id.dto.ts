import { validate } from 'uuid';

export class idDTO{
    private constructor(
        public id:string,
    ){}

    static create(required:boolean,id?:any|unknown):[string?,string?]{
        if(!id && required) return ["Id is missing",undefined]
        if(!id && !required) return [undefined,id]
        if(typeof id !== "string") return ["Id is not a string",undefined]
        if(!validate(id)) return ["Id is invalid",undefined];
        return [undefined,String(id)]
        
    }
}