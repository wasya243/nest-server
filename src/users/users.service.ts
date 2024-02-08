import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'typeorm-models';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  create(user): Promise<User> {
    return this.usersRepository.save(user);
  }

  async update(id: number, updateObject): Promise<void> {
    await this.usersRepository.update({ id }, updateObject);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
