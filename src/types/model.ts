import { Variable } from '@angular/compiler/src/render3/r3_ast'

export class Category {
    id: number
    name: string
}
export class Table {
    id: number
    name: string
}
export class Product {
    id: string
    name: string
    price: number
    categoryId: number
}
export class Order {

}
export class OrderDetails {

}
export class ProductDto {
    product: Product
    category_name: string
    category_id: number
}
export class CategoryDto {
    category: Category
    products: any[]
}