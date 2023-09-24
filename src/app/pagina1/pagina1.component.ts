import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AutorizarPathService } from '../autorizar-path.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component  {
  a:boolean=false;
 constructor(private router: Router, private autorizar:AutorizarPathService) {


}

confirm(nextUrl:string){
  window.confirm(`Antes de ir para ${nextUrl}, Guardar alterações?`)
}

onInit(){
  this.autorizar.a=false;
}
 
val:number=0;

concat(){
  this.autorizar.a=!this.autorizar.a;
  this.a=!this.a;
  return ++this.val;
}
afterViewInit(){
  this.a=false
}
onDestroy(){
 }
}
