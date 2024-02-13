import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { Observable } from 'rxjs';
import { ResponseData } from './response-data';
import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-weather-app';
  results: ResponseData | undefined;
  ifFahrenheit: boolean = true;
  localTime: string = "";

  constructor(public weatherService: WeatherService) {

  }

  toggleIfFahrenheit(): void {
    this.ifFahrenheit = !this.ifFahrenheit;
  }

  getLocationData(city: string) {
    this.weatherService.getlocationData(city).subscribe((result) => {
      this.results = result;

      let localTimeString = this.results.location.localtime.split(' ');
      this.localTime = localTimeString[1];
      console.log(this.results);
    });
  }

  ngOnInit(): void {
    this.getLocationData("Chicago, IL");
  }
}
