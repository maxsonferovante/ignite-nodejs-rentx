import { v4 as uuid } from 'uuid';


interface CategoryConstructor {
    name: string;
    description: string;
    created_at?: Date;
}


export class Category implements CategoryConstructor {
    id?: string;
    name: string;
    description: string;
    created_at: Date;

    constructor(
        data: CategoryConstructor,
    ) {
        Object.assign(this, data);
        if (!this.id) {
            this.id = uuid();
        }

    }
}