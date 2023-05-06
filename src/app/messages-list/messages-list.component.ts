import { Component } from '@angular/core';
import {Message} from "../model/message";
import {MessageService} from "../service/message.service";

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent {

  messages: Message[] = [new Message('1', 'first'), new Message('2', 'second'), new Message('3', 'third')];

  constructor(public service:MessageService) {
  }

  ngOnInit() {
    this.service.getMessages().subscribe((data) => {
      console.log('messages from server' +  JSON.stringify(data))
      this.messages = data
    })
  }

}
