import { Router } from "express";
import { ScheduleRoutes } from "./schedule/route";

export class AppRoutes{
    static get routes():Router{
        const router = Router()
        
        router.use('/api/v1/schedule',ScheduleRoutes.routes)
        return router
    }
}