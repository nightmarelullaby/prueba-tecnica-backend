export class ScheduleDTO{
    private constructor(
        public name:string,
        public email:string,
        public phone_number:string,
        public id?:string
    ){}

    static create(object:{[key:string | number]:any |unknown}):[string?,ScheduleDTO?]{
        const {name,email,phone_number,id} = object
        if(!name) return ["Name is missing",undefined];
        if(!email) return ["email is missing",undefined];
        if(!phone_number) return ["phone_number is missing",undefined];
        if(!new RegExp(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g).test(phone_number)) return ["Invalid phone number",undefined];
        if(!new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(email)) return ["Invalid email",undefined];

        return [undefined,new ScheduleDTO(name,email,phone_number,id)]
        
    }
}