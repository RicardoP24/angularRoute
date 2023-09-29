import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [
    AppComponent,
    Pagina2Component,
    Pagina1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
