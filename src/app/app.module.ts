import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticeCardComponent } from './components/notice-card/notice-card.component';
import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticeCardComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
