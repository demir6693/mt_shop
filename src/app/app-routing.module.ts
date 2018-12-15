import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RacuniComponent } from './racuni/racuni.component';
import { BonusiComponent } from './bonusi/bonusi.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'racuni', component: RacuniComponent },
  { path: 'bonus', component: BonusiComponent },
  { path: 'home', component: HomeComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
