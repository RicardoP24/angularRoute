import { CanDeactivateFn } from '@angular/router';
import { Pagina1Component } from '../pagina1/pagina1.component';

export const salvarAntesSair2Guard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  
  
    var val:any =component
    const nextUrl=nextState

  return val.a ? true : val.confirm(nextUrl?.url) 
};
