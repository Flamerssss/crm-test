import { getMessaging, getToken, onMessage } from "firebase/messaging";
import localforage from "localforage";
import { firebaseConfig } from 'config';

const firebaseCloudMessaging = {
    tokenInlocalforage: async () => {
        const token = await localforage.getItem("fcm_token");
        console.log("fcm_token tokenInlocalforage", token);
        return token;
    },
    onMessage: async () => {
        const messaging = getMessaging();
        onMessage(messaging, (payload) => {
            console.log("Message received. ", payload);
            alert("Notificacion");
        });
    },

    init: async function () {
        try {
            if ((await this.tokenInlocalforage()) !== null) {
                console.log("it already exists");
                return false;
            }
            console.log("it is creating it.");
            //@ts-ignore
            const messaging = getMessaging(firebaseConfig);
            await Notification.requestPermission();
            getToken(messaging, {
                vapidKey:
                    "MyvapidKeyFromFirebase Look for the documentation how to generate this token in Firebase. it is quite simple",
            })
                .then((currentToken) => {
                    console.log("current Token", currentToken);
                    if (currentToken) {
                        // Send the token to your server and update the UI if necessary
                        // save the token in your database
                        //   localforage.setItem("fcm_token", currentToken);
                        console.log("fcm_token", currentToken);
                    } else {
                        // Show permission request UI
                        console.log(
                            "NOTIFICACION, No registration token available. Request permission to generate one."
                        );
                        // ...
                    }
                })
                .catch((err) => {
                    console.log(
                        "NOTIFICACIONAn error occurred while retrieving token . "
                    );
                    console.log(err);
                });
        } catch (error) {
            console.error(error);
        }
    },
};

export { firebaseCloudMessaging };