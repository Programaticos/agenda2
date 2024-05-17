import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
interface NavigationOption {
  link: string;
  title: string;
}
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  options: NavigationOption[] = [
    { link: '/crear-contactos', title: 'Crear contactos' },
    { link: '/ver-contactos', title: 'Ver contactos' },
    { link: '/editar-contactos', title: 'Editar contactos' },
    { link: '/eliminar-contactos', title: 'Eliminar contactos' },
  ];
}
