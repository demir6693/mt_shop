import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RacuniComponent } from './racuni/racuni.component';
import { BonusiComponent } from './bonusi/bonusi.component';

const routes: Routes = [
  { path: 'racuni', component: RacuniComponent },
  { path: 'bonus', component: BonusiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
