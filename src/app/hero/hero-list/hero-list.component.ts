import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Hero} from '../hero.component';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.sass']
})
export class HeroListComponent {
  @Input() heroes: Array<Hero>;
}
