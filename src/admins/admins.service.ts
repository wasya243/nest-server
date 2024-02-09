import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from 'typeorm-models';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private adminsRepository: Repository<Admin>,
  ) {}

  findAll(): Promise<Admin[]> {
    return this.adminsRepository.find();
  }

  findOne(id: number): Promise<Admin | null> {
    return this.adminsRepository.findOneBy({ id });
  }

  create(admin): Promise<Admin> {
    return this.adminsRepository.save(admin);
  }

  async update(id: number, updateObject): Promise<void> {
    await this.adminsRepository.update({ id }, updateObject);
  }

  async remove(id: number): Promise<void> {
    await this.adminsRepository.delete(id);
  }
}
