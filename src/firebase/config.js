import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALDR_UXPS1axYGmc2SJvdoX1hgExlhs1M",
  authDomain: "appbase-abfea.firebaseapp.com",
  projectId: "appbase-abfea",
  storageBucket: "appbase-abfea.appspot.com",
  messagingSenderId: "709246852923",
  appId: "1:709246852923:web:75a8dd92883030ff32211e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const firestore = getFirestore(app);
enableIndexedDbPersistence(firestore)
.catch((err) => {
  if (err.code === "failed-precondition") {
    console.error(
      "Multiple tabs open, persistence can only be enabled in one tab at a time."
    );
  } else if (err.code === "unimplemented") {
    console.error(
      "The current browser does not support all of the features required to enable persistence"
    );
  }
});

export { app, auth, firestore };
