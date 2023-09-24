import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

import { AppError } from '../../../../errors/AppError';

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
            throw new AppError('Category already exists!', 400);
        }
        this.categoriesRepository.create(data);
    }
}