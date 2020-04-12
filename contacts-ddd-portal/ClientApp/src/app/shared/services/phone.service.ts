import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phone } from '../model/Phone';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private phonesUrl: string = `api/v1/phones`;

  constructor(private http: HttpClient) { }

  getPhones(id: string): Observable<Phone[]> {
    return this.http.get<Phone[]>(`${this.phonesUrl}?contactId=${id}`)
      .pipe();
  }
}
