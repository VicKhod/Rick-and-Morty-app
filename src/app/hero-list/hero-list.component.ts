import { Component } from '@angular/core';
import { Hero } from '../hero/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent {
  heroes: Hero[] = [
    new Hero(1, "Rick Sanches", "live"),
  ];

}
