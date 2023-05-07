import { Component } from '@angular/core';
import {Message} from "../model/message";
import {MessageService} from "../service/message.service";

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent {

  // messages: Message[] = [new Message('1', 'first'), new Message('2', 'second'), new Message('3', 'third')];
  messages: Message[] = [];

  constructor(public service:MessageService) {
  }

  ngOnInit() {
    this.service.getMessages().subscribe((data) => {
      console.log('messages from server' +  JSON.stringify(data))
      this.messages = data
    })
  }

  onMessageEmit(msg: any) {
    console.log('message emitted - ' + JSON.stringify(msg))
    this.messages.push(msg)
  }

  onMessageEditEmit(msg: any) {
    console.log('updated message emitted')
    let index = this.getIndex(this.messages, msg.id)

    if(index !== -1) {
      this.messages.splice(index, 1, msg)
    }


  }

  getIndex(messages: Message[], index: string): number {

    let msg = this.messages.find(elem => elem.id === index)

    if(msg !== undefined) {
      return this.messages.indexOf(msg)
    }


    return -1;
  }

  onDeleteMessage(msg: any) {
    let index = this.getIndex(this.messages, msg.id)
    this.messages.splice(index, 1)
  }
}
