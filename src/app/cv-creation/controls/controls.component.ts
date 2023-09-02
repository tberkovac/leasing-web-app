import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

  constructor(public dialog: MatDialog) {}

  openTrash(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialog.open(TrashComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });  
  }
}
