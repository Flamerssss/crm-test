
//@ts-nocheck
import { makeAutoObservable } from "mobx";
import userStore from './user_store';
import companyStore from './company_store';
import contractsStore from './contracts_store';
import systemStore from './system_store';
import carStore from './car_store';
import tripsStore from './trips_store';

class RootStore {
  userStore: userStore;
  companyStore: companyStore;
  contractsStore: contractsStore;
  systemStore: systemStore;
  carStore: carStore;
  tripsStore: tripsStore;

  constructor() {
    this.userStore = userStore;
    this.companyStore = companyStore;
    this.contractsStore = contractsStore;
    this.systemStore = systemStore;
    this.carStore = carStore;
    this.tripsStore = tripsStore;

    makeAutoObservable(this);
  }
}

export default RootStore;
