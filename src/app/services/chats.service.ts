import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
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

  selectChat(uid: string, collectionName: 'my' | 'all'): void {
    const collections = {
      'my': this.myChats$,
      'all': this.allChats$
    };
    this.selectChatInCollection(collections[collectionName], uid);
  }

  selectChatInCollection(collection: Observable<Chat[]> | undefined, uid: string): void {
    if (!collection) {
      return;
    }
    collection
      .pipe(map(chat => chat.find(c => c.uid === uid)))
      .subscribe(chat => this.selectedChat$.next(chat));
  }

  clearSelected(): void {
    this.selectedChat$.next(undefined);
  }
}
