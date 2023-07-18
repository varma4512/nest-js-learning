import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UsersService } from './users.service';

@Controller('users') // this will be your endpoint
export class UsersController {
  constructor(private readonly uService: UsersService) {}
  //constructor to use service
  @Get()
  getUsers(@Query('page') page: number, @Query('search') search: string) {
    return this.uService.getUsers('');
  }

  @Get(':id')
  getOneUser(@Param('id') uid: number) {
    return this.uService.getOneUser(uid);
  }

  @Post()
  createUser(@Body() CreateUsersDto: CreateUsersDto) {
    return {
      name: CreateUsersDto.name,
    };
  }
}
