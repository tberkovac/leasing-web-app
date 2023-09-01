import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { AppComponent } from './app.component';
import { LeasingDashboardComponent } from './leasing-dashboard/leasing-dashboard.component';
import { CvCreationComponent } from './cv-creation/cv-creation-component/cv-creation.component';
import { FormsModule } from '@angular/forms';
import { FocusDirective } from './directives/focus.directive';
import { ListCvComponentsComponent } from './cv-creation/list-cv-components/list-cv-components.component';
import { CvPaperComponent } from './cv-creation/cv-paper/cv-paper.component';
import { CreationHomeComponent } from './cv-creation/creation-home/creation-home.component';

@NgModule({
  declarations: [
    FocusDirective,
    AppComponent,
    LeasingDashboardComponent,
    CvCreationComponent,
    ListCvComponentsComponent,
    CvPaperComponent,
    CreationHomeComponent
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
