import { Customer } from './../customer.model';
import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromCustomer from '../state/customer.reducer';

import * as customerActions from '../state/customer.action';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers$: Observable<Customer[]>;
  error$: Observable<string>;

  constructor(private store: Store<fromCustomer.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new customerActions.LoadCustomers());
    this.customers$ = this.store
      .pipe(
        select(fromCustomer.getCustomers)
      );
    this.error$ = this.store
      .pipe(
        select(fromCustomer.getError)
      );
  }

  deleteCustomer(customer: Customer) {
    if (confirm('Are you sure ?')) {
      this.store.dispatch(new customerActions.DeleteCustomer(customer.id));
    }
  }

  editCustomer(customer: Customer) {
    this.store.dispatch(new customerActions.LoadCustomer(customer.id));
  }

}
