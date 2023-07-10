import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import { collection, query, where, onSnapshot } from "firebase/firestore";

export async function get(collection, companyId) {
  const snapshot = await firebase.firestore().collection(collection).where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}


export async function getOrderBy(collection: string, companyId: string, orderBy: string) {
  const snapshot = await firebase.firestore().collection(collection).where('company_id', '==', companyId).orderBy(orderBy, "asc")
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

export async function getWhere(collection: string, companyId: String, param1: string, param2: string,) {
  const snapshot = await firebase
    .firestore()
    .collection(collection)
    .where('company_id', '==', companyId)
    .where(param1, '==', param2)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

////// ----------------------------------------------------------------------------- Именнованные функции



////// ----------------------------- Договоры аренды со статусами ----------------------------- //////

export async function getAllContracts(companyId: string) {
  const snapshot = await firebase.firestore().collection("contracts").where('company_id', '==', companyId).orderBy('contract_number', "desc")
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}


export async function getAvailableCars(companyId: string) {
  const snapshot = await firebase
    .firestore()
    .collection("cars")
    .where("company_id", '==', companyId)
    .where("car_status", '==', "Available")
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

export async function getInRentCars(companyId: string) {
  const snapshot = await firebase
    .firestore()
    .collection("cars")
    .where("company_id", '==', companyId)
    .where("car_status", '==', "InRent")
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

export async function getBookedCars(companyId: string) {
  const snapshot = await firebase
    .firestore()
    .collection("cars")
    .where("company_id", '==', companyId)
    .where("car_status", '==', "Booked")
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}


export async function getInRentCarsContracts(companyId: string) {
  const snapshot = await firebase
    .firestore()
    .collection("contracts")
    .where("company_id", '==', companyId)
    .where("contract_status", '==', "InRent")
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

export async function getBookedCarsContracts(companyId: string) {
  const snapshot = await firebase
    .firestore()
    .collection("contracts")
    .where("company_id", '==', companyId)
    .where("contract_status", '==', "Booked")
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}




////// ----------------------------- Договоры аренды со статусами ----------------------------- //////




////// ----------------------------- Автомобили ----------------------------- //////

export async function getAllCars(companyId: string) {
  const snapshot = await firebase.firestore().collection("cars").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}


export async function getInServiceCars(companyId: string) {
  const snapshot = await firebase
    .firestore()
    .collection("cars")
    .where("company_id", '==', companyId)
    .where("car_status", '==', "Inservice")
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

////// ----------------------------- Автомобили ----------------------------- //////


////// ----------------------------- Staff ----------------------------- //////

export async function getAllStaff(companyId: string) {
  const snapshot = await firebase.firestore().collection("staff").where("company_id", '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}


////// ----------------------------- Staff ----------------------------- //////


////// ----------------------------- Tasks ----------------------------- //////

export async function getAllTasks(companyId: string) {
  const snapshot = await firebase.firestore().collection("tasks").where("company_id", '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

export async function getAllColumns(companyId: string) {
  const snapshot = await firebase.firestore().collection("tasks_columns").where("company_id", '==', companyId).orderBy("created_at", "asc")
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}



// export async function getAllColumns(companyId: string) {
//   const document = await firebase.firestore().collection(companyId).doc("company");
//   const q = query(collection(document, "tasks_columns"));
//   const unsubscribe = onSnapshot(q, (querySnapshot) => {
//     const columns = [];
//     querySnapshot.forEach((doc) => {
//       columns.push(doc.data());
//     });
//     return Promise.all(columns).then(function (snapshot) { // 👈
//       console.log("snapshot", snapshot);
//       return snapshot
//     });
//   });а
// }

// export async function getAllColumns(companyId: string) {
//   const document = await firebase.firestore().collection(companyId).doc("company");
//   var questions = [];
//   onSnapshot(collection(document, "tasks_columns"), (querySnapshot) => {
//     querySnapshot.docs.forEach((doc) => {
//       // if (doc.data() !== null) {
//       questions.push(doc.data());
//       // }
//     });
//   });
//   console.log("questions", questions);
//   return questions;
// }

////// ----------------------------- Tasks ----------------------------- //////


export async function getAllFleets(companyId: string) {
  const snapshot = await firebase.firestore().collection("fleets").where("company_id", '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}



export async function getTariffs(companyId: string) {
  const snapshot = await firebase.firestore().collection("tariffs").where("company_id", '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

export async function getCarsCategory(companyId: string) {
  var query = firebase
    .firestore()
    .collection("carsCategory").where("company_id", '==', companyId)
  return query.get().then(function (querySnapshot) { // 👈
    let promises = []; // 👈
    querySnapshot.forEach(function (doc) {
      promises.push(({
        ...doc.data(),
      }));
    });
    return Promise.all(promises).then(function (snapshot) { // 👈
      return snapshot.map((d) => {
        return { "id": d.id, "name": d.name, "created_at": d.created_at };
      });
    });
  });
}

export async function getCarsStatus() {
  var query = firebase
    .firestore()
    .collection("carsStatuses")
  return query.get().then(function (querySnapshot) { // 👈
    let promises = []; // 👈
    querySnapshot.forEach(function (doc) {
      promises.push(({
        ...doc.data(),
      }));
    });
    return Promise.all(promises).then(function (snapshot) { // 👈
      return snapshot.map((d) => {
        return { "name": d.name };
      });
    });
  });
}

export async function getOwners(companyId: string) {
  var query = firebase
    .firestore()
    .collection("owners").where("company_id", '==', companyId)
  return query.get().then(function (querySnapshot) { // 👈
    let promises = []; // 👈
    querySnapshot.forEach(function (doc) {
      promises.push(({
        ...doc.data(),
      }));
    });
    return Promise.all(promises).then(function (snapshot) { // 👈
      return snapshot.map((d) => {
        return {
          "id": d.id,
          "owner_fullname": d.owner_fullname,
          "owner_form_ownership": d.owner_form_ownership,
          "owner_contract_header": d.owner_contract_header,
          "owner_address": d.owner_address,
          "owner_tin": d.owner_tin,
          "owner_kpp": d.owner_kpp,
          "owner_bank_account": d.owner_bank_account,
          "owner_bank_account_ks": d.owner_bank_account_ks,
          "owner_bank_account_bik": d.owner_bank_account_bik,
          "owner_bank_name": d.owner_bank_name,
        };
      });
    });
  });
}

export async function getCarsBrand() {
  const snapshot = await firebase.firestore().collection(" car_brand")
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}





////// ----------------------------- Clients ----------------------------- //////

export async function getAllClients(companyId: string) {
  const snapshot = await firebase.firestore().collection("clients").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

export async function getClientStatus(companyId: string) {
  const snapshot = await firebase.firestore().collection("clientsStatus").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

export async function getClientCategory(companyId: string) {
  const snapshot = await firebase.firestore().collection("clientsCategory").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

////// ----------------------------- Clients ----------------------------- //////



////// ----------------------------- Fines ----------------------------- //////

export async function getFines(companyId: string) {
  const snapshot = await firebase.firestore().collection("fines").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

////// ----------------------------- Fines ----------------------------- //////


////// ----------------------------- Фотоосмотры ----------------------------- //////

export async function getPhotoRew(companyId: string) {
  const snapshot = await firebase.firestore().collection("photo_inspections").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

////// ----------------------------- Фотоосмотры ----------------------------- //////

////// ----------------------------- Maintenance ----------------------------- //////

export async function getMaintenance(companyId: string) {
  const snapshot = await firebase.firestore().collection("maintenance").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

export async function getCounterparties(companyId: string) {
  const snapshot = await firebase.firestore().collection("counterparties").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

export async function getWarehouse(companyId: string) {
  const snapshot = await firebase.firestore().collection("nomenclature").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}
////// ----------------------------- Maintenance ----------------------------- //////


////// ----------------------------- Тарифы ----------------------------- //////

export async function getAllTariff(companyId) {
  const snapshot = await firebase.firestore().collection("tariffs").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

////// ----------------------------- Тарифы ----------------------------- //////

////// ----------------------------- Staff ----------------------------- //////

export async function getStaff(companyId: string) {
  const snapshot = await firebase.firestore().collection("staff").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

export async function getStaffRoles(companyId: String) {
  const snapshot = await firebase.firestore().collection("staff_roles").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

////// ----------------------------- Staff ----------------------------- //////

////// ----------------------------- AllOwners ----------------------------- //////

export async function getAllOwners(companyId: string) {
  const snapshot = await firebase.firestore().collection("owners").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

////// ----------------------------- AllOwners ----------------------------- //////


////// ----------------------------- cashbox ----------------------------- //////

export async function getCashBox(companyId: string) {
  const snapshot = await firebase.firestore().collection("cashbox").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

////// ----------------------------- cashbox ----------------------------- //////


////// ----------------------------- getItems ----------------------------- //////

export async function getItems(companyId: string) {
  const snapshot = await firebase.firestore().collection("items").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}
////// ----------------------------- getItems ----------------------------- //////

////// ----------------------------- getItems ----------------------------- //////

export async function getProviders(companyId: string) {
  const snapshot = await firebase.firestore().collection("providers").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}
////// ----------------------------- getItems ----------------------------- //////

////// ----------------------------- getItems ----------------------------- //////

export async function getNewAppUsers(companyId: string) {
  const snapshot = await firebase.firestore().collection("requestFromApplication").where('company_id', '==', companyId).orderBy("created_at", "desc")
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}
////// ----------------------------- getItems ----------------------------- //////

////// ----------------------------- getItems ----------------------------- //////

export async function getCompanyFAQ(companyId: string) {
  const snapshot = await firebase.firestore().collection("companyFAQ").where('company_id', '==', companyId).orderBy("number", "asc")
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}
////// ----------------------------- getItems ----------------------------- //////

////// ----------------------------- getItems ----------------------------- //////

export async function getCompanyProfile(companyId: string) {
  const snapshot = await firebase.firestore().collection("companyProfile").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}
////// ----------------------------- getItems ----------------------------- //////



export async function getWhereDEMO(collection: string, companyId: string, param1: string, param2: string,) {
  const snapshot = await firebase
    .firestore()
    .collection(companyId).doc("company")
    .collection(collection)
    .where(param1, '==', param2)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}


export async function getDEMOCONTRACT(companyId: string) {
  const snapshot = await firebase.firestore().collection(companyId).doc("company").collection("contracts").orderBy('contract_number', "desc")
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}



//////------------------------------ЭТО ДЕМО ДОГОВОРЫ УБРАТЬ ПОТОМ //////


////// ----------------------------- getAppPayments ----------------------------- //////

export async function getAppPayments(companyId: string) {
  const snapshot = await firebase.firestore().collection("payments").where('company_id', '==', companyId)
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}
////// ----------------------------- getAppPayments ----------------------------- //////


////// ----------------------------- getContracts ----------------------------- //////

export async function getContracts(companyId: string) {
  const snapshot = await firebase.firestore().collection("contracts").where('company_id', '==', companyId).orderBy('contract_number', "desc")
    .get();
  const items = snapshot.docs.map((doc) => ({
    ...doc.data(),
  }));
  return items;
}

////// ----------------------------- getContracts ----------------------------- //////