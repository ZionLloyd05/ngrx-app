import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import * as customerActions from './customer.action';

import { CustomerService } from '../customer.service';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Customer } from '../customer.model';

@Injectable()
export class CustomerEffect {
    constructor(
        private action$: Actions,
        private customerService: CustomerService
    ) { }

    @Effect()
    loadCustomers$: Observable<Action> = this.action$
        .pipe(
            ofType<customerActions.LoadCustomers>(
                customerActions.CustomerActionTypes.LOAD_CUSTOMERS
            ),
            mergeMap((actions: customerActions.LoadCustomers) =>
                this.customerService.getCustomers()
                    .pipe(
                        map((customers: Customer[]) =>
                            new customerActions.LoadCustomersSuccess(customers)
                        ),
                        catchError(err => of(new customerActions.LoadCustomersFail(err)))
                    )
            )
        )
}