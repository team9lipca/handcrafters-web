import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CraftsComponent } from './crafts/crafts.component';
import { CraftersComponent } from './crafters/crafters.component';
import { HomeComponent } from './home/home.component';

import { CraftService } from './services/craft.service';
import { CraftersService } from './services/crafters.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Crafts List' }
  },
  {
    path: 'crafters',
    component: CraftersComponent,
    data: { title: 'Crafters List' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CraftsComponent,
    CraftersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    CraftService,
    CraftersService
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
