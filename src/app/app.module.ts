import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment';
import { Routes } from '@angular/router/src/config';
import { RouterModule } from '@angular/router';
import { GamesModule } from 'src/app/games/games.module';
import { GameService } from 'src/app/game.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GamesRoutingModule } from 'src/app/games/games-routing.module';
import { TravelsModule } from 'src/app/travels/travels.module';
import { PageNotFoundComponent } from 'src/app/shared/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    GamesModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    TravelsModule,
    
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
