

import { Specification } from "../models/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "./ISpecificationsRepository";


export class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create(data: ICreateSpecificationDTO): void {
        const specification = new Specification(data);
        this.specifications.push(specification);
    }
    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name);
        return specification;
    }
    list(): Specification[] {
        return this.specifications;
    }

}