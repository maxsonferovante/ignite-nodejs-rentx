import { MigrationInterface, QueryRunner, Table } from "typeorm"

import { Category } from "../../modules/cars/entities/Category";

export class CreateCategories1695478850114 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'categories',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',


                        isPrimary: true,


                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ]
            }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('categories');
    }

}

// npm run  typeorm migration:create -n src/database/migration/CreateCategoriesn