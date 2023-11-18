import { Router } from "express"
import { ScheduleController } from "./controller"
import { ScheduleRepositoryImp } from "../../infrastructure/repositories/schedule.repository.impl"
import { ScheduleDatasourceImp } from "../../infrastructure/datasources/schedule.datasource.imp"

export class ScheduleRoutes{
    static get routes():Router{
        const router = Router()
        
        const database = new ScheduleDatasourceImp()
        const scheduleRepository = new ScheduleRepositoryImp(database)
        const controller = new ScheduleController(scheduleRepository)
        
        router.get('/',controller.getSchedule)
        router.post('/',controller.addSchedule)
        router.delete('/:id',controller.deleteSchedule)
        router.put('/',controller.editSchedule)
        return router
    }
}