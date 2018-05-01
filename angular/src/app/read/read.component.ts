import { Component, OnInit } from '@angular/core';
import { Service } from '../object.service';
import { Player } from '../player';
import { DatePipe } from '@angular/common';
//import { OrderByDatePipe } from '../pipes/order-by-date.pipe';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
  //providers: [OrderByDatePipe] 
})
export class ReadComponent implements OnInit {
  players: Player[]=[];

  constructor(private _Service: Service) { }

  ngOnInit() {
    console.log('in read')
    this._Service.playerObserver.subscribe(
      players => {
        this.players = players,
        console.log('the notes in read comp ', this.players)
      }
    );
    //this._Service.retrieveAll();
  }

}



