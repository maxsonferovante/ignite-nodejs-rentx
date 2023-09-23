import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";
import { container } from "tsyringe";

export class ListCategoriesController {


    async handle(request: Request, response: Response): Promise<Response> {
        const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);
        const categories = await listCategoriesUseCase.execute();
        return response.json(categories);
    }
}

