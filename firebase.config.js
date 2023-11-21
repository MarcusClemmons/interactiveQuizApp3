  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";


  const firebaseConfig = {
    apiKey: "AIzaSyCeP0pmsODLvlauIiZl_nZE9YmeAa-iuzw",
    authDomain: "marcus-quizes.firebaseapp.com",
    projectId: "marcus-quizes",
    storageBucket: "marcus-quizes.appspot.com",
    messagingSenderId: "598780768983",
    appId: "1:598780768983:web:c54d285002b4b1ececb692"
  };
  const app = initializeApp(firebaseConfig);

  export {app}