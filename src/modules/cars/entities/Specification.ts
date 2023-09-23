import { v4 as uuid } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";


interface SpecificationConstructor {
    name: string;
    description: string;
    created_at?: Date;
}

@Entity('specifications')
export class Specification implements SpecificationConstructor {
    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at?: Date;

    @PrimaryColumn()
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