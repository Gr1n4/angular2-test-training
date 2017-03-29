import { Component } from '@angular/core';
import {NgRedux} from 'ng2-redux';

import {IAppState} from '../store';

class Hero {
  constructor(public name: string = '') {}
}

@Component({
  selector: 'hero',
  template: require('./hero.component.pug')(),
  styles: [require('./hero.component.sass')]
})
export class HeroComponent {
  model: Hero = new Hero();
  counter: number = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  increment() {
    this.ngRedux.dispatch({
      type: 'INCREMENT',
      payload: {}
    });
  }
}
