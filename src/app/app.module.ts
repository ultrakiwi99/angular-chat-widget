import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { ChatButtonComponent } from './components/chat-button/chat-button.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatButtonComponent,
    ChatInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
