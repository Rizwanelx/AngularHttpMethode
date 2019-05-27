import { NewbookComponent } from './newbook/newbook.component';
import { MybookComponent } from './mybook/mybook.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full'},
  { path: 'app', component: AppComponent},
  { path: 'home', component: HomeComponent},
  { path: 'mybook', component: MybookComponent},
  { path: 'newbook', component: NewbookComponent},
  { path: 'selectedHero', component: HeroComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
