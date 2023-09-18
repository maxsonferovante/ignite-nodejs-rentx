
interface IRequest {
    name: string;
    description: string;
}

export class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) { }

    execute(data: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new Error('Specification already exists!');
        }
        this.specificationsRepository.create(data);
    }
}