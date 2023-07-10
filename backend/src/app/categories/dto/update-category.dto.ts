import { PartialType } from '@nestjs/swagger';
import { CreateCategoryBody } from './create-category.dto';

export class UpdateCategoryBody extends PartialType(CreateCategoryBody) {}
