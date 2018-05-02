import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

import { Service } from './object.service'
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageStatusComponent } from './manage-status/manage-status.component'; // <-- Import HttpModule


@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    ManagePlayersComponent,
    ManageStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
