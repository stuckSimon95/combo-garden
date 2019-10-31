import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUri: string = 'assets/api/';

  constructor(private http: HttpClient) {}

  getVegetables() {
    return this.http.get<any>(this.baseUri + 'vegetables.json');
  }
}
