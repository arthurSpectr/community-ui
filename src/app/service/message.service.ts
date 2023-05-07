import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HOST_URL} from "../constants/UrlConstants";
import {Observable} from "rxjs";
import {Message} from "../model/message";


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public client: HttpClient) { }

  public getMessages(): Observable<any> {
    return this.client.get(HOST_URL);
  }

  public saveMessage(message: Message): Observable<any> {
    return  this.client.post(HOST_URL, message);
  }

  public updateMessage(message: Message): Observable<any> {
    return this.client.put(HOST_URL + '/' + message.id, message)
  }

  public deleteMessage(message: Message): Observable<any> {
    return this.client.delete(HOST_URL + '/' + message.id)
  }
}
