const firebaseConfig = {
    apiKey: "AIzaSyAyThyWBIXQiHIGe9B0V_PjEq_eHWPreRM",
    authDomain: "semedtech-b49de.firebaseapp.com",
    projectId: "semedtech-b49de",
    storageBucket: "semedtech-b49de.appspot.com",
    messagingSenderId: "891896801677",
    appId: "1:891896801677:web:9ee15853f7bec5bd99b5c4",
  };

  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  var auth = firebase.auth();

  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');

  const loginBtn = document.getElementById('login-btn');
  const form = document.getElementById('loginform');

  loginBtn.addEventListener('click', e => {
    const email = emailField.value;
    const password = passwordField.value;
    
    // Sign in with email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User is signed in
        const user = userCredential.user;
        console.log("Log In successful");
        window.location.href = "emailList.html";
        
      })
      .catch((error) => {
        alert("Login failed");
        form.reset();
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        
      });
  });
