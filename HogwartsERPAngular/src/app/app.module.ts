import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './errorhelpers/page-not-found/page-not-found.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import {FormsModule} from '@angular/forms';
import { NewstudentComponent } from './newstudent/newstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NavbarComponent,
    PageNotFoundComponent,
    EditstudentComponent,
    NewstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    ButtonsModule,
    PaginationModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
