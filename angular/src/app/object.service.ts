import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; 
import { BehaviorSubject } from 'Rxjs';
import { Observable } from 'rxjs/Observable';
import { Player } from './player';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Http } from '@angular/http';

@Injectable()
export class Service {
  playerObserver:BehaviorSubject<any> = new BehaviorSubject([]);

  //constructor(private _http: Http) { }
  constructor(private _http: HttpClient) { }

  // retrieveAll() {
  //   this._http.get('api/players').subscribe(
  //     players => this.playerObserver.next(players),
  //     errorResponse => console.log(errorResponse)
  //   );
  // }
  getPlayers(): Observable<Player[]> {
    return this._http.get<Player[]>('api/players');
    // return of(BOOKS);
  }

  deletePlayer(id: number): Observable<Player> {
    console.log('in delete service');
    return this._http.delete<Player>(`api/players/${id}`);
  }
  

  //   retrieveAll():Observable<Note[]>{
  //     console.log('*************trying to retrieve all');
  //   return this._http.get<Note[]>('/notes');
  // }
 
  create(player: Player) : Observable<Player>{
    console.log('Service create ', player);
    return this._http.post<Player>('api/players', player)
  }

    // createBook(book: Book): Observable<Book> {
  //   return this.http.post<Book>(this.base, book);
  // }
  // create(player: Player) {
  //   console.log('Service create ', player);
  //   this._http.post('api/player', player).subscribe(
  //     response => console.log(response),
  //     errorResponse => console.log('error from create service ',errorResponse)
  //   );
  // }


}