import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
   count = 0;
   heroes = HEROES;
   selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  DecreaseVal(hero: Hero){
    if (hero.count > 0) {
       hero.count--;
    }
}

IncreaseVal(hero: Hero){
    if (hero.count < 50) {
       hero.count++;
    }
}
}
