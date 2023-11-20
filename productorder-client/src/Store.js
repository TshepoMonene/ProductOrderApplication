import { Customer } from "./Customer";
import { makeAutoObservable } from "mobx";

class Store {
  customer = new Customer();

  constructor() {
    makeAutoObservable(this);
  }

  addCustomer(customer) {
    this.customer = customer;
  }
}

export var store = new Store();
