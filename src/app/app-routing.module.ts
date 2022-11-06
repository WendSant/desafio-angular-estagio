import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {CreatePostComponent} from "./pages/create-post/create-post.component";

const routes: Routes = [{
  path: '', component: IndexComponent,
  },
  {
  path: 'create', component: CreatePostComponent,
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
