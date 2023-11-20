export const PostgresConfig = {
    user:String(process.env.DB_USERNAME),
    host:"localhost",
    password:String(process.env.DB_PASSWORD),
    database:String(process.env.DB),
    port:Number(process.env.DB_PORT)
}