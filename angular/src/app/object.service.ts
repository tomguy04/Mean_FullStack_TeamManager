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

  retrieveAll() {
    this._http.get('/notes').subscribe(
      notes => this.playerObserver.next(notes),
      errorResponse => console.log(errorResponse)
    );
  }

  //   retrieveAll():Observable<Note[]>{
  //     console.log('*************trying to retrieve all');
  //   return this._http.get<Note[]>('/notes');
  // }
 

  create(note: Player) {
    console.log('Service create ', note);
    this._http.post('/notes', note).subscribe(
      //response => this.retrieveAll(),
      response => console.log(response),
      errorResponse => console.log(errorResponse)
    );
  }

}

  // retrieveAll():Observable<Note[]>{
  //   return this._http.get<Note[]>('/notes');
  // }

// getBooks():Observable <Book[]>{ //return Book typed array 
//   //retrieve api data
//   return this._http.get<Book[]>(this.base);
//   //return this._http.get(this.base).map(response => response.)
//   //return of(BOOKS); //its observable type now! //not an api call :(
//   //return BOOKS; nope, not observalbe
// }

// createBook(book: Book) : Observable <Book>{
//   return this._http.post<Book>(this.base, book);
// }