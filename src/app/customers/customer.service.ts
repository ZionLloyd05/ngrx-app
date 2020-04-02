
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Observer } from 'rxjs';

import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

    constructor(private http: HttpClient) {}
    private customersUrl = 'http://localhost:3000/customers';

    getCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.customersUrl);
    }

    getCustomerById(payload: number): Observable<Customer> {
        return this.http.get<Customer>(`${this.customersUrl}/${payload}`);
    }

    createCustomer(payload: Customer): Observable<Customer> {
        return this.http.post<Customer>(this.customersUrl, payload);
    }

    updateCustomer(customer: Customer): Observable<Customer> {
        return this.http.patch<Customer>(
            `${this.customersUrl}/${customer.id}`,
            customer
        );
    }

    deleteCustomer(payload: number) {
        return this.http.delete(`${this.customersUrl}/${payload}`);
    }
}