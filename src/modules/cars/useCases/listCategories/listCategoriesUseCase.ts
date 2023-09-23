import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListCategoriesUseCase {

    constructor(
        @inject('PostgresCategoriesRespository')
        private categoriesRepository: ICategoriesRepository
    ) {

    }
    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.list();
        if (categories.length === 0) {
            throw new Error('No categories found!');
        }
        return categories;
    }
}