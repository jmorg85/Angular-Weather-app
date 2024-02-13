import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseData } from './response-data';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  baseUrl: string = ' http://api.weatherapi.com/v1'

  constructor(private client: HttpClient) { }

  ngOnInit(): void {
      
  }

  getlocationData(city: string): Observable<ResponseData> {
    var response = this.client.get<ResponseData>(`${this.baseUrl}/current.json?key=d6375d3f13f04b249a6180804240602&q=${city}`);

    return response;
  }
}
