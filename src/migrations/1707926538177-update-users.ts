import { MigrationInterface } from 'typeorm';
import { User } from 'typeorm-models';

export class UpdateUsers1707926538177 implements MigrationInterface {
  public async up(): Promise<void> {
    await User.update({ firstName: 'Oleg' }, { firstName: 'Oleg updated' });
  }

  public async down(): Promise<void> {
    await User.update({ firstName: 'Oleg updated' }, { firstName: 'Oleg' });
  }
}
