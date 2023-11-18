import { ScheduleDatasource } from "../../domain/datasources/schedule.datasource";
import { ScheduleDTO } from "../../domain/dtos/schedule.dto";
import { Schedule } from "../../domain/entities/schedule";
import { ScheduleRepository } from "../../domain/repositories/schedule.repository";

export class ScheduleRepositoryImp implements ScheduleRepository{
    constructor(
        private readonly datasource:ScheduleDatasource
    ){}
    add(scheduleDTO: ScheduleDTO): Promise<string|Schedule> {
        return this.datasource.add(scheduleDTO)
    }
    get(id: number): Promise<string | Schedule[] | Schedule> {
        return this.datasource.get(id)
    }
    update(scheduleDTO: ScheduleDTO): Promise<string | Schedule> {
        return this.datasource.update(scheduleDTO)
    }
    delete(id: number): Promise<Schedule| string> {
        return this.datasource.delete(id)
    }


}