import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject, Subscription, debounceTime, distinctUntilChanged, of } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component  {
  a:boolean=false;
  private variableChange$ = new Observable<boolean>();
  private variableChangeSubscription!: Subscription;
  myVariable: boolean = false;


 constructor(private router: Router) {


}


 
  async confirm(nextUrl:string){

// Subscribe to the Observable to react to variable changes
  let valor=await this.waitForVariableChange()
   return valor;
 
}

onInit(){ 
  // this.variableChange$ = of(false)

}
 
val:number=0;

mudarValor(){
  this.myVariable=true
 // this.variableChange$ = of(true)

}
async waitForVariableChange(): Promise<void> {
  return new Promise<void>((resolve) => { 

    // this.variableChange$.subscribe((data)=>{
    //   console.log(data)
    //   resolve();

    // })
    const checkVariable = () => {
      if (this.myVariable) {
        resolve();

       } else {
        setTimeout(checkVariable, 100); // Check every 100 milliseconds
      }
    };

    checkVariable();
  });
}
concat(){
  this.a=!this.a;
  return ++this.val;
}
mudar(){
  this.a=!this.a;
  return ++this.val;
}
afterViewInit(){
  this.a=false
}
onDestroy(){
 }
}
