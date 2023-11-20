import { Request,Response } from "express";
import { ScheduleDTO } from "../../domain/dtos/schedule.dto";
import { ScheduleRepository } from "../../domain/repositories/schedule.repository";
import { idDTO } from "../../domain/dtos/id.dto";
import { Schedule } from "../../domain/entities/schedule";

export class ScheduleController{
    constructor(
        private readonly scheduleRepository:ScheduleRepository
    ){}
    getSchedule = (req:Request,res:Response) => {
        const [error,id] = idDTO.create(false,req.query.q,)
        if(error) return res.status(400).json("Bad request")
        return this.scheduleRepository.get(id)
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
        const [error,scheduleDTO] = ScheduleDTO.create(req.body)
        if(error) return res.status(400).json("Bad request")
        return this.scheduleRepository.update(scheduleDTO as ScheduleDTO)
        .then(response => {
            res.json(response)
            console.log(response)
            return res.end()
        })
    }
    deleteSchedule = (req:Request,res:Response) =>{
        const [error,id] = idDTO.create(true,req.params.id)
        console.log(error)
        if(!id) return res.status(400).json("Bad request")
        return this.scheduleRepository.delete(id)
            .then(response => {
            res.json(response)
            return res.end()
        })  
    }
}