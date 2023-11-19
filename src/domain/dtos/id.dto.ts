export class idDTO{
    private constructor(
        public id:string,
    ){}

    static create(id:any|unknown):[string?,string?]{
        if(!id) return ["Id is missing",undefined]
        if(typeof id === "string") return [undefined,String(id)]
        return [undefined,String(id)]
        
    }
}