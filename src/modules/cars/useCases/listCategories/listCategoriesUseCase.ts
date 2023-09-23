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
        return categories;
    }
}