import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import {MessageComponent} from "./messages-list/messsage/message.component";
import {HttpClientModule} from "@angular/common/http";
import { MessageFormComponent } from './messages-list/message-form/message-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataService} from "./service/data.service";

@NgModule({
  declarations: [
    AppComponent,
    MessagesListComponent,
    MessageComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
