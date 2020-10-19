import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
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
}