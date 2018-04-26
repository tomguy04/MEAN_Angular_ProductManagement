import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [{
    //define rules
    //http://localhost:4200/
    path:'',
    pathMatch:'full',
    component: HomeComponent
  },
   {
    path: 'products',
    //pathMatch: 'full',
    component: ReadComponent,
    children: [{
       path:'new', 
       pathMatch: 'full',
       component : CreateComponent
      }
    ]
  }
  //http://localhost:4200/products/edit/<id>
  // {
  //   path : 'products/edit/:id',
  //   pathMatch: 'full',
  //   component: UpdateComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routing = RouterModule.forRoot(routes);
