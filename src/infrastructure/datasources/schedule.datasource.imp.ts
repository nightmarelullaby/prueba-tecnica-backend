import { Pool,QueryResult } from "pg";
import { PostgresDatabase } from "../../../data/postgres/pool";
import { ScheduleDatasource } from "../../domain/datasources/schedule.datasource";
import { ScheduleDTO } from "../../domain/dtos/schedule.dto";
import { Schedule } from "../../domain/entities/schedule";
type Query = QueryResult<any> | Promise<ScheduleDTO[]> ;

export class ScheduleDatasourceImp implements ScheduleDatasource{
    async update(scheduleDTO: ScheduleDTO): Promise<string | Schedule> {
        if('name' && 'id' in scheduleDTO){
            const response =  await PostgresDatabase.pool.query(`
            update schedule
            set name=$1, email=$2, phone_number=$3
            where id = $4;`,[scheduleDTO.name,scheduleDTO.email,scheduleDTO.phone_number,scheduleDTO.id])   
            return new Promise((res,rej) => {
                return res("success")
            })

        }
        return new Promise((res,rej) => {
            return res("success")
        })
    }
 
    async add(scheduleDTO: ScheduleDTO): Promise<Schedule> {
        if('name' in scheduleDTO){
                const response = await PostgresDatabase.pool.query(`insert into schedule (id,name,email,phone_number) values($1,$2,$3,$4)` , [Math.floor(Math.random() * 100),scheduleDTO.name,scheduleDTO.email,scheduleDTO.phone_number] )
        }
        return new Promise((res,rej) => {
            res(scheduleDTO)
        })
    }

    async get(id: number): Promise<Schedule[] | Schedule> {
        
        if(!id) {
            return PostgresDatabase.pool.query(`select * from schedule;`)
            .then(response => {
                return response.rows
            })
        }

        return PostgresDatabase.pool.query(`select * from schedule where id = ${id};`)
            .then(response => {
                return response.rows
            })
        
        
    }
    async delete(id: number): Promise<Schedule | string>  {
        const response =  await PostgresDatabase.pool.query(`delete from schedule where id = ${id}` )     

        return new Promise((res,rej) => {
            res(new Schedule("a","a","a"))
        })
    }


}