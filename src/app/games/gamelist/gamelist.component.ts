import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';
import { Game } from 'src/app/games/game';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent implements OnInit {

  constructor(public gameService: GameService) { }

  gameObj;

  selectedGame: Game;
  


  ngOnInit() {
    this.gameService.getGames().subscribe(
      (game: Game) => { this.gameObj = game }
    );
  }

  onGetGames(){
 
  }

}
