import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserLC} from "./entity/UserLC"
import { LC } from "./entity/LC"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "faculdade",
    synchronize: true,
    logging: false,
    entities: [UserLC,LC],
    migrations: [],
    subscribers: [],
})
