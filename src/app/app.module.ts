import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ChatsComponent } from './components/chats/chats.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ChatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
