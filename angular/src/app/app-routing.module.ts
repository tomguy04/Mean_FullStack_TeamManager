import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  //define rules
  {
    path:'create',
    //children: [{
     // path:'list',
      pathMatch:'full',
      component: CreateComponent
    //}]
  },
  // {
  //   path:'',
  //   pathMatch:'full',
  //   component: ReadComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
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
