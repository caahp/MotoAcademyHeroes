import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Hero } from './Hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [ // object array
      { id: 1, name: 'Spider Man', img: 'https://t.ctcdn.com.br/6X5TAxBxxyjaH9QHdfoDWp_TF3o=/196x16:1914x984/768x432/smart/i336725.jpeg'},
      { id: 2, name: 'Iron Man', img: "https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg"},
      { id: 3, name: 'Hulk', img:"https://img.olhardigital.com.br/wp-content/uploads/2023/06/o-incrivel-hulk-1.png"},
      { id: 4, name: 'Thor', img: 'https://classic.exame.com/wp-content/uploads/2018/10/thor-ragnarok-filme-cultura-vip.jpg?quality=70&strip=info&w=720'},
      { id: 5, name: 'Black Widow', img: 'https://hips.hearstapps.com/hmg-prod/images/black-widow-scarlett-johansson-marvel-1559233664.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*'},
      { id: 6, name: 'Captain America', img: 'https://rollingstone.uol.com.br/media/_versions/chris_evans__-capitao_america_-_reproducao_widelg.jpg'},
      { id: 7, name: 'Hawkeye', img: 'https://images.immediate.co.uk/production/volatile/sites/3/2019/07/avengers-8bb66cd.jpg?quality=90&resize=727,485'},
      { id: 8, name: 'Doctor Strange', img: 'https://comunidadeculturaearte.com/wp-content/uploads/2022/02/Doctor-Strange-in-the-Multiverse-of-Madness-Sam-Raimi-Wanda-Maximoff-Elizabeth-Olsen-trailer-spider-man-1024x720.jpg'},
      { id: 9, name: 'Black Panther', img: 'https://nmaahc.si.edu/sites/default/files/styles/scale_crop_1920_1200/public/images/blog/2018_39_3_3_001_preview.jpeg?h=95651f9d&itok=MPSd-o72'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
