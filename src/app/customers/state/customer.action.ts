import { Customer } from '../customer.model';
import { Action } from '@ngrx/store';

// Strongly type actions
export enum CustomerActionTypes {
    LOAD_CUSTOMERS = '[Customer] Load Customer',
    LOAD_CUSTOMERS_SUCCESS = '[Customer] Load Customer Success',
    LOAD_CUSTOMERS_FAIL = '[Customer] Load Customer Fail'

}

// customer actions using action creators
export class LoadCustomers implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMERS;
}
export class LoadCustomersSuccess implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS;
    constructor(public payload:  Customer[]){}
}
export class LoadCustomersFail implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMERS_FAIL;
    constructor(public payload: string) {}
}

// export actions as union of an enum type
export type Action = LoadCustomers | LoadCustomersSuccess | LoadCustomersFail;