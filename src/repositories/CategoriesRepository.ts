import { Category, } from '../models/categories';
import { v4 as uuid } from 'uuid';



interface ICreateCategoryDTO {
    name: string;
    description: string;
    created_at?: Date;
}

export class CategoriesRepository {
    private categories: Category[] = [];

    constructor() {
        this.categories = [
            {
                id: uuid(),
                name: 'Category 1',
                description: 'Category 1 description',
                created_at: new Date(),
            },
            {
                id: uuid(),
                name: 'Category 2',
                description: 'Category 2 description',
                created_at: new Date(),
            }
        ];
    }

    create(data: ICreateCategoryDTO): void {
        const category = new Category(data);
        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(category => category.name === name);
        return category;
    }
}