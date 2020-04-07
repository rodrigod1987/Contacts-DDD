import { Component, OnInit, AfterViewInit, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { MessageService } from '../shared/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
