import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HOST_URL} from "../constants/UrlConstants";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public client: HttpClient) { }

  public getMessages(): Observable<any> {
    return this.client.get(HOST_URL);
  }
}
