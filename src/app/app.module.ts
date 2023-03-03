import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SvgFemComponent } from './svg/svg.component';
import { SvgMenComponent } from './svg-men/svg-men.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent,
    SvgFemComponent,
    SvgMenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
