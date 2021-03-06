import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { $ } from 'protractor';
import { Observable } from 'rxjs';
import { Category, CategoryDto } from 'src/types/model';
import { baseUrl } from './baseUrl';


@Injectable({
    providedIn: 'root'
})
export class CategoryApi {
    constructor (
        private httpClient: HttpClient,
        @Inject(baseUrl) protected hostUrl: string,
    ) {
        
    }

    getCategories(): Observable<CategoryDto[]> {
        return this.httpClient.get<CategoryDto[]>(this.hostUrl + "category/list")
    }

    saveCategory(data): Observable<any> {
        return this.httpClient.post(this.hostUrl + "category/create", data, {responseType: 'text'})
    }

    deleteCategory(id): Observable<any> {
        return this.httpClient.delete(`${this.hostUrl + "category/delete"}/${id}`, {responseType: 'text'})
    }

    updateCategory(id, data): Observable<any> {
        return this.httpClient.put(`${this.hostUrl + "category/update"}/${id}`, data, {responseType: 'text'});
    }

    getCategory(id): Observable<CategoryDto> {
        return this.httpClient.get<CategoryDto>(`${this.hostUrl + "category/details"}/${id}`)
    }
}