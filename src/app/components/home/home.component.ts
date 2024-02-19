import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkillsComponent } from '../skills/skills.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TrayectoriaComponent } from '../trayectoria/trayectoria.component';
import { ProyectsComponent } from '../proyects/proyects.component';
import { HeroComponent } from '../hero/hero.component';
import { DividerComponent } from '../divider/divider.component';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      NgFor,  
      NgClass, 
      SkillsComponent,
      NavbarComponent,
      TrayectoriaComponent,
      ProyectsComponent,
      HeroComponent,
      DividerComponent,
      ScrollTopModule,
      TooltipModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  url = './data/data.json';
  title = 'portafolio';
  
  

  
}
