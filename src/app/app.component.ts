import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { RippleModule } from 'primeng/ripple';
import { ChipModule } from 'primeng/chip';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { CarouselModule } from 'primeng/carousel';
import {
  NgFor, NgClass
} from '@angular/common';


interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  text?: string;
  tag?: string[];
}
export interface Products {
  id:              string;
  code:            string;
  name:            string;
  description:     string;
  image:           string;
  price:           number;
  category:        string;
  quantity:        number;
  inventoryStatus: string;
  rating:          number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TooltipModule, CardModule, AnimateOnScrollModule, RippleModule, ChipModule, ScrollTopModule, ScrollPanelModule, NgFor, DividerModule, ButtonModule, TimelineModule, NgClass, CarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  url = './data/data.json';
  products: Products[] | any;
  title = 'portafolio';
  skills: any[] = [
    { name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png' },
    { name: 'TypeScript', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' },
    { name: 'HTML', image: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png' },
    { name: 'CSS', image: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png' },
    { name: 'NestJS', image: 'https://docs.nestjs.com/assets/logo-small.svg' },
    { name: 'Angular', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGkcMkTBc-lpzANr23j0wSHRAYQ39Nt_hMqbolwzCrQ&s' },
    { name: 'Express.js', image: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png' },
    { name: 'Bootstrap', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png' },
    { name: 'Git', image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
    { name: 'GitHub', image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
    { name: 'GitLab', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi99oMCSxIvISTFyc2iX7qi94IixYK2FatOL27KLrUQQ&s' },
    { name: 'MySQL', image: 'https://assets.stickpng.com/images/62debc4fff3c6e4b8b5de8d3.png' },
    { name: 'PostgreSQL', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png' },
    { name: 'MongoDB', image: 'https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png' },
  ];
  events: EventItem[];

  constructor(private http: HttpClient) {
    this.events = [
      {
        status: 'Clínica Universitaria Práctica técnica enseñanza media', date: 'Enero - Febrero 2019', icon: 'pi pi-check-circle', color: '#35c4dc', image: '',
        text: 'Experiencia adquirida en Liceo Mauricio Hochschild del CEAT, Técnico de Nivel Medio en Telecomunicaciones.', tag: []
      },
      {
        status: 'Syscode SPA. Práctica I', date: 'Octubre 2022 - Enero 2023', icon: 'pi pi-check-circle', color: '#35c4dc', text: 'Experiencia como desarrollador web de Backend.',
        tag: ['JavaScript', 'TypeScript', 'HTML', 'NestJS', 'AngularJS', 'Express.js', 'MongoDB']
      },
      {
        status: 'Clikma Práctica II', date: 'Octubre 2023 - Enero 2024', icon: 'pi pi-check-circle', color: '#35c4dc', text: 'Experiencia como desarrollador Full Stack.',
        tag: ['JavaScript', 'TypeScript', 'HTML', 'JAVA', 'Angular', 'SpingBoot', 'GitLab', 'Bootstrap', 'PostgreSQL']
      },
    ];
  }
  ngOnInit(): void {
    this.http.get(this.url).subscribe((data: any) => {
      this.products = data;
    });
  }
  getSeverity(status: string) {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
    }
}
}
