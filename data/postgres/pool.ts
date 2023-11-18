import {Pool,PoolConfig} from "pg";

interface Options {
    user:string,
    host:string,
    password:string,
    database:string,
    port:number
}
export class PostgresDatabase{
    static pool:Pool

    static connect(options:Options):Pool{
        const {user,host,password,database,port} = options
        try{
            const pool = new Pool({
                user:user,
                host:host,
                password:password,
                database:database,
                port:port
            })
            console.log("Postgres running")
            this.pool = pool
            return pool
        }catch(error){
            console.log("Postgres doesn't started correctly")
            throw error
        }
        
        
    }

}



