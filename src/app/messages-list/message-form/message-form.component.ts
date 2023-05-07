import {Component, EventEmitter, Output} from '@angular/core';
import {MessageService} from "../../service/message.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Message} from "../../model/message";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent {

  form: FormGroup

  @Output() message = new EventEmitter<Message>();

  @Output() editedMessage: EventEmitter<Message> = new EventEmitter<Message>()
  msgEdit = new Message('', '')

  constructor(public service: MessageService, private fb: FormBuilder, public dataService: DataService) {
    this.form = fb.group({
      text: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      console.log('ngOnInit called - ' + JSON.stringify(data))
      this.msgEdit = data
    })
  }

  saveMessage() {
    if(this.form.valid) {

      if(this.msgEdit.id !== '') {
        this.service.updateMessage(this.msgEdit).subscribe(data => {
          console.log('emit updated message')
          this.editedMessage.emit(this.msgEdit)
          this.msgEdit = new Message('', '')
        })
      } else {
        this.service.saveMessage(this.form.value).subscribe((data) => {
          console.log('message saved')
          this.message.emit(data)
        })
      }

    } else {
      console.log('there is a problem with form')
    }
  }
}
