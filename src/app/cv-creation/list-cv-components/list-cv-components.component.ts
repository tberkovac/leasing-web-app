import { Component } from '@angular/core';
import { ComponentCard } from 'src/app/models/componentCard.model';
import { InnerCardComponent } from 'src/app/models/innerCardComponent.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-list-cv-components',
  templateUrl: './list-cv-components.component.html',
  styleUrls: ['./list-cv-components.component.scss']
})
export class ListCvComponentsComponent {
  cvComponents$ = this.cvService.cvComponents$

  constructor(private cvService: CvService) {}
}
