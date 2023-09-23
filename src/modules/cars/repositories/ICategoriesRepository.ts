import { Category } from "../entities/Category";


export interface ICreateCategoryDTO {
    name: string;
    description: string;
    created_at?: Date;
}


export interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create(data: ICreateCategoryDTO): Promise<void>;
}