import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Place } from '../models/place.model';
import { Weather } from '../models/weather.model';
import { InnerCardComponent } from '../models/innerCardComponent.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
    initialData: InnerCardComponent[][] = [[{value: 'good'}, {value: 'great'}],
    [{value: 'good2'}, {value: 'great2'}],
    [{value: 'good3'}, {value: 'great3'}],
    [{value: 'good'}, {value: 'great'}],
    [{value: 'good2'}, {value: 'great2'}],
    [{value: 'good3'}, {value: 'great3'}]];

    cvComponents$: BehaviorSubject<InnerCardComponent[][]> = 
        new BehaviorSubject<InnerCardComponent[][]>(this.initialData)

    componentsTrash$ = new BehaviorSubject<InnerCardComponent[][] | null>(this.initialData)
}
