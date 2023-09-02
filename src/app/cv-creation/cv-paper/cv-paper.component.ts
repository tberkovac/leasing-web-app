import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ComponentCard } from 'src/app/models/componentCard.model';
import { InnerCardComponent } from 'src/app/models/innerCardComponent.model';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv-paper',
  templateUrl: './cv-paper.component.html',
  styleUrls: ['./cv-paper.component.scss']
})
export class CvPaperComponent {

  paperComponents: InnerCardComponent[][] = []

  constructor(private cvService: CvService) {}

  dropNewComponentInList(event: CdkDragDrop<any, any, any>) {
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

  removeComponentFromPage(component: InnerCardComponent[], index: number) {
    const updatedArray = [...(this.cvService.componentsTrash$.value || [])];
    updatedArray.push(component);
    this.cvService.componentsTrash$.next(updatedArray)
  }
}
