import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InMemoryDataService } from './services/in-memory-data.service';

import { UserInfoComponent } from './components/user-info/user-info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InstabuttonComponent } from './components/instabutton/instabutton.component';
import { ProfileViewComponent } from './components/profile/profile-view/profile-view.component';
import { ChatViewComponent } from './components/chat/chat-view/chat-view.component';
import { PostViewComponent } from './components/post/post-view/post-view.component';
import { SearchViewComponent } from './components/search-view/search-view.component';
import { HomeViewComponent } from './components/home/home-view/home-view.component';
import { UserPostComponent } from './components/home/user-post/user-post.component';
import { CarrouselComponent } from './components/home/carrousel/carrousel.component';
import { SearchbarComponent } from './components/search/searchbar/searchbar.component';
import { PostButtonComponent } from './components/post/post-button/post-button.component';
import { ReusableButtonComponent } from './components/reusable-button/reusable-button.component';
import { UserInfoProfileComponent } from './components/profile/user-info-profile/user-info-profile.component';
import { ProfileGridComponent } from './components/profile/profile-grid/profile-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import  { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ToastrModule } from 'ngx-toastr';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()

  ],
  declarations: [
    AppComponent,
    UserInfoComponent,
    NavbarComponent,
    InstabuttonComponent,
    ProfileViewComponent,
    ChatViewComponent,
    PostViewComponent,
    SearchViewComponent,
    HomeViewComponent,
    UserPostComponent,
    CarrouselComponent,
    SearchbarComponent,
    PostButtonComponent,
    ReusableButtonComponent,
    UserInfoProfileComponent,
    ProfileGridComponent
  ],
  providers: [],
  bootstrap: [AppComponent, CarrouselComponent]
})
export class AppModule { }
