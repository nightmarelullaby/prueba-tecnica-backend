export class ScheduleDTO{
    private constructor(
        public name:string,
        public email:string,
        public phone_number:string
    ){}

    static create(object:{[key:string]:any |unknown}):[string?,ScheduleDTO?]{
        const {name,email,phone_number} = object
        if(!name) return ["Name is missing",undefined]
        if(!email) return ["email is missing",undefined]
        if(!phone_number) return ["phone_number is missing",undefined]

        return [undefined,new ScheduleDTO(name,email,phone_number)]
        
    }
}