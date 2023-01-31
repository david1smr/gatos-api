import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
 
import { MatTabsModule } from '@angular/material/tabs';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component'; 
import { GalleryFilterPipe } from './shared/gallery-filter.pipe';
import  {MatProgressBarModule } from '@angular/material/progress-bar';
import { FilterPipe } from './shared/filter.pipe';
import { AddPetModalComponent } from './add-pet-modal/add-pet-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
 
const routes: Routes = [
  { path: '', redirectTo: 'tab1', pathMatch: 'full' },
  { path: 'tab1', component: Tab1Component },
  { path: 'tab2', component: Tab2Component },
  { path: 'tab3', component: Tab3Component }
];

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    GalleryFilterPipe,
    Tab1Component,
    Tab2Component,
    Tab3Component,
    AddPetModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddPetModalComponent]
})
export class AppModule { }
