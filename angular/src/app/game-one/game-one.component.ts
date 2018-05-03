import { Component, OnInit } from '@angular/core';
import { Service } from '../object.service';
import { Player } from '../player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css']
})
export class GameOneComponent implements OnInit {
  players: Player[]=[];
  constructor(
    private _Service: Service,
    private _router: Router
    ) { }

  ngOnInit() {
    console.log('in game-one')
    this._Service.getPlayers().subscribe(
      players => {
        this.players = players,
        console.log('the players in read comp ', this.players)
      }
    );
  }

  game1(id:string){
    console.log(id);
    this._Service.editPlayer(id);
  }

}
