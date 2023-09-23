
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';


interface IRequest {
    name: string;
    description: string;
}
export class CreateCategoryUseCase {

    private categoriesRepository: ICategoriesRepository;

    constructor(categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    async execute(data: IRequest): Promise<void> {
        // TODO
        const categoryAlreadyExists = await this.categoriesRepository.findByName(data.name);
        if (categoryAlreadyExists) {
            throw new Error('Category already exists!');
        }
        this.categoriesRepository.create(data);
    }
}