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
import { UsersService } from './users.service';
import { User } from 'typeorm-models';
import { UserCreateDto } from './dto/user.create.dto';
import { UserUpdateDto } from './dto/user.update.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/users')
  getAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post('/users')
  create(@Body() createUserDto: UserCreateDto, @Req() req: any): Promise<User> {
    const user = req.body as UserCreateDto;

    return this.usersService.create(user);
  }

  @Delete('/users/:id')
  delete(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }

  @Put('/users/:id')
  update(
    @Body() updateUserDto: UserUpdateDto,
    @Param('id') id: number,
    @Req() req: any,
  ): Promise<void> {
    const update = req.body as UserCreateDto;

    return this.usersService.update(id, update);
  }
}
