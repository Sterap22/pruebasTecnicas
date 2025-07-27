import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'audisoft-prueba';
  isOpen = true;

  constructor(
      private router: Router
    ) {}

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  goToNavigate(root: string): void {
    this.router.navigate([root]);
  }
}
