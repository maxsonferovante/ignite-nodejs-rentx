import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';


interface IRequest {
    name: string;
    description: string;
}
@injectable()
export class CreateCategoryUseCase {

    constructor(
        @inject('PostgresCategoriesRespository')
        private categoriesRepository: ICategoriesRepository
    ) { }

    async execute(data: IRequest): Promise<void> {
        // TODO
        const categoryAlreadyExists = await this.categoriesRepository.findByName(data.name);
        if (categoryAlreadyExists) {
            throw new Error('Category already exists!');
        }
        this.categoriesRepository.create(data);
    }
}