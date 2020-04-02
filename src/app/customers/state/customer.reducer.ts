import { Customer } from '../customer.model';
import * as customerActions from './customer.action';
import * as fromRoot from '../../state/app-state';

// const initialState = {
//     customers: [
//         {
//             name: 'John Doe',
//             phone: '3248937482374',
//             address: '123 Sun Street',
//             membership: 'Platinum',
//             Id: 1
//         }
//     ],
//     loading: false,
//     loaded: true
// };

// export function customerReducer(state = initialState, action) {
//     switch (action.type) {
//         case LOAD_CUSTOMERS: {
//             return {
//                 ...state,
//                 loading: true,
//                 loaded: false
//             }
//         }

//         default: {
//             return state;
//         }
//     }
// }

export interface CustomerState {
    customers: Customer[];
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    customers: CustomerState;
}

export const initialState: CustomerState = {
    customers: [],
    loading: false,
    loaded: false,
    error: ''
}

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