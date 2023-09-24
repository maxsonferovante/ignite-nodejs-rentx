import { Router } from "express";
import multer from "multer";
import uploadConfig from "../config/upload";

import { CreateUserController } from "../modules/accounts/UseCases/CreateUser/CreateUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const createUserController = new CreateUserController();

const uploadAvatar = multer(
    uploadConfig.upload("./tmp/avatar")
);

usersRoutes.post("/create",
    ensureAuthenticated,
    createUserController.handle);

usersRoutes.put("/avatar",
    ensureAuthenticated,
    uploadAvatar.single("avatar"),
    createUserController.handle)

export { usersRoutes };