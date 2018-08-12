import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { GamesCardListComponent } from './games-card-list/games-card-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameDialogComponent } from './game-dialog/game-dialog.component';
import { GamelistComponent } from './gamelist/gamelist.component';
import { GameCenterComponent } from './game-center/game-center.component';
import { GameService } from 'src/app/game.service';
import { GamesRoutingModule } from 'src/app/games/games-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
  declarations: [GameComponent, GamesCardListComponent, GameDetailComponent, GameDialogComponent, GamelistComponent, GameCenterComponent],
  
  providers: [GameService]

})
export class GamesModule { }
