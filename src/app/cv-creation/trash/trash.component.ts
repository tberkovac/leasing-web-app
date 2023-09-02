import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  trashContent$ = this.cvService.componentsTrash$
  constructor(private cvService: CvService, public dialogRef: MatDialogRef<TrashComponent>) {
    this.trashContent$.subscribe(content => 
      console.log('Trash Content updated' + JSON.stringify(content))
    )
  }
}
