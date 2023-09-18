import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


export class ListCategoriesUseCase {

    private categoriesRepository: ICategoriesRepository;
    constructor(categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    handle(): Category[] {
        const categories = this.categoriesRepository.list();
        if (categories.length === 0) {
            throw new Error('No categories found!');
        }
        return categories;
    }
}