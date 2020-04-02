import { Customer } from '../customer.model';
import * as customerActions from './customer.action';
import * as fromRoot from '../../state/app-state';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerState } from './customer.reducer';


// create Customer state interface
export interface CustomerState extends EntityState<Customer>{
    selectedCustomerId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

// append customer state into global state
export interface AppState extends fromRoot.AppState {
    customers: CustomerState;
}

// customer entity adapter
export const customerAdapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();

export const defaultCustomer: CustomerState = {
    ids: [],
    entities: {},
    selectedCustomerId: null,
    loading: false,
    loaded: false,
    error: ''
}

// initial customer state
export const initialState = customerAdapter.getInitialState(defaultCustomer);
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
                return customerAdapter.addAll(action.payload, {
                    ...state,
                    loading: false,
                    loaded: true,
                });
            }
            case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_FAIL: {
                return {
                    ...state,
                    entities: {},
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
    customerAdapter.getSelectors().selectAll
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