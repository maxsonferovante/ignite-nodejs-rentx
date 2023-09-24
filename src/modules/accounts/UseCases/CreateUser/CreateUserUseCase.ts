
import { inject, injectable } from "tsyringe";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUsersRespository";
import { IUserConstructor } from "../../entities/User";
import { AppError } from "../../../../errors/AppError";
import { hash } from "bcrypt";

@injectable()
export class CreateUserUseCase {
    private static saltRounds = 8;
    constructor(
        @inject("PostgresUserRepository")
        private userRepository: PostgresUserRepository
    ) { }
    async execute(data: IUserConstructor): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        if (userAlreadyExists) {
            throw new AppError("User already exists", 400);
        }
        data.password = await hash(data.password, CreateUserUseCase.saltRounds);

        await this.userRepository.create(data);
    }
}