import { Request,Response } from "express";
import { ScheduleDTO } from "../../domain/dtos/schedule.dto";
import { ScheduleRepository } from "../../domain/repositories/schedule.repository";
import { idDTO } from "../../domain/dtos/id.dto";

export class ScheduleController{
    constructor(
        private readonly scheduleRepository:ScheduleRepository
    ){}
    getSchedule = (req:Request,res:Response) => {
        return this.scheduleRepository.get(Number(req.query.q))
            .then(response => {
                res.json(response)
                res.end()
            })        
        
    }
    addSchedule = (req:Request,res:Response) =>{
        const [error,scheduleDTO] = ScheduleDTO.create(req.body)
        if(error) return res.status(400).json("Bad request")
        if(scheduleDTO){
            this.scheduleRepository.add(scheduleDTO)
        }
        return res.json(scheduleDTO)
    }
    editSchedule = (req:Request,res:Response) =>{
        const body = req.body
        this.scheduleRepository.update(body)
    }
    deleteSchedule = (req:Request,res:Response) =>{
        const id = parseInt(req.params.id)
        this.scheduleRepository.delete(id)
    }

}