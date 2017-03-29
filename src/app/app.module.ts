import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgRedux, NgReduxModule} from 'ng2-redux';

import {AppRoutesModule} from './app-routes.module';

import {IAppState, rootReducer} from './store';

import {AppComponent} from './app.component';
import {HeroComponent} from './hero/hero.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule,
    NgReduxModule
  ],
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, {counter: 0});
  }
}