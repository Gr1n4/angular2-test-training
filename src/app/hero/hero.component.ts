import { Component } from '@angular/core';

// import {Observable} from "rxjs/Observable";

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

  constructor() {
  }

  increment() {
  }
}
