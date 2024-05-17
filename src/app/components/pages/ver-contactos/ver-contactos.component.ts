import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLayoutComponent } from '../../layout/header/header.component';
import { FooterLayoutComponent } from '../../layout/footer/footer.component';
import { ContactsService } from '../../../services/api-agenda/contacts.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ver-contactos',
  standalone: true,
  imports: [HeaderLayoutComponent, FooterLayoutComponent, CommonModule],
  templateUrl: './ver-contactos.component.html',
  styleUrl: './ver-contactos.component.css',
})
export class VerContactosComponent implements OnInit {
  contacts: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {}
  ngOnInit(): void {
    //Leer de la query la clave id usando los métodos de Angular.
    const idQuery = this.route.snapshot.queryParamMap.get('idQuery');
    console.log('idQuery: ', idQuery);
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID: ', id);
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
  onRefreshClick(): void {
    this.loadContacts();
  }
}
