import { CanActivateFn } from '@angular/router';
import { AutorizarPathService } from '../autorizar-path.service';
import { inject } from '@angular/core';

export const salvarAntesSairGuard: CanActivateFn = (route, state) => {
  const service=inject(AutorizarPathService)
  console.log(state)
  if(service.a){
    return true;
  }else{

    return false;
  }
};
