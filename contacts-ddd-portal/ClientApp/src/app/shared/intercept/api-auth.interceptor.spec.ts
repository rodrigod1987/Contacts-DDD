import { TestBed } from '@angular/core/testing';

import { ApiAuthInterceptor } from './api-auth.interceptor';

describe('ApiAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiAuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiAuthInterceptor = TestBed.inject(ApiAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
