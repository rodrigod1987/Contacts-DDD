import { Injectable } from '@angular/core';
import { Contact } from '../model/Contact';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrl: string = `api/v1/contacts`;

  constructor(private httpClient: HttpClient,
    private messageService: MessageService) { }

  getContact(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.contactsUrl}/${id}`)
      .pipe(
        tap(_ => this.messageService.log(`ContactService: fetched contact with id ${id}.`)),
        catchError(this.handleError<Contact>(`getContact id=${id}`))
      );
  }

  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.contactsUrl)
      .pipe(
        tap(_ => this.messageService.log("ContactService: fetched all rows from server.")),
        catchError(this.handleError<Contact[]>('getContacts', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.messageService.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
