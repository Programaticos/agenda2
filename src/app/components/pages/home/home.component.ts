import { Component } from '@angular/core';
import { HeaderLayoutComponent } from '../../layout/header/header.component';
import { FooterLayoutComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderLayoutComponent, FooterLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
