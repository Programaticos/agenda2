import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../../services/api-agenda/contacts.service';
import { CommonModule } from '@angular/common';
import { FooterLayoutComponent } from '../../layout/footer/footer.component';
import { HeaderLayoutComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-eliminar-contactos',
  standalone: true,
  imports: [HeaderLayoutComponent, FooterLayoutComponent, CommonModule],
  templateUrl: './eliminar-contactos.component.html',
  styleUrl: './eliminar-contactos.component.css',
})
export class EliminarContactosComponent implements OnInit {
  contacts: any[] = [];
  contact: any = { deleteId: '' };

  constructor(private contactsService: ContactsService) {}
  ngOnInit(): void {
    this.loadContacts();
  }
  loadContacts(): void {
    this.contactsService.getContacts().subscribe({
      next: (data) => {
        this.contacts = data.data;
        console.log('Contactos: ', this.contacts);
      },
      error: (error) => {
        console.error('Hubo un error al traer los contactos: ', error);
      },
    });
  }
  deleteContactClick(id: string): void {
    this.contact.deleteId = id;
    console.log('Eliminando contacto', this.contact);
    this.contactsService.deleteContact(this.contact).subscribe({
      next: (data) => {
        console.log('Contacto eliminado con éxito', data);
        this.contacts = this.contacts.filter((contact) => contact.id !== id);
      },
      error: (error) => {
        console.error('Error al eliminar contacto', error);
      },
    });
  }
}
