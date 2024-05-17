// Archivo que contiene los métodos para realizar las peticiones HTTP al servidor de la API de la agenda.
import { HttpClient } from '@angular/common/http';
// Importando el decorador Injectable y el inject para poder inyectar el servicio HttpClient en la clase.
import { Injectable, inject } from '@angular/core';
// Importando el Observable de la librería rxjs para poder manejar las respuestas de las peticiones HTTP.
// Los Observable sirven para manejar las respuestas de las peticiones HTTP de manera asíncrona. Los observables se usan en programación reactiva y son una forma de manejar flujos de datos que cambian con el tiempo, por ejemplo las respuestas de las peticiones HTTP, eventos del usuario, etc.
import { Observable } from 'rxjs';

//Agregando el decorador @Injectable para poder inyectar el servicio en otros componentes y módulos de Angular.
@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private apiUrl = 'http://localhost:3001/api/agenda';
  // Inyectando el servicio HttpClient en el constructor de la clase.
  private http = inject(HttpClient);
  constructor() {}
  // Obtener todos los contactos
  getContacts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  // Crear un nuevo contacto
  createContact(contact: any): Observable<any> {
    return this.http.post(this.apiUrl, contact);
  }
  // Actualizar un contacto existente
  updateContact(contact: any): Observable<any> {
    return this.http.put(`${this.apiUrl}`, contact);
  }
  // Borrar un contacto
  deleteContact(contact: { deleteId: string }): Observable<any> {
    console.log('Eliminando contacto en servicio', contact);
    return this.http.delete(`${this.apiUrl}`, {
      body: contact,
    });
  }
}
