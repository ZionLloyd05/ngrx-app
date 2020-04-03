import { Customer } from '../customer.model';
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

// Strongly type actions
export enum CustomerActionTypes {
    LOAD_CUSTOMERS = '[Customer] LOAD Customers',
    LOAD_CUSTOMERS_SUCCESS = '[Customer] LOAD Customers Success',
    LOAD_CUSTOMERS_FAIL = '[Customer] LOAD Customers Fail',
    LOAD_CUSTOMER = '[Customer] LOAD Customer',
    LOAD_CUSTOMER_SUCCESS = '[Customer] LOAD Customer Success',
    LOAD_CUSTOMER_FAIL = '[Customer] LOAD Customer Fail',
    CREATE_CUSTOMER = '[Customer] CREATE Customer',
    CREATE_CUSTOMER_SUCCESS = '[Customer] CREATE Customer Success',
    CREATE_CUSTOMER_FAIL = '[Customer] CREATE Customer Fail',
    UPDATE_CUSTOMER = '[Customer] UPDATE Customer',
    UPDATE_CUSTOMER_SUCCESS = '[Customer] UPDATE Customer Success',
    UPDATE_CUSTOMER_FAIL = '[Customer] UPDATE Customer Fail',
    DELETE_CUSTOMER = '[Customer] DELETE Customer',
    DELETE_CUSTOMER_SUCCESS = '[Customer] DELETE Customer Success',
    DELETE_CUSTOMER_FAIL = '[Customer] DELETE Customer Fail'

}

// customer ACTIONS using action creators
// ============== LOAD ALL =========================================
export class LoadCustomers implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMERS;
}
export class LoadCustomersSuccess implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS;
    constructor(public payload: Customer[]){}
}
export class LoadCustomersFail implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMERS_FAIL;
    constructor(public payload: string) {}
}
// ================================================================

// ================ LOAD SINGLE ===================================
export class LoadCustomer implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMER;
    constructor(public payload: number) {}
}
export class LoadCustomerSuccess implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMER_SUCCESS;
    constructor(public payload: Customer){}
}
export class LoadCustomerFail implements Action {
    readonly type = CustomerActionTypes.LOAD_CUSTOMER_FAIL;
    constructor(public payload: string) {}
}

// =================================================================

// ================ CREATE SINGLE ===================================
export class CreateCustomer implements Action {
    readonly type = CustomerActionTypes.CREATE_CUSTOMER;
    constructor(public payload: Customer) {}
}
export class CreateCustomerSuccess implements Action {
    readonly type = CustomerActionTypes.CREATE_CUSTOMER_SUCCESS;
    constructor(public payload: Customer) {}
}
export class CreateCustomerFail implements Action {
    readonly type = CustomerActionTypes.CREATE_CUSTOMER_FAIL;
    constructor(public payload: string) {}
}

// ================ UPDATE SINGLE ===================================
export class UpdateCustomer implements Action {
    readonly type = CustomerActionTypes.UPDATE_CUSTOMER;
    constructor(public payload: Customer) {}
}
export class UpdateCustomerSuccess implements Action {
    readonly type = CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS;
    constructor(public payload: Update<Customer>) {}
}
export class UpdateCustomerFail implements Action {
    readonly type = CustomerActionTypes.UPDATE_CUSTOMER_FAIL;
    constructor(public payload: string) {}
}

// =================================================================

// ================ DELETE SINGLE ===================================
export class DeleteCustomer implements Action {
    readonly type = CustomerActionTypes.DELETE_CUSTOMER;
    constructor(public payload: number) {}
}
export class DeleteCustomerSuccess implements Action {
    readonly type = CustomerActionTypes.DELETE_CUSTOMER_SUCCESS;
    constructor(public payload: number) {}
}
export class DeleteCustomerFail implements Action {
    readonly type = CustomerActionTypes.DELETE_CUSTOMER_FAIL;
    constructor(public payload: string) {}
}

// =================================================================

// export actions as union of an enum type
export type Action =
LoadCustomers |
LoadCustomersSuccess |
LoadCustomersFail |
LoadCustomer |
LoadCustomerSuccess |
LoadCustomerFail |
CreateCustomer |
CreateCustomerSuccess |
CreateCustomerFail |
UpdateCustomer |
UpdateCustomerSuccess |
UpdateCustomerFail |
DeleteCustomer |
DeleteCustomerSuccess |
DeleteCustomerFail;
