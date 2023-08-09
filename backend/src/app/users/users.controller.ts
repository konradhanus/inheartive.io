import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserBody } from './dto/create-user.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @ApiCreatedResponse({ description: 'The user record has been successfully created.', type: UserDto })
  @ApiBadRequestResponse()
  @Post()
  async create(@Body() createUserDto: CreateUserBody): Promise<UserDto> {
    const user = await this.usersService.create(createUserDto);
    return UsersService.toUserDto(user);
  }

  @ApiResponse({ type: [UserDto] })
  @Get()
  async findAll(): Promise<UserDto[]> {
    const users = await this.usersService.findAll();
    return users.map((user) => UsersService.toUserDto(user));
  }

  @ApiParam({
    name: 'id',
    required: true,
    description: 'should be an id of user that exists in the database',
    type: String
  })
  @ApiResponse({ type: UserDto })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDto> {
    const user = await this.usersService.findOne(id);
    return UsersService.toUserDto(user);
  }
}
