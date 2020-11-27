import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDto } from 'src/types/model';
import { baseUrl } from './baseUrl';

@Injectable({
    providedIn: 'root'
})
export class ProductApi {
    constructor (
        private httpClient: HttpClient,
        @Inject(baseUrl) protected hostUrl: string,
    ) {
        
    }

    getProducts(): Observable<ProductDto[]> {
        return this.httpClient.get<ProductDto[]>(this.hostUrl + "product/list")
    }

    saveProduct(id, data): Observable<any> {
        return this.httpClient.post(`${this.hostUrl + "product/create"}/${id}`, data, {responseType: 'text'})
    }

    deleteProduct(id): Observable<any> {
        return this.httpClient.delete(`${this.hostUrl + "product/delete"}/${id}`, {responseType: 'text'})
    }

    updateProduct(id, data): Observable<any> {
        return this.httpClient.put(`${this.hostUrl + "product/update"}/${id}`, data, {responseType: 'text'});
    }

    getProduct(id): Observable<ProductDto> {
        return this.httpClient.get<ProductDto>(`${this.hostUrl + "product/details"}/${id}`)
    }
}