import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppRoutesModule} from './app-routes.module';

import {AppComponent} from './app.component';
import {HeroComponent} from './hero/hero.component';
import {HeroDetailComponent} from './hero/hero-detail/hero-detail.component';
import {HeroItemComponent} from './hero/hero-item/hero-item.component';
import {HeroListComponent} from './hero/hero-list/hero-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule,
  ],
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    HeroItemComponent,
    HeroListComponent,
    DashboardComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}