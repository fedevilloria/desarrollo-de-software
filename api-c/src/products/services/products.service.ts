import { BadRequestException, forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductInput, Product, UpdateProductInput, } from '../product.types';
import { PRODUCTS_REPOSITORY, ProductsRepository, } from '../repositories/products.repository';
import { PaginatedResult } from 'src/common/types/paginated-result.type';
import { CategoriesService } from 'src/categories/services/categories.service';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCTS_REPOSITORY)
    private readonly productsRepository: ProductsRepository,
    
    @Inject(forwardRef(() => CategoriesService))
    private readonly categoriesService: CategoriesService,
  ) {}

  findAll(name?: string,
    orderBy?: 'price' | 'name',
    order?: 'asc' | 'desc',
    page?: number,
    limit?: number,): PaginatedResult<Product> {
    return this.productsRepository.findAll(name, orderBy, order, page, limit);
  }

  findByCategoryId(categoryId: number): Product[] {
    return this.productsRepository.findByCategoryId(categoryId);
  }

  findOne(id: number): Product {
    const product = this.productsRepository.findById(id);
    if (!product) throw new NotFoundException('Producto no encontrado');
    return product;
  }

  create(input: CreateProductInput): Product {
    try {
      this.categoriesService.findOne(input.categoryId);
    } 
    catch {
      throw new BadRequestException('Categoría no encontrada');
    }
    return this.productsRepository.create(input);
  }

  update(id: number, input: UpdateProductInput): Product {
    if (input.categoryId !== undefined) {
      try {
        this.categoriesService.findOne(input.categoryId);
      } 
      catch {
        throw new BadRequestException('Categoría no encontrada');
      }
    }

    const product = this.productsRepository.update(id, input);
    if (!product) throw new NotFoundException('Producto no encontrado');
    return product;
  }

  reduceStock(id: number, quantity: number): Product {
    const product = this.productsRepository.findById(id);
    if (!product){
      throw new NotFoundException('Producto no encontrado');
    }

    if (quantity > product.stock) {
      throw new BadRequestException('Stock insuficiente.');
    }

    const updatedProduct = this.productsRepository.updateStock(id, quantity);
    if (!updatedProduct) {
      throw new NotFoundException('Producto no encontrado');
    }

    return updatedProduct;
  }

  remove(id: number): Product {
    const product = this.productsRepository.remove(id);
    if (!product) throw new NotFoundException('Producto no encontrado');
    return product;
  }
}

