import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDPn1EyyG1p7DnvI-xnsCUlRvMvoMkeJ_o'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
