import { HomeViewComponent } from './components/home/home-view/home-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './components/profile/profile-view/profile-view.component';
import { SearchViewComponent } from './components/search-view/search-view.component';
import { ChatViewComponent } from './components/chat/chat-view/chat-view.component';
import { PostViewComponent } from './components/post/post-view/post-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeViewComponent },
  {path: 'profile', component: ProfileViewComponent},
  {path: 'search', component: SearchViewComponent},
  {path: 'chat', component: ChatViewComponent},
  {path: 'post', component: PostViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
