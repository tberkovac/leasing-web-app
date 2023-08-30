import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../models/place.model';
import { LeasingService } from '../services/leasing.service';
import { Weather } from '../models/weather.model';
import { CdkDragDrop,moveItemInArray,
  transferArrayItem, } from '@angular/cdk/drag-drop';

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
    this.weathers$.subscribe(data => {
      console.log('subsciption' + JSON.stringify(data))
    })
  }

  refreshWeatherData() {
    console.log('Refreshed data!')
    this.weathers$ = this.leasingService.getWeatherProperties()
  }

  dropNewWeatherInList(event: CdkDragDrop<Weather[]>) {
    console.log(event)
    console.log(event.previousContainer.data)
    if (event.previousContainer === event.container) {
       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
       transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
