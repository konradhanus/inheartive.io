import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddSaltColumnToUserTable1681299958900 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const saltColumn = new TableColumn({
      name: 'salt',
      type: 'varchar',
      isNullable: false,
    });

    await queryRunner.addColumn('user', saltColumn);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('user', 'salt');
  }
}
