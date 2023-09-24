import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { salvarAntesSair2Guard } from './salvar-antes-sair2.guard';

describe('salvarAntesSair2Guard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => salvarAntesSair2Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
