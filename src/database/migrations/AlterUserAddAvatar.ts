import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm"

export class AlterUserAddAvatar implements MigrationInterface {
    name?: string;
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "avatar",
                type: "varchar",
                isNullable: true
            })
        )
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "avatar")

    }
}
