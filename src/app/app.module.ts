import { MockHttpBackend, useMockBackend } from './apiservice-mock';
import { environment } from './../environments/environment';
import { HttpClient, HttpClientModule, HttpRequest, HttpSentEvent,
  HttpHandler, HttpBackend, HttpXhrBackend, HttpResponse } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService, API_BASE_URL } from './apiservice';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    ApiService,
    { provide: API_BASE_URL, useValue: environment.api_url},
    // code required to switch between mocked and real backend
    MockHttpBackend,
    {
      provide: HttpBackend,
      deps: [HttpXhrBackend, MockHttpBackend],
      useFactory: useMockBackend
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


