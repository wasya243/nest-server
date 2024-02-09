import { MigrationInterface, QueryRunner } from 'typeorm';

export class MigrateAdmins1707472542036 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
            INSERT INTO admin 
                (firstName, lastName, email) 
            VALUES 
                ('Oleg', 'Shevchenko', 'o@gmail.com'),  
                ('Vasyl', 'Kharchenko', 'v@gmail.com'), 
                ('Mike', 'Koval', 'm@gmail.com');
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM admin`);
  }
}
