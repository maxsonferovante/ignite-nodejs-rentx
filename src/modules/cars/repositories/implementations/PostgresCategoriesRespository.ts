import { Repository, } from "typeorm";
import AppDataSource from "../../../../database";

import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

export class PostgresCategoriesRespository implements ICategoriesRepository {

    private repository: Repository<Category>;

    // private static INSTANCE: PostgresCategoriesRespository;

    constructor() {
        this.repository = AppDataSource.getRepository(Category);
    }

    // public static getInstance(): PostgresCategoriesRespository {
    //     if (!PostgresCategoriesRespository.INSTANCE) {
    //         PostgresCategoriesRespository.INSTANCE = new PostgresCategoriesRespository();
    //     }
    //     return PostgresCategoriesRespository.INSTANCE;
    // }


    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOneBy(
            {
                name
            }
        )
        return category;
    }
    async list(): Promise<Category[]> {
        const categories = await this.repository.find();

        return categories;
    }

    async create(data: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create(
            {
                name: data.name,
                description: data.description,
            }
        );
        await this.repository.save(category);
    }

}