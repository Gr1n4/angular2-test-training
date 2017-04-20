import { Component } from '@angular/core';
import {NgRedux, select} from 'ng2-redux';

import {IAppState} from '../store';
import {Observable} from "rxjs/Observable";

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
  @select() counter$: Observable<number>;

  constructor(private ngRedux: NgRedux<IAppState>) {
    console.log('counter', this.counter$);
  }

  increment() {
    this.ngRedux.dispatch({
      type: 'INCREMENT',
      payload: {}
    });
  }
}
