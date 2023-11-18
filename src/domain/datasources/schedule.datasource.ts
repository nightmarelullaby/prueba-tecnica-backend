import { ScheduleDTO } from "../dtos/schedule.dto";
import { Schedule } from "../entities/schedule";

export interface ScheduleDatasource {
    add(scheduleDTO:ScheduleDTO):Promise<Schedule | string>
    get(id:number):Promise<Schedule[] | Schedule | string>
    update(scheduleDTO:ScheduleDTO):Promise<Schedule | string>
    delete(id:number):Promise<Schedule | string> 
}