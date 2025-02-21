import {
  CreateProductRepository,
  GetProductRepository,
  ListProductsRepository,
  UpdateProductRepository,
} from '@products/repositories'
import {
  ICreateProductRepository,
  IGetProductRepository,
  IListProductsRepository,
  IUpdateProductRepository,
} from '@products/repositories/contracts'
import { CreateProductUseCase, GetProductUseCase, ListProductsUseCase, UpdateProductUseCase } from '@products/usecases'
import {
  ICreateProductUseCase,
  IGetProductUseCase,
  IListProductsUseCase,
  IUpdateProductUseCase,
} from '@products/usecases/contracts'
import { container } from 'tsyringe'

export class ProductsDependencyInjection {
  static execute() {
    // UseCases
    container.registerSingleton<ICreateProductUseCase>('CreateProductUseCase', CreateProductUseCase)
    container.registerSingleton<IGetProductUseCase>('GetProductUseCase', GetProductUseCase)
    container.registerSingleton<IListProductsUseCase>('ListProductsUseCase', ListProductsUseCase)
    container.registerSingleton<IUpdateProductUseCase>('UpdateProductUseCase', UpdateProductUseCase)

    // Repositories
    container.registerSingleton<ICreateProductRepository>('CreateProductReposistory', CreateProductRepository)
    container.registerSingleton<IGetProductRepository>('GetProductRepository', GetProductRepository)
    container.registerSingleton<IListProductsRepository>('ListProductsRepository', ListProductsRepository)
    container.registerSingleton<IUpdateProductRepository>('UpdateProductRepository', UpdateProductRepository)
  }
}
