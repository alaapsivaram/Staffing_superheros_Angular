import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})

export class HerosComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) { }

 onSelect( hero: Hero) {
 	this.selectedHero = hero;
 }
 
 getHeroes(): void {
 	this.heroes = this.heroService.getHeroes();
 }
	
  ngOnInit() {
  	this.getHeroes();
  }

}
