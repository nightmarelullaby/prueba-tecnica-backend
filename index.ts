import { PostgresDatabase } from "./data/postgres/pool"
import { AppRoutes } from "./src/presentation/route"
import { Server } from "./src/presentation/server"
import { PostgresConfig } from "./config";
import 'dotenv/config'; 

(() => {
    main()
})()

function main(){
    //Define database config here

    PostgresDatabase.connect(PostgresConfig)
    new Server({
        port:4000,
        routes:AppRoutes.routes
    }).start()
}