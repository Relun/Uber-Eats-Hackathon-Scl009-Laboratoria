import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageInitialComponent } from './components/page-initial/page-initial.component';


const routes: Routes = [
  {path:"es-CL", component:PageInitialComponent},
  {path:"", component:PageInitialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
