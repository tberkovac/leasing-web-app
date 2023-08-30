import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { AppComponent } from './app.component';
import { LeasingDashboardComponent } from './leasing-dashboard/leasing-dashboard.component';
import { CvCreationComponent } from './cv-creation/cv-creation.component';
import { FormsModule } from '@angular/forms';
import { FocusDirective } from './directives/focus.directive';

@NgModule({
  declarations: [
    FocusDirective,
    AppComponent,
    LeasingDashboardComponent,
    CvCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
