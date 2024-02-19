import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { RippleModule } from 'primeng/ripple';
import { TimelineModule } from 'primeng/timeline';
import { TooltipModule } from 'primeng/tooltip';
import { SkillsComponent } from '../skills/skills.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TrayectoriaComponent } from '../trayectoria/trayectoria.component';
import { ProyectsComponent } from '../proyects/proyects.component';
import { HeroComponent } from '../hero/hero.component';
import { DividerComponent } from '../divider/divider.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      TooltipModule, 
      CardModule, 
      RippleModule, 
      NgFor, 
      ButtonModule, 
      TimelineModule, 
      NgClass, 
      CarouselModule,
      SkillsComponent,
      NavbarComponent,
      TrayectoriaComponent,
      ProyectsComponent,
      HeroComponent,
      DividerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  url = './data/data.json';
  
  title = 'portafolio';
  
  

  constructor() {
    
    
  }
}
