import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { ReadGameStatusComponent } from './read-game-status/read-game-status.component';
import { UpdateGameStatusComponent } from './update-game-status/update-game-status.component';
import { GameOneComponent }  from './game-one/game-one.component';
import { GameTwoComponent } from './game-two/game-two.component';
import { GameThreeComponent } from './game-three/game-three.component';

const routes: Routes = [
  //define rules
  {
    path:'players',
    component: ManagePlayersComponent,
    children: [
      {
        path:'list',
        component: ReadComponent
      },
      {
        path:'create',
        component: CreateComponent
      }
    ]
  },

  {
    path:'status',
    component: ManageStatusComponent, // this should have the Game 1 with 1 2 and 3 as links.
    children : [
        {
          path:'game',
          component : ReadGameStatusComponent, //just a place holder
          children :[ 
            {
              path : '1',
              component : GameOneComponent
            },
            {
              path : '2',
              component : GameTwoComponent
            },
            {
              path : '3',
              component : GameThreeComponent
            }
         ] 
        }
      ]
  }
  // {
  //   path:'status',
  //   component: ManageStatusComponent,
  //   children : [
  //       {
  //         path:'game',
  //         component : ReadGameStatusComponent,
  //         children :[ 
  //           {
  //             path : '1',
  //             component : GameOneComponent
  //           },
  //           {
  //             path : '2',
  //             component : GameTwoComponent
  //           },
  //           {
  //             path : '3',
  //             component : GameThreeComponent
  //           }
  //        ] 
  //       }
  //     ]
  // }
]


@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// {
//   path: 'products',
//   //pathMatch: 'full',
//   // component: ReadComponent,
//   children: [{
//      path:'new', 
//      pathMatch: 'full',
//      component : CreateComponent
//   },
