import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryBody, CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryBody } from './dto/update-category.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryDto } from './dto/category.dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }

  @ApiCreatedResponse({ description: 'The category record has been successfully created.', type: CreateCategoryDto })
  @ApiBadRequestResponse()
  @Post()
  async create(@Body() createCategoryBody: CreateCategoryBody): Promise<CreateCategoryDto> {
    const createdCategory = await this.categoriesService.create(createCategoryBody);
    return CategoriesService.toCreateCategoryDto(createdCategory);
  }

  @ApiResponse({ type: [CategoryDto] })
  @Get()
  async findAll(): Promise<CategoryDto[]> {
    const categories = await this.categoriesService.findAll();
    return categories.map((category) => CategoriesService.toCategoryDto(category));
  }

  @ApiParam({
    name: 'id',
    required: true,
    description: 'should be an id of category that exists in the database',
    type: String
  })
  @ApiResponse({ type: CategoryDto })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CategoryDto> {
     const category = await this.categoriesService.findOne(id);
     return CategoriesService.toCategoryDto(category);
  }

  @ApiParam({
    name: 'id',
    required: true,
    description: 'should be an id of category that exists in the database',
    type: String
  })
  @ApiResponse({ type: CategoryDto })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryBody): Promise<CategoryDto> {
    const category = await this.categoriesService.update(id, updateCategoryDto);
    return CategoriesService.toCategoryDto(category);
  }

  @ApiParam({
    name: 'id',
    required: true,
    description: 'should be an id of category that exists in the database',
    type: String
  })
  @ApiResponse({ type: CategoryDto })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<CategoryDto> {
    const category = await this.categoriesService.remove(id);
    return CategoriesService.toCategoryDto(category);
  }
}
