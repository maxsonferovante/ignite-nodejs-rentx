import { Repository } from "typeorm";
import { IUserConstructor, User } from "../../entities/User";
import { IUserRepository } from "../IUsersRepository";
import AppDataSource from "../../../../database/data-source";

export class PostgresUserRepository implements IUserRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }
    async create(data: IUserConstructor): Promise<void> {
        const user = this.repository.create(
            {
                name: data.name,
                username: data.username,
                password: data.password,
                email: data.email,
                driver_license: data.driver_license
            }
        );
        await this.repository.save(user);
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({
            where: { email }
        });
        return user;
    }
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({
            where: { id }
        });
        return user;
    }

    async findByUsername(username: string): Promise<User> {
        const user = await this.repository.findOne({
            where: { username }
        });
        return user;
    }
    async list(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }
}