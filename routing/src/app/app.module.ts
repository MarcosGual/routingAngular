import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { HijoUnoComponent } from './hijo-uno/hijo-uno.component';
import { HijoDosComponent } from './hijo-dos/hijo-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    SegundoComponent,
    NoEncontradoComponent,
    HijoUnoComponent,
    HijoDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
