  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getFirestore , collection , addDoc , getDocs} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDE6DyPYtLRHgo8M45gVe9HYNmwl8d61Mw",
    authDomain: "my-first-firebase-projec-79ebf.firebaseapp.com",
    projectId: "my-first-firebase-projec-79ebf",
    storageBucket: "my-first-firebase-projec-79ebf.appspot.com",
    messagingSenderId: "321132870262",
    appId: "1:321132870262:web:7fc5bb50204b5055f7fd57",
    measurementId: "G-BNC41QDH2J"
  };

  // Initialize Firebase
  var app = initializeApp(firebaseConfig);
 // Initialize Cloud Firestore and get a reference to the service
  var db = getFirestore(app);

  // console.log(app);
  //method to add function on a button in ES6
  var addDataBtn = document.getElementById("addDataBtn");
  addDataBtn.addEventListener("click",addData);

  var getDataBtn = document.getElementById("getDataBtn");
  getDataBtn.addEventListener("click",getData);


  // console.log(db);
  function addData(){
    var userObj = {
      First_name: "Owais",
      Last_name: "Rafiq",
      age: 18
    }

    console.log(userObj);

    //to add data in firebase use addDoc
    // addDoc(collection(db,"users"),userObj);
  }

addData();  
  

  async function getData(){
    const querySnapshot = await getDocs(collection(db,"users"));
    // console.log("querySnapshot",querySnapshot);
    querySnapshot.forEach(function (doc) {
      console.log(doc.data(), doc.id);
    });
    
  }

  getData();
