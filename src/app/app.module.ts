import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RacuniComponent } from './racuni/racuni.component';
import { HttpClientModule } from '@angular/common/http';
import { BonusiComponent } from './bonusi/bonusi.component';

@NgModule({
  declarations: [
    AppComponent,
    RacuniComponent,
    BonusiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
