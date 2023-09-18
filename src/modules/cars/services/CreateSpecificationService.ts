import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";
interface IRequest {
    name: string;
    description: string;
}

export class CreateSpecificationService {
    private specificationsRepository: ISpecificationsRepository;

    constructor(specificationsRepository: ISpecificationsRepository) {
        this.specificationsRepository = specificationsRepository;
    }

    execute(data: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(data.name);
        if (specificationAlreadyExists) {
            throw new Error('Specification already exists!');
        }
        this.specificationsRepository.create(data);
    }
}