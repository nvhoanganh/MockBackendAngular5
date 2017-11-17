import { Customer } from './apiservice';
import { environment } from './../environments/environment';
import { HttpRequest, HttpBackend, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Mocked data
const MockedCustomers: Customer[] = [
  {
    id: 1,
    name: 'Mocked Microsoft',
    description: 'Mocked Microsoft'
  },
  {
    id: 2,
    name: 'Mocked Amazon',
    description: 'Mocked Amazon'
  }
];


// Switch between real and mocked backend
export function useMockBackend(realbackend, mockedBackend) {
  if (!environment.use_mocked_backend) {
    return realbackend;
  } else {
    return mockedBackend;
  }
}

// Return mocked data
export class MockHttpBackend implements HttpBackend {
  handle(req: HttpRequest<any>): Observable<any> {
    const blob = new Blob([JSON.stringify(MockedCustomers)], {type : 'application/json'});
    if (req.url.indexOf('/api/Customers') > 0 ) {
      // return customers
      return new Observable(function (observer) {
          observer.next(new HttpResponse({ body: blob, headers: null, status: 200, statusText: 'OK', url: req.urlWithParams }));
          observer.complete();
      });
    }
  }
}
