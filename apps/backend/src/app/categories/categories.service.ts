import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoriesRepository: Repository<Category>
  ) {}

  create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoriesRepository.create(createCategoryDto);

    return this.categoriesRepository.save(category);
  }

  findAll() {
    return this.categoriesRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  findOne(id: string) {
    return this.categoriesRepository.findOneOrFail({ where: { id } });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoriesRepository.preload({
      id,
      ...updateCategoryDto,
    });

    if (!category) {
      throw new EntityNotFoundError(Category, { id });
    }

    return this.categoriesRepository.save(category);
  }

  remove(id: string) {
    return this.categoriesRepository.findOneOrFail({ where: { id } });
  }
}
