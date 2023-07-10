import { Injectable, Logger } from '@nestjs/common';
import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { CategoriesService } from '../categories.service';

@ValidatorConstraint({ name: 'CategoryExists', async: true })
@Injectable()
export class CategoryExistsRule implements ValidatorConstraintInterface {
  private readonly logger = new Logger(CategoryExistsRule.name);

  constructor(protected readonly categoriesService: CategoriesService) {}

  async validate(id: string) {
    try {
      await this.categoriesService.findOne(id);
    } catch (err) {
      this.logger.error(err);
      return false;
    }

    return true;
  }

  defaultMessage() {
    return `Category doesn't exist`;
  }
}
