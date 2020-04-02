import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const customerRoutes: Routes = [
  {path: '', component: CustomerComponent}
];


@NgModule({
  declarations: [CustomerComponent, CustomerAddComponent, CustomerEditComponent, CustomerListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
