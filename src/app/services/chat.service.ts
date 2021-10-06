import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chatVisible = true;
  messages: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(['Hello! Lets chat!']);
  constructor() { }

  addMessage(text: string): void {
    this.messages.next([...this.messages.getValue(), text])
  }
}
