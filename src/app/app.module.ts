import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharcardComponent } from './charcard/charcard.component';
import { HttpClientModule } from '@angular/common/http';
import { CharpageComponent } from './charpage/charpage.component';
import { RouterModule } from '@angular/router';
import { CardpageComponent } from './cardpage/cardpage.component';

@NgModule({
  declarations: [
    AppComponent,
    CharcardComponent,
    CharpageComponent,
    CardpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'charpage', component: CharpageComponent},
      {path: '', component: CardpageComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
