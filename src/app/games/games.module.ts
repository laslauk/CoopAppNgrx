import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { GamesCardListComponent } from './games-card-list/games-card-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameDialogComponent } from './game-dialog/game-dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GameComponent, GamesCardListComponent, GameDetailComponent, GameDialogComponent]
})
export class GamesModule { }
