import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

export class UpdateUserAvatarController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const avatar_file = request.file.filename;
        // receber arquiv
        const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);
        await updateUserAvatarUseCase.execute({
            user_id: id,
            avatar_file: avatar_file as string,
        });

        return response.status(204).send();
    }

}