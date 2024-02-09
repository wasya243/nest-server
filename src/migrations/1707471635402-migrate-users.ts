import { MigrationInterface, QueryRunner } from 'typeorm';

export class MigrateUsers1707471635402 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO user (firstName, lastName) VALUES ('Oleg', 'Shevchenko'),  ('Vasyl', 'Kharchenko'), ('Mike', 'Koval');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM user`);
  }
}
