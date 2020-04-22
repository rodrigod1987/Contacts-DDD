import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { MessageService } from '../../services/message.service';
import { Message, MessageType } from '../../model/message';

@Component({
  selector: 'ap-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() timeout = 5000;
  messages: Message[] = [];


  constructor(public messageService: MessageService) {

    this.messageService
      .getMessage()
      .subscribe(message => {

        if(!message) {
          this.messages = [];
          return;
        }

        this.messages.push(message);
        setTimeout(() => this.removeMessage(message), this.timeout);

      });

  }

  removeMessage(messageToRemove: Message) {
    this.messages = this.messages.filter(message => message != messageToRemove);
  }

  getMessageClass(message: Message) {

    if (!message) {
      return '';
    }

    switch(message.messageType) {
      case MessageType.SUCCESS:
        return 'text-white bg-success';
      case MessageType.WARNING:
        return 'text-white bg-warning';
      case MessageType.DANGER:
        return 'text-white bg-danger';
      case MessageType.INFO:
        return 'text-white bg-light';
    }

  }

  getButtonClass(message: Message) {

    if (!message) {
      return '';
    }

    switch(message.messageType) {
      case MessageType.SUCCESS:
        return 'btn btn-success';
      case MessageType.WARNING:
        return 'btn btn-warning';
      case MessageType.DANGER:
        return 'btn btn-danger';
      case MessageType.INFO:
        return 'btn btn-light';
    }

  }

}
