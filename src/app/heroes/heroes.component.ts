import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import {HEROES} from './mocks/Hero.mocks'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService, 
    private location: Location
  ) {}


  ngOnInit(): void {
    this.getHeroes()  
  }

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected hero id ${hero.id}`)
  }


  getHeroes(): void {
    this.heroService.getHeroesMock().subscribe(
      heroes => this.heroes = heroes
  )}

  goBack(): void {
    this.location.back()
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}