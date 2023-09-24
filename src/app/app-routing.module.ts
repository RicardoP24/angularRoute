import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina1Component } from './pagina1/pagina1.component';
import { salvarAntesSairGuard } from './Guard/salvar-antes-sair.guard';
import { salvarAntesSair2Guard } from './Guard/salvar-antes-sair2.guard';

const routes: Routes = [
{path:'',component:Pagina1Component,canDeactivate:[salvarAntesSair2Guard]},
{path:'pagina2',component:Pagina2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
