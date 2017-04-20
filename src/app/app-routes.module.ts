import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroComponent} from './hero/hero.component';
import {HeroDetailComponent} from './hero/hero-detail/hero-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
