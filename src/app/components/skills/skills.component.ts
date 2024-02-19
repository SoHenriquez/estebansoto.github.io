import { Component } from '@angular/core';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ChipModule } from 'primeng/chip';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollPanelModule, ChipModule, NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
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
    { name: 'MySQL', image: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
    { name: 'PostgreSQL', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png' },
    { name: 'MongoDB', image: 'https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png' },
  ];
}
