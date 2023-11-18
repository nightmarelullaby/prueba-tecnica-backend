import { Pool,QueryResult } from "pg";
import { PostgresDatabase } from "../../../data/postgres/pool";
import { ScheduleDatasource } from "../../domain/datasources/schedule.datasource";
import { ScheduleDTO } from "../../domain/dtos/schedule.dto";
import { Schedule } from "../../domain/entities/schedule";
import { v4 as uuidv4 } from 'uuid';
type Query = QueryResult<any> | Promise<ScheduleDTO[]> ;

export class ScheduleDatasourceImp implements ScheduleDatasource{
    async update(scheduleDTO: ScheduleDTO): Promise<string | Schedule[] | Schedule> {
        if('name' && 'id' in scheduleDTO){
            return PostgresDatabase.pool.query(`
            update schedule
            set name=$1, email=$2, phone_number=$3
            where id = $4;`,[scheduleDTO.name,scheduleDTO.email,scheduleDTO.phone_number,scheduleDTO.id])
            .then(response => {
                console.log("here1")
                return response.rows
            })
        }
        throw new Error("Bad request")
    }
 
    async add(scheduleDTO: ScheduleDTO): Promise<string  | Schedule[] | Schedule> {
        
        return PostgresDatabase.pool.query(`insert into schedule (id,name,email,phone_number) values($1,$2,$3,$4)` , [uuidv4(),scheduleDTO.name,scheduleDTO.email,scheduleDTO.phone_number] )
        .then(response => {
            return response.rows
        })
        
    }

    async get(id: string): Promise<Schedule[] | Schedule> {
        console.log(id)
        if(!id) {
            return PostgresDatabase.pool.query(`select * from schedule;`)
                .then(response => {
                    console.log(response.rows)
                    return response.rows
                })
        }

        return PostgresDatabase.pool.query(`select * from schedule where id = ${id};`)
            .then(response => {
                return response.rows
            })
        
        
    }
    async delete(id: string): Promise<Schedule | Schedule[] | string>  {
        return PostgresDatabase.pool.query(`delete from schedule where id = ${id}` )     
            .then(response => {
                return response.rows
            })

    }


}