import { User } from "../entities/User";
import { IUserConstructor } from "../entities/User";

export interface IUserRepository {
    create(data: IUserConstructor): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    findByUsername(username: string): Promise<User>;
    list(): Promise<User[]>;
}