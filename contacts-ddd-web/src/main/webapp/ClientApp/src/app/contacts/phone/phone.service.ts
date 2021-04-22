import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phone } from '../../shared/model/phone';
import { Observable } from 'rxjs';
import { MessageService } from '../../shared/components/message/message.service';
import { tap } from 'rxjs/operators';
import { PhoneType } from '../../shared/enums/phone-type';

@Injectable({ providedIn: 'root' })
export class PhoneService {

  private phonesUrl: string = `api/v1/phones`;

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getPhones(contactId: string): Observable<Phone[]> {
    return this.http.get<Phone[]>(`${this.phonesUrl}/contact/${contactId}`);
  }

  getPhone(id: number) : Observable<Phone> {
    return this.http.get<Phone>(`${this.phonesUrl}/${id}`);
  }

  save(phone: Phone) {
    return this.http.post(this.phonesUrl, JSON.stringify(phone))
      .pipe(
        tap(_ => this.messageService.success(`Phone was added successfully.`))
      );
  }

  edit(phone: Phone) {
    return this.http.put(`${this.phonesUrl}/${phone.id}`, JSON.stringify(phone))
    .pipe(
      tap(_ => this.messageService.success(`Phone was edited successfully.`))
    );
  }

  delete(id: number) {
    return this.http.delete(`${this.phonesUrl}/${id}`)
      .pipe(
        tap(_ => this.messageService.danger(`Phone was deleted successfully.`))
      );
  }

  getPhoneTypes() : Array<string> {
    var keys = Object.keys(PhoneType);
    return keys.slice(keys.length / 2);
  }
}
