import { Category } from '../models/Category';
import { v4 as uuid } from 'uuid';
import { ICategoriesRepository, ICreateCategoryDTO } from '../repositories/ICategoriesRepository';



export class CategoriesRepository implements ICategoriesRepository {
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