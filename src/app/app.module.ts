import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { KeybroadComponent } from './keybroad/keybroad.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MainContainerComponent,
    KeybroadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
