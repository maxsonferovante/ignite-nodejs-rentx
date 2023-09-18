import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";


export class ListCategoriesController {
    private listCategoriesUseCase: ListCategoriesUseCase

    constructor(listCategoriesUseCase: ListCategoriesUseCase) {
        this.listCategoriesUseCase = listCategoriesUseCase;
    }

    handle(request: Request, response: Response): Response {
        const categories = this.listCategoriesUseCase.handle();
        return response.json(categories);
    }
}

