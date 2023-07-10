import { makeAutoObservable, observable } from "mobx";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

class UserStore {
    @observable userId: String;
    @observable user_company_id: String;
    constructor() {
        this.getuser();
        makeAutoObservable(this);
    }


    getuser = async () => {
        return firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.userId = user.uid
                console.log(user.uid);
            } else {
                console.log('User is missing');
            }
        });
    }

}

const userStore = new UserStore();
export default userStore;


// import { makeAutoObservable, observable } from "mobx";
// import { fetchWhere } from '@/utils/db_service_dev';
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";

// class UserStore {
//     @observable userId: String;
//     @observable user_company_id: String;
//     constructor() {
//         this.getuser();
//         makeAutoObservable(this);
//     }


//     getuser = async () => {
//         return firebase.auth().onAuthStateChanged(async (user) => {
//             if (user) {
//                 this.userId = user.uid
//                 // await this.fetchOneStaff(user.uid)
//                 console.log(user.uid);
//             } else {
//                 console.log('User is missing');
//             }
//         });
//     }

//     fetchOneStaff = async (id: String) => {
//         fetchWhere("/staff/one/uid/", id)
//             .then((data) => {
//                 this.user_company_id = data.data['company_id'];
//                 console.log('USER STORE company_id', data.data['company_id']);
//             });
//     };

// }

// const userStore = new UserStore();
// export default userStore;
