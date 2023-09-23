
import { inject, injectable } from "tsyringe";

import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
export class CreateSpecificationUseCase {
    constructor(
        @inject('PostgresSpecificationsRepository')
        private specificationsRepository: ISpecificationsRepository
    ) { }
    async execute(data: IRequest): Promise<void> {
        const specificationAlreadyExists = await this.specificationsRepository.findByName(data.name);
        if (specificationAlreadyExists) {
            throw new Error('Specification already exists!');
        }
        await this.specificationsRepository.create(data);
    }
}