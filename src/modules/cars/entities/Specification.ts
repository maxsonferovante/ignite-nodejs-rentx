import { v4 as uuid } from 'uuid';
interface SpecificationConstructor {
    name: string;
    description: string;
    created_at?: Date;
}

export class Specification implements SpecificationConstructor {
    name: string;
    description: string;
    created_at?: Date;
    id?: string;

    constructor(data: SpecificationConstructor) {
        Object.assign(this,
            {
                ...data,
                created_at: new Date(),
            });
        if (!this.id) {
            this.id = uuid();
        }
    }

}