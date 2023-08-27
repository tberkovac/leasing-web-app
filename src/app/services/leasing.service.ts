import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../models/place.model';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class LeasingService {

  constructor(private client: HttpClient) {}

  getWeatherProperties() : Observable<Weather[]> {
    return this.client.get<Weather[]>('http://localhost:5001/WeatherForecast');
  }

  getLeasingProperties() : Observable<Place[]> {
    return this.client.get<Place[]>('http://localhost:5001/GetWeatherForecast');
  }
}
