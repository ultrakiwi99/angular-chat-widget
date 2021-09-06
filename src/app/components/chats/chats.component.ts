import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChatsService} from "../../services/chats.service";
import {Chat} from "../../interfaces/chat";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit, OnDestroy {
  myChats: Chat[] = [];
  allChat: Chat[] = [];
  selectedChat: Chat | undefined;
  subscriptions: Subscription[] = [];

  constructor(private cs: ChatsService) { }

  ngOnInit(): void {
    this.subscriptions = [
    this.cs.myChats$.subscribe(chats => this.myChats = chats),
    this.cs.allChats$.subscribe(chats => this.allChat = chats),
    this.cs.selectedChat$.subscribe(chat => this.selectedChat = chat)
    ]
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  selectChat(chat: Chat, collection: 'my' | 'all') {
    this.cs.selectChat(chat.uid, collection);
  }

  clearSelectedChat() {
    this.cs.clearSelected();
  }
}
