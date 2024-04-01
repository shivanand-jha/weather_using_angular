import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
const url = 'http://api.openweathermap.org/data/2.5/weather?qid=7279746';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly httpClientService : HttpClient) { 
    
  }
  fetchData(){
    return this.httpClientService.get(`${url}&appid=${environment.apiKey}&units=metric`);
  }
}
