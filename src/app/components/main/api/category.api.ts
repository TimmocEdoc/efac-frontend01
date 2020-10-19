import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/types/model';
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

    getCategories(): Observable<Category[]> {
        return this.httpClient.get<Category[]>(this.hostUrl + "category/list")
    }

    saveCategory(data): Observable<any> {
        return this.httpClient.post(this.hostUrl + "category/create", data)
    }
}