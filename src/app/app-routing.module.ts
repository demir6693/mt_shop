import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RacuniComponent } from './racuni/racuni.component';

const routes: Routes = [
  { path: 'racuni', component: RacuniComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
