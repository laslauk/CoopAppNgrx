import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap, map} from 'rxjs/operators';
import { GameService } from 'src/app/game.service';
import { Observable } from 'rxjs/internal/Observable';
import { Game } from 'src/app/games/game';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {


  game$: Observable<any>;
  

  gameObj; 
  constructor(private route: ActivatedRoute, private router: Router, private gameService: GameService) { }

  ngOnInit() {
    let id;
    this.route.params.subscribe( params => {
      id = params['id'];
    })

   this.gameObj= this.gameService.getGame(id).subscribe((game: Game) => {this.gameObj = game});
   //this.game$ = this.gameService.getGame(id).subscribe(gam;
   // console.log(this.game$.subscribe((val) => {console.log(val)}));

    }

  }


