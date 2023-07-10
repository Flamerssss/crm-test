import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from 'config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app()
}

export { firebase as default };


// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import { firebaseConfig } from 'config';

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app()
// }
// const storage = firebase.storage();

// export { storage, firebase as default };
