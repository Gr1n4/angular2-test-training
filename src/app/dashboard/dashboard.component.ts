import {Component} from '@angular/core';

@Component({
  selector: 'dashboard',
  template: require('./dashboard.component.pug')(),
  styles: [require('./dashboard.component.sass')]
})
export class DashboardComponent {

}