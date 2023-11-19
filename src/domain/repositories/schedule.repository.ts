import { ScheduleDTO } from "../dtos/schedule.dto";
import { Schedule } from "../entities/schedule";

export interface ScheduleRepository{
    add(scheduleDTO:ScheduleDTO):Promise<Schedule | Schedule[] | string>
    get(id?:string):Promise<Schedule[] | Schedule | string>
    update(scheduleDTO:ScheduleDTO):Promise<Schedule | Schedule[] | string>
    delete(id:string):Promise<Schedule[] | Schedule | string> 
}