import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, combineLatest} from "rxjs";
import {Chat} from "../interfaces/chat";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  allChats$: Observable<Chat[]>
  myChats$: Observable<Chat[]>
  selectedChat$: BehaviorSubject<Chat | undefined>

  constructor() {
    this.allChats$ = of([
      {uid: '1', title: 'Chat 1'},
      {uid: '2', title: 'Chat 2'}
    ]);
    this.myChats$ = of([
      {uid: '3', title: 'Chat 3'},
      {uid: '4', title: 'Chat 4'}
    ]);
    this.selectedChat$ = new BehaviorSubject<Chat | undefined>(undefined);
  }

  selectChatInAll(uid: string): void {
    this.allChats$
      .pipe(map(chat => chat.find(c => c.uid === uid)))
      .subscribe(chat => this.selectedChat$.next(chat));
  }

  selectChatInMy(uid: string): void {
    this.myChats$
      .pipe(map(chat => chat.find(c => c.uid === uid)))
      .subscribe(chat => this.selectedChat$.next(chat));
  }

  clearSelected(): void {
    this.selectedChat$.next(undefined);
  }
 }
