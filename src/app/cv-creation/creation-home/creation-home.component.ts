import { Component } from '@angular/core';
import { TrashComponent } from '../trash/trash.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-creation-home',
  templateUrl: './creation-home.component.html',
  styleUrls: ['./creation-home.component.scss']
})
export class CreationHomeComponent {

  constructor(public dialog: MatDialog) {}

  openTrash(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialog.open(TrashComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });  
  }
}
