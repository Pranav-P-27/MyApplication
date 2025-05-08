import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CusdetailslistComponent } from './cusdetailslist/cusdetailslist.component'
import {NgxDatatableModule} from '@swimlane/ngx-datatable'
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CusdetaileditComponent } from './cusdetailedit/cusdetailedit.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CusdetailslistComponent,
    CusdetaileditComponent

  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    TableModule,
    DialogModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
