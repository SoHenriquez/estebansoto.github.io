import { Component } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { NgClass, NgFor } from '@angular/common';
interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  text?: string;
  tag?: string[];
}


@Component({
  selector: 'app-trayectoria',
  standalone: true,
  imports: [ScrollPanelModule, ChipModule, CardModule, TimelineModule, NgClass, NgFor],
  templateUrl: './trayectoria.component.html',
  styleUrl: './trayectoria.component.scss'
})
export class TrayectoriaComponent {
  events: EventItem[];
  constructor() {
    this.events = [
      {
        status: 'Clínica Universitaria Práctica técnica enseñanza media', date: 'Enero - Febrero 2019', icon: 'pi pi-check-circle', color: '#35c4dc', image: '',
        text: 'Experiencia adquirida en Liceo Mauricio Hochschild del CEAT, Técnico de Nivel Medio en Telecomunicaciones.'
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
}
