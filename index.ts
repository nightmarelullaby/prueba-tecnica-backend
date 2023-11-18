import { PostgresDatabase } from "./data/postgres/pool"
import { AppRoutes } from "./src/presentation/route"
import { Server } from "./src/presentation/server"

(() => {
    main()
})()

function main(){
    PostgresDatabase.connect({
            user:"postgres",
            host:"localhost",
            password:"12345",
            database:"schedule",
            port:5432
    })
    new Server({
        port:4000,
        routes:AppRoutes.routes
    }).start()
}