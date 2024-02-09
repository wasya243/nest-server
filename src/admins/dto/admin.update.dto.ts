import { IsOptional, IsString } from 'class-validator';

export class AdminUpdateDto {
  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  email?: boolean;
}
