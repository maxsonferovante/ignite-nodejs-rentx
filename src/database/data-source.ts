import { DataSource } from "typeorm";
import { Category } from "../modules/cars/entities/Category";
import { Specification } from "../modules/cars/entities/Specification";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    entities: ["./src/modules/**/entitiens/*.ts"],
    migrations: ["./src/database/migrations/*.ts"],

});


export function createConnection(host = "database_ignite"): Promise<DataSource> {
    return AppDataSource.setOptions({
        host,
    }).connect();
}

export default AppDataSource;