import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../models/place.model';
import { LeasingService } from '../services/leasing.service';
import { Weather } from '../models/weather.model';

@Component({
  selector: 'app-leasing-dashboard',
  templateUrl: './leasing-dashboard.component.html',
  styleUrls: ['./leasing-dashboard.component.scss']
})
export class LeasingDashboardComponent implements OnInit {

  placesForLeasing$! : Observable<Place[]>
  weathers$!: Observable<Weather[]>

  constructor(private leasingService: LeasingService) {}
  
  ngOnInit(): void {
    //this.placesForLeasing$ = this.leasingService.getLeasingProperties()
    this.weathers$ = this.leasingService.getWeatherProperties()
  }

  refreshWeatherData() {
    console.log('Refreshed data!')
    this.weathers$ = this.leasingService.getWeatherProperties()
  }
}
