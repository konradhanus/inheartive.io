import { Injectable, Logger } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { UsersService } from '../users.service';

@ValidatorConstraint({ name: 'UserExists', async: true })
@Injectable()
export class UserExistsRule implements ValidatorConstraintInterface {
  private readonly logger = new Logger(UserExistsRule.name);

  constructor(protected readonly usersService: UsersService) {}

  async validate(id: string) {
    try {
      await this.usersService.findOne(id);
    } catch (err) {
      this.logger.error(err);
      return false;
    }

    return true;
  }

  defaultMessage() {
    return `User doesn't exist`;
  }
}
