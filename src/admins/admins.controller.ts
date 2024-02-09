import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { AdminsService } from './admins.service';
import { Admin } from 'typeorm-models';
import { AdminCreateDto } from './dto/admin.create.dto';
import { AdminUpdateDto } from './dto/admin.update.dto';

@Controller()
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Get('/admins')
  getAll(): Promise<Admin[]> {
    return this.adminsService.findAll();
  }

  @Post('/admins')
  create(
    @Body() createAdminDto: AdminCreateDto,
    @Req() req: any,
  ): Promise<Admin> {
    const admin = req.body as AdminCreateDto;

    return this.adminsService.create(admin);
  }

  @Delete('/admins/:id')
  delete(@Param('id') id: number): Promise<void> {
    return this.adminsService.remove(id);
  }

  @Put('/admins/:id')
  update(
    @Body() updateAdminDto: AdminUpdateDto,
    @Param('id') id: number,
    @Req() req: any,
  ): Promise<void> {
    const update = req.body as AdminUpdateDto;

    return this.adminsService.update(id, update);
  }
}
