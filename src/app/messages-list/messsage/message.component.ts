import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Message} from "../../model/message";
import {DataService} from "../../service/data.service";
import {MessageService} from "../../service/message.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {

  @Input() message: Message = new Message('', '')

  @Output() delMessage: EventEmitter<Message> = new EventEmitter<Message>()

  constructor(public dataService: DataService, public apiService: MessageService) {
  }

  edit() {
    console.log('edit called')
    this.dataService.setData(this.message)
  }

  delete() {
    this.apiService.deleteMessage(this.message).subscribe(data => {
      this.delMessage.emit(this.message)
    })

  }
}
