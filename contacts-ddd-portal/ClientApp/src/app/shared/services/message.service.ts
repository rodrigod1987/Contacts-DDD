import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  private add(message: string) {
    this.messages.push(message);
  }

  log(message: string) {
    this.add(message);
  }

  clear() {
    this.messages = [];
  }
}