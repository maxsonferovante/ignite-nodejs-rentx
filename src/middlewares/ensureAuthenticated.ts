
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { PostgresUserRepository } from "../modules/accounts/repositories/implementations/PostgresUsersRespository";

import { AppError } from "../errors/AppError";

interface IPayload {
    sub: string;
}
export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({
            errorCode: "token.invalid",
        });
    }

    const [, token] = authToken.split(" ");

    try {
        const { sub: user_id } = verify(token,
            "adb9236f59c11475eb2019b4b224652a") as IPayload;

        const userRepository = new PostgresUserRepository();

        const user = await userRepository.findById(user_id);
        if (!user) {
            throw new AppError("User does not exists!", 401);
        }
        else {
            return next();
        }
    }
    catch (err) {
        return response.status(401).json({ errorCode: "token.expired" });
    }
}
