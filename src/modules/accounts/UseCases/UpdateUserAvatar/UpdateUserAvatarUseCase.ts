import { inject, injectable } from "tsyringe";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUsersRespository";

import { deleteFile } from "../../../../utils/file"

interface IRequest {
    user_id: string;
    avatar_file: string;
}

@injectable()
export class UpdateUserAvatarUseCase {
    constructor(
        @inject("PostgresUserRepository")
        private userRepository: PostgresUserRepository
    ) { }
    async execute(data: IRequest): Promise<void> {
        const user = await this.userRepository.findById(data.user_id);
        if (user.avatar) {
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }
        user.avatar = data.avatar_file;
        await this.userRepository.create(user);

    }
}