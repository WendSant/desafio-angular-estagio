import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticeCardComponent } from './components/notice-card/notice-card.component';
import { IndexComponent } from './pages/index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {LoadingInterceptor} from "./interceptors/loading.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    NoticeCardComponent,
    IndexComponent,
    CreatePostComponent,
    PostDetailsComponent,
    SpinnerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
