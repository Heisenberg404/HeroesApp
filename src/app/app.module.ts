import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HeroesService} from './services/heroes.service';
import {UsersService} from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HeroesService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
