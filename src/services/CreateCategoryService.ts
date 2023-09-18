
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';


interface IRequest {
    name: string;
    description: string;
}
export class CreateCategoryService {

    private categoriesRepository: ICategoriesRepository;

    constructor(categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    execute(data: IRequest): void {
        // TODO
        const categoryAlreadyExists = this.categoriesRepository.findByName(data.name);
        if (categoryAlreadyExists) {
            throw new Error('Category already exists!');
        }
        this.categoriesRepository.create(data);
    }
}