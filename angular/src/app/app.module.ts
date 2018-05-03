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
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { ReadGameStatusComponent } from './read-game-status/read-game-status.component';
import { UpdateGameStatusComponent } from './update-game-status/update-game-status.component';
import { GameOneComponent } from './game-one/game-one.component';
import { GameTwoComponent } from './game-two/game-two.component';
import { GameThreeComponent } from './game-three/game-three.component'; // <-- Import HttpModule


@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    ManagePlayersComponent,
    ManageStatusComponent,
    ReadGameStatusComponent,
    UpdateGameStatusComponent,
    GameOneComponent,
    GameTwoComponent,
    GameThreeComponent
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
