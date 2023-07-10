importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: 'AIzaSyDJAgxLNJyYZxtu9i4P5YLK_jPuLUDyzog',
    authDomain: 'carcrm-dd2cf.firebaseapp.com',
    //   databaseURL: 'https://project-id.firebaseio.com',
    projectId: 'carcrm-dd2cf',
    storageBucket: 'carcrm-dd2cf.appspot.com',
    messagingSenderId: '492664200504',
    appId: '1:492664200504:web:3e78facadfacc18ed6f5cd',
    //   measurementId: 'G-measurement-id',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();



messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});