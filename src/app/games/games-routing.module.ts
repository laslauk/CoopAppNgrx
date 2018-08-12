
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { GameDetailComponent } from 'src/app/games/game-detail/game-detail.component';
import { GameCenterComponent } from 'src/app/games/game-center/game-center.component';
import { GamelistComponent } from 'src/app/games/gamelist/gamelist.component';

 

const gamesRoutes: Routes = [
    {path: 'game/:id', component: GameDetailComponent},
    {path: 'game-center', component:GameCenterComponent},
    {
      path: 'games', component: GamelistComponent, data: {title: "Game List"}
    },
  ]

  @NgModule({
      imports: [
          RouterModule.forChild(gamesRoutes)
      ], 
      exports:[
          RouterModule
      ]
  })
  
  export class GamesRoutingModule {}