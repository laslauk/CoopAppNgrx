import { Injectable } from '@angular/core';
import { Game } from './games/game';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

getGames()
 {
   return this.http.get<Game>('http://localhost:8000/api/games');
 }

 getGame(id: string){

  const url = `http://localhost:8000/api/game/${id}`;

   return this.http.get<Game>(url);

 }

}

