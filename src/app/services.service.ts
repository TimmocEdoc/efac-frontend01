import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from './components/main/api/baseUrl';

const Url = baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(Url.toString());
  }

  get(id): Observable<any> {
    return this.http.get(`${Url}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(Url.toString(), data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${Url}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${Url}/${id}`);
  }
}
