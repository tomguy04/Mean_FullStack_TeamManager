import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';

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
  }
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
