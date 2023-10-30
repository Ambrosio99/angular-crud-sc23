import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customers: Customer[] = [];

  constructor(private http: HttpClient) {
    const customer: Customer = {
      id: self.crypto.randomUUID(),
      name: 'Lucas Ambrosio',
      email: 'ambrosio@ada.com',
      dateOfBirth: new Date('1999-06-10'),
    };

    this.customers.push(customer);

    const customer2: Customer = {
      id: self.crypto.randomUUID(),
      name: 'Carlao ADA',
      email: 'carlao@ada.com',
      dateOfBirth: new Date('1984-06-18'),
    };

    this.customers.push(customer2);
  }

  getList(): Customer[] {
    return this.customers;
  }

  getById(id: string) {
    return this.customers.find((customer) => customer.id === id);
  }

  update(customer: Customer): Promise<void> {
    return new Promise((resolve, reject) => {
      let searchCustomer = this.getById(customer.id);

      if (searchCustomer) {
        searchCustomer.name = customer.name;
        searchCustomer.email = customer.email;
        searchCustomer.dateOfBirth = customer.dateOfBirth;
      }
      resolve();
    });
  }

  delete(id: string) {
    this.customers = this.customers.filter((customer) => customer.id !== id);
  }

  create(customer: Customer) {
    let uuid = self.crypto.randomUUID();

    customer.id = uuid;

    this.customers.push(customer);
  }

  getCatFacts() {
    return this.http.get('https://cat-fact.herokuapp.com/facts');
  }
}
