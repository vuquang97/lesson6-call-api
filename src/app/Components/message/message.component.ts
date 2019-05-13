import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages: string[];

  getMessage() {
    this.messages = this.messageService.messages;
  }

  constructor(public messageService: MessageService) { }

  ngOnInit() {
    this.getMessage();
  }

}
