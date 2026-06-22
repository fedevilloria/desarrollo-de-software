import { CreateProductInput, Product, UpdateProductInput, } from '../product.types';
import { PaginatedResult } from '../../common/types/paginated-result.type';

export const PRODUCTS_REPOSITORY = 'PRODUCTS_REPOSITORY';

export interface ProductsRepository {
  findAll(name?: string, orderBy?: 'price' | 'name', order?: 'asc' | 'desc', page?: number, limit?: number): PaginatedResult<Product>;
  findById(id: number): Product | undefined;
  create(input: CreateProductInput): Product;
  update(id: number, input: UpdateProductInput): Product | undefined;
  updateStock(id: number, quantity: number): Product | undefined;
  remove(id: number): Product | undefined;
}

