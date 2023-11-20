import { validate } from 'uuid';

export class idDTO{
    private constructor(
        public id:string,
    ){}

    static create(id?:any|unknown):[string?,string?]{
        if(!id) return [undefined,undefined]
        if(typeof id !== "string") return ["Id is not a string",undefined]
        if(!validate(id)) return ["Id is invalid",undefined];
        return [undefined,String(id)]
        
    }
}