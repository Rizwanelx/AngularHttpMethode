import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookService } from './book.service';
import { TestData } from './testdata';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HomeComponent } from './home/home.component';
import { MybookComponent } from './mybook/mybook.component';
import { NewbookComponent } from './newbook/newbook.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MybookComponent,
    NewbookComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TestData),
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
