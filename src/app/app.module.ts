import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RacuniComponent } from './racuni/racuni.component';
import { HttpClientModule } from '@angular/common/http';
import { BonusiComponent } from './bonusi/bonusi.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    RacuniComponent,
    BonusiComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
