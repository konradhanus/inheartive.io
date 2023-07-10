import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateCategoryBody, CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryBody } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>
  ) {}

  create(createCategoryDto: CreateCategoryBody): Promise<Category> {
    const category = this.categoriesRepository.create(createCategoryDto);

    return this.categoriesRepository.save(category);
  }

  findAll(): Promise<Category[]> {
    return this.categoriesRepository.find({
      order: {
        name: 'ASC',
      },
    });
  }

  findOne(id: string): Promise<Category> {
    return this.categoriesRepository.findOneOrFail({ where: { id } });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryBody): Promise<Category> {
    const category = await this.categoriesRepository.preload({
      id,
      ...updateCategoryDto,
    });

    if (!category) {
      throw new EntityNotFoundError(Category, { id });
    }

    return this.categoriesRepository.save(category);
  }

  remove(id: string): Promise<Category> {
    return this.categoriesRepository.findOneOrFail({ where: { id } });
  }

  static toCategoryDto(category: Category): CategoryDto {
    return {
      id: category.id,
      name: category.name,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    };
  }

  static toCreateCategoryDto(category: Category): CreateCategoryDto {
    return {
      id: category.id,
      name: category.name,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
    }
  }
}
