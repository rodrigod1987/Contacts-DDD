import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy {

  private intervalId: any;

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    this.intervalId = setTimeout(() => this.close(), 5000);
  }

  ngOnDestroy() {
    clearTimeout(this.intervalId);
  }

  close() {
    this.messageService.remove();
  }

}
