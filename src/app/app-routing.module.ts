import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./pages/index/index.component";
import {CreatePostComponent} from "./pages/create-post/create-post.component";
import {PostDetailsComponent} from "./pages/post-details/post-details.component";

const routes: Routes = [{
  path: '', component: IndexComponent,
  },
  {
  path: 'create', component: CreatePostComponent,
  },
  {
    path: 'details/:id', component: PostDetailsComponent,
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
