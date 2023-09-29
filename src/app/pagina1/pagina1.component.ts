import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NodeSelectEventArgs } from '@syncfusion/ej2-angular-navigations';
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
  ultimoNode!:HTMLElement;


 constructor(private router: Router) {


}
onSelect(event:NodeSelectEventArgs){
  let a =document.querySelector('#treeElement_active') as HTMLElement
  console.log(a)
  a.classList.remove('e-active')
  a.classList.remove('e-node-focus')
  this.ultimoNode.classList.add('e-active')
   this.ultimoNode =a

}
beforeSelect(event:NodeSelectEventArgs){
 
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
iniciar(){
  this.ultimoNode =document.querySelector('#treeElement_active .e-list-parent .e-active') as HTMLElement
  console.log(this.ultimoNode )}
mudar(){
  this.a=!this.a;
  return ++this.val;
}
afterViewInit(){
  this.a=false
 

}
onDestroy(){
 }

 public hierarchicalData: Object[] = [
  { id: '01', name: 'Music', expanded: true,
      subChild: [
          {id: '01-01', name: 'Gouttes.mp3',selected:true},
                ]
  },
  {
      id: '02', name: 'Videos',
      subChild: [
          {id: '02-01', name: 'Naturals.mp4'},
          {id: '02-02', name: 'Wild.mpeg'}
  ]
  },
  {
      id: '03', name: 'Documents',
      subChild: [
          {id: '03-01', name: 'Environment Pollution.docx'},
          {id: '03-02', name: 'Global Water, Sanitation, & Hygiene.docx'},
          {id: '03-03', name: 'Global Warming.ppt'},
          {id: '03-02', name: 'Social Network.pdf'},
          {id: '03-03', name: 'Youth Empowerment.pdf'},
      ]
  }
];
public field:Object ={ dataSource: this.hierarchicalData, id: 'id', text: 'name', child: 'subChild' };
}
