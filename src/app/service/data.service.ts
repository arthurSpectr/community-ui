import {BehaviorSubject} from "rxjs";
import {Message} from "../model/message";

export class DataService {

  private data = new BehaviorSubject<Message>(new Message('', ''))

  getData() {
    return this.data.asObservable()
  }

  setData(data: Message) {
    this.data.next(data)
  }

}
