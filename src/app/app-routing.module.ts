
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from 'src/app/shared/page-not-found/page-not-found.component';
import { TravelsComponent } from 'src/app/travels/travels/travels.component';

 

const appRoutes: Routes = [
    {path: 'travels', component: TravelsComponent},
    { path: '', redirectTo: '/games', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
  ]

  @NgModule({
      imports: [
          RouterModule.forRoot(appRoutes, {enableTracing: true})
          
      ], 
      exports:[
          RouterModule
      ]
  })
  
  export class AppRoutingModule {}