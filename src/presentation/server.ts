import express, { Router, urlencoded } from 'express';
import { AppRoutes } from './route';
import cors from 'cors'

interface Options {
    port:number,
    routes:Router
}
export class Server{
    private readonly app = express()
    private readonly port
    public readonly routes

    constructor(options:Options){
        const {port,routes} = options
        this.port = port
        this.routes = routes
    }

    start(){
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(urlencoded({extended:true}))
        this.app.use(this.routes)
        this.app.listen(this.port,() => {
            console.log("Server running")
        })
    }
}