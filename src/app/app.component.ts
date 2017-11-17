import { Customer, ApiService } from './apiservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  customers: Customer[];

  constructor(private apiService: ApiService)
  // tslint:disable-next-line:one-line
  {  }

  ngOnInit(): void {
    this.apiService.apiCustomers().subscribe(x => this.customers = x);
  }
}
