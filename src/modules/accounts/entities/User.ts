import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";


interface IUserConstructor {
    name: string;
    username: string;
    password: string;
    email: string;
    driver_license: string;
}

@Entity("users")
export class User implements IUserConstructor {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    driver_license: string;

    @Column()
    isAdmin: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor(data: IUserConstructor) {
        Object.assign(this, data);
        if (!this.id) {
            this.id = uuidV4();
        }
    }

}