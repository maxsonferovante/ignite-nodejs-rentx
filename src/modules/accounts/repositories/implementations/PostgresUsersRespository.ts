import { Repository } from "typeorm";
import { getRepository } from "typeorm";

import { IUserConstructor, User } from "../../entities/User";
import { IUserRepository } from "../IUsersRepository";



export class PostgresUserRepository implements IUserRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    async create(data: IUserConstructor): Promise<void> {
        const user = this.repository.create(
            {
                name: data.name,

                password: data.password,
                email: data.email,
                driver_license: data.driver_license
            }
        );
        await this.repository.save(user);
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({
            email
        });
        return user;
    }
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({
            id
        });
        return user;
    }

    async list(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }
}