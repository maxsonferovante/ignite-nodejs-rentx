import { v4 as uuid } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

interface CategoryConstructor {
    name: string;
    description: string;
    created_at?: Date;
}

@Entity('categories')
export class Category implements CategoryConstructor {

    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(
        data: CategoryConstructor,
    ) {
        Object.assign(this,
            {
                ...data
            });
        if (!this.id) {
            this.id = uuid();
        }

    }
}