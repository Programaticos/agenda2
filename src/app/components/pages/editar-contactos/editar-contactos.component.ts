import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterLayoutComponent } from '../../layout/footer/footer.component';
import { HeaderLayoutComponent } from '../../layout/header/header.component';
import { ContactsService } from '../../../services/api-agenda/contacts.service';

@Component({
  selector: 'app-editar-contactos',
  standalone: true,
  imports: [
    HeaderLayoutComponent,
    FooterLayoutComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './editar-contactos.component.html',
  styleUrl: './editar-contactos.component.css',
})
export class EditarContactosComponent {
  contacts: any[] = [];
  contact: any = { name: '', phone: '', email: '', address: '', id: null };
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
  updateContact(): void {
    if (!this.contact.id) {
      alert('Por favor, selecciona un contacto.');
      return;
    }
    if (
      !this.contact.name &&
      !this.contact.phone &&
      !this.contact.email &&
      !this.contact.address
    ) {
      alert('Por favor, selecciona al menos un campo para actualizar.');
      return;
    }
    const updatedContact: any = {};
    for (const key in this.contact) {
      if (this.contact[key]) {
        console.log('key', key);
        console.log('this.contact[key]', this.contact[key]);
        updatedContact[key] = this.contact[key];
      } else {
        console.log('key', key);
        console.log('this.contact[key]', this.contact[key]);
      }
    }
    console.log('updatedContact', updatedContact);
    this.contactsService.updateContact(updatedContact).subscribe({
      next: (data) => {
        console.log('Contact updated successfully', data);
        alert(
          `El contacto con id:${this.contact.id} ha sido actualizado exitosamente.`
        );
        this.loadContacts();
      },
      error: (error) => {
        console.error('Error updating contact', error);
      },
    });
  }
}
