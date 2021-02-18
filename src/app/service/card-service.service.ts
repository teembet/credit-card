import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(private http: HttpClient) { }

url='https://addcard'
  addCard(data) {
    return this.http.post(`${this.url}`, data);
  }

}
