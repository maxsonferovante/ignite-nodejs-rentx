import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/UseCases/authenticateUser/AuthenticateUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const authenticateRouter = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRouter.post("/login",
    ensureAuthenticated,
    authenticateUserController.handle);


export { authenticateRouter };