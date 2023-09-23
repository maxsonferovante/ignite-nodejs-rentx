import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "ignite",
    database: "rentx",
    entities: [],
    migrations: ["./src/database/migrations/*.ts"],
    subscribers: [],
});


export function createConnection(host = "database_ignite"): Promise<DataSource> {
    return AppDataSource.setOptions({
        host,
    }).connect();
}

export default AppDataSource;