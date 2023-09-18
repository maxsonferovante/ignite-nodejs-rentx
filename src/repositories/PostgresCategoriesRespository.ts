import { Category } from "../models/categories";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";


export class PostgresCategoriesRespository implements ICategoriesRepository {
    findByName(name: string): Category {
        throw new Error("Method not implemented.");
    }
    list(): Category[] {
        throw new Error("Method not implemented.");
    }
    create(data: ICreateCategoryDTO): void {
        throw new Error("Method not implemented.");
    }

}