import { inject, injectable } from "tsyringe";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUsersRespository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    },
    token: string;
}

@injectable()
export class AuthenticateUserUseCase {

    constructor(
        @inject("PostgresUserRepository")
        private userRepository: PostgresUserRepository
    ) { }
    async execute(data: IRequest): Promise<IResponse> {
        // Verificar se o usuário existe
        const user = await this.userRepository.findByEmail(data.email);

        if (!user) {
            throw new Error("Email or password incorrect");
        }
        // Verificar se a senha está correta
        const passwordMatch = await compare(data.password, user.password);
        if (!passwordMatch) {
            throw new Error("Email or password incorrect");
        }
        // Gerar token
        const token = sign({}, "adb9236f59c11475eb2019b4b224652a", {
            subject: user.id,
            expiresIn: "1m"
        });

        return {
            user: {
                name: user.name,
                email: user.email
            },
            token: token
        }
    }
}