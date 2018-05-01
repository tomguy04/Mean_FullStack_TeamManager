import { Component, OnInit } from '@angular/core';
import { Service } from '../object.service';
import { Player } from '../player';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  player: Player = new Player();
  constructor(private _Service: Service) { }

  ngOnInit() {
  }
  
  onSubmit(formData:NgForm){
    event.preventDefault();
    const {value, valid} = formData;
    console.log('create component', this.player);
    this._Service.create(this.player);
    this.player = new Player();
    formData.reset();
  }



}
