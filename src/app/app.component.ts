import { Component } from '@angular/core';
import '../assets/css/styles.sass';

@Component({
  selector: 'my-app',
  template: require('./app.component.pug')(),
  styles: [require('./app.component.sass')]
})
export class AppComponent { }