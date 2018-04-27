import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//router for setting up application level route
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'home',
        component:HomeComponent
      }
    ])   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
