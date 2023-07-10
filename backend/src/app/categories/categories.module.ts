import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Auction } from '../auctions/entities/auction.entity';
import { CategoryExistsRule } from './validators/category-exists';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Auction])],
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoryExistsRule],
})
export class CategoriesModule {}
