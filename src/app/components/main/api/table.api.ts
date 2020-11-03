import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Table } from 'src/types/model';
import { baseUrl } from './baseUrl';


@Injectable({
    providedIn: 'root'
})
export class TableApi {
    constructor (
        private httpClient: HttpClient,
        @Inject(baseUrl) protected hostUrl: string,
    ) {
        
    }

    getTables(): Observable<Table[]> {
        return this.httpClient.get<Table[]>(this.hostUrl + "table/list")
    }

    saveTable(data): Observable<any> {
        return this.httpClient.post(this.hostUrl + "table/create", data, {responseType: 'text'})
    }

    deleteTable(id): Observable<any> {
        return this.httpClient.delete(`${this.hostUrl + "table/delete"}/${id}`, {responseType: 'text'})
    }

    updateTable(id, data): Observable<any> {
        return this.httpClient.put(`${this.hostUrl + "table/update"}/${id}`, data, {responseType: 'text'});
    }

    getTable(id): Observable<Table> {
        return this.httpClient.get<Table>(`${this.hostUrl + "table/details"}/${id}`)
    }
}