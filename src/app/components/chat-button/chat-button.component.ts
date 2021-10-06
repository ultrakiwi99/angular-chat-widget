import {Component} from '@angular/core';
import {ChatService} from "../../services/chat.service";

@Component({
  selector: 'app-chat-button',
  templateUrl: './chat-button.component.html',
  styleUrls: ['./chat-button.component.css']
})
export class ChatButtonComponent {

  constructor(private cs: ChatService) {
  }

  get chatIsVisible(): boolean {
    return this.cs.chatVisible;
  }

  toggleChat(): void {
    this.cs.chatVisible = !this.cs.chatVisible;
  }
}
