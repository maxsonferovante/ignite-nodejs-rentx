import { Category } from "../models/categories";


export interface ICreateCategoryDTO {
    name: string;
    description: string;
    created_at?: Date;
}


export interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create(data: ICreateCategoryDTO): void;
}