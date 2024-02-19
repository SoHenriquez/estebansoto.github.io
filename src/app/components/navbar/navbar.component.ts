import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule, RippleModule, TooltipModule, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  CV_FILE_PATH = 'assets/Curriculum_vitae_Esteban_Soto_Henríquez.pdf'; 
  constructor(private http: HttpClient) {
    
    
  }
  downloadFile() {
    this.http.get(this.CV_FILE_PATH, { responseType: 'blob' })
      .subscribe(response => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Curriculum_vitae_Esteban_Soto_Henríquez.pdf'; // Set desired filename
        link.click();
        URL.revokeObjectURL(link.href); // Release memory after download
      });
  }
}
