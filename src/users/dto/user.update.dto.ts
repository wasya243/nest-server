import { IsOptional, IsBoolean, IsString } from 'class-validator';

export class UserUpdateDto {
  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
