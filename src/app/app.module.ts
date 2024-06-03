import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HeroesComponent],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
