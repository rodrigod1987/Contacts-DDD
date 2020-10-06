import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message, MessageType } from '../../model/message';

@Injectable({ providedIn: 'root' })
export class MessageService {

  messageSubject = new Subject<Message>();

  success(text: string) {
    this.message(MessageType.SUCCESS, text);
  }

  warning(text: string) {
    this.message(MessageType.WARNING, text);
  }

  danger(text: string) {
    this.message(MessageType.DANGER, text);
  }

  info(text: string) {
    this.message(MessageType.INFO, text);
  }

  private message(messageType: MessageType, text: string) {
    this.messageSubject.next(new Message(messageType, text));
  }

  getMessage() {
    return this.messageSubject.asObservable();
  }

}
