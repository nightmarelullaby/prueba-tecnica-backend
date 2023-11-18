export class idDTO{
    private constructor(
        public id:number,
    ){}

    static create(id:any|unknown):[string?,number?]{
        if(!id) return ["Id is missing",undefined]
        if(typeof id === "string") return [undefined,Number(id)]
        return [undefined,Number(id)]
        
    }
}