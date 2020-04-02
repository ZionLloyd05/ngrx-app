import { Customer } from '../customer.model';
import * as customerActions from './customer.action';
import * as fromRoot from '../../state/app-state';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerState } from './customer.reducer';


// create Customer state interface
export interface CustomerState {
    customers: Customer[];
    loading: boolean;
    loaded: boolean;
    error: string;
}

// append customer state into global state
export interface AppState extends fromRoot.AppState {
    customers: CustomerState;
}

// initial customer state
export const initialState: CustomerState = {
    customers: [],
    loading: false,
    loaded: false,
    error: ''
}


// create customer reducer
export function customerReducer(
    state = initialState,
    action: customerActions.Action): CustomerState {
        switch (action.type) {
            case customerActions.CustomerActionTypes.LOAD_CUSTOMERS: {
                return {
                    ...state,
                    loading: true
                };
            }
            case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS: {
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    customers: action.payload
                };
            }
            case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_FAIL: {
                return {
                    ...state,
                    loading: false,
                    loaded: true,
                    error: action.payload
                };
            }
            default: {
                return state;
            }
        }
}

// Selectors
const getCustomerFeatureState = createFeatureSelector<CustomerState>(
    'customers'
);

export const getCustomers = createSelector(
    getCustomerFeatureState,
    (state: CustomerState) => state.customers
);

export const getCustomersLoading = createSelector(
    getCustomerFeatureState,
    (state: CustomerState) => state.loading
);

export const getCustomersLoaded = createSelector(
    getCustomerFeatureState,
    (state: CustomerState) => state.loaded
);

export const getError = createSelector(
    getCustomerFeatureState,
    (state: CustomerState) => state.error
);