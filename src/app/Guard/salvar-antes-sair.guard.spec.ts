import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { salvarAntesSairGuard } from './salvar-antes-sair.guard';

describe('salvarAntesSairGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => salvarAntesSairGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
