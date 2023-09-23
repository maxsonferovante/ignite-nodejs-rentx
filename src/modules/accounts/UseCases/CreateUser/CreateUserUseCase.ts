
import { inject, injectable } from "tsyringe";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUsersRespository";
import { IUserConstructor } from "../../entities/User";


@injectable()
export class CreateUserUseCase {
    constructor(
        @inject("PostgresUserRepository")
        private userRepository: PostgresUserRepository
    ) { }
    async execute(data: IUserConstructor): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        await this.userRepository.create(data);
    }
}