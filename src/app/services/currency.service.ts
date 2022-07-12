import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getNumbers(): Observable<any> {
    return this.http.get<any>('https://api.nbp.pl/api/exchangerates/tables/A/?format=json');
  }

  getByDate(date: string): Observable<any> {
    return this.http.get<any>('https://api.nbp.pl/api/exchangerates/tables/A/' + date + '/?format=json');
  }
}
