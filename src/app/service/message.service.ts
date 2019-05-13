import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  addMessage(mess: string) {
    this.messages.push(mess);
  }

  deleteMessage() {
    this.messages = [];
  }

  constructor() { }
}
