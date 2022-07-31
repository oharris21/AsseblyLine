import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssemblyLineComponent } from './assemblyline/assemblyline.component';
import { CardComponent } from './card/card.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    AssemblyLineComponent,
    CardComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
