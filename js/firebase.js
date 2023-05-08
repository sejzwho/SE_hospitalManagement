const firebaseConfig = {
    apiKey: "AIzaSyAyThyWBIXQiHIGe9B0V_PjEq_eHWPreRM",
    authDomain: "semedtech-b49de.firebaseapp.com",
    projectId: "semedtech-b49de",
    storageBucket: "semedtech-b49de.appspot.com",
    messagingSenderId: "891896801677",
    appId: "1:891896801677:web:9ee15853f7bec5bd99b5c4",
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

// Initialize Firebase Authentication
const auth = firebase.auth();

// Get the appointment list div
const appointmentList = document.getElementById("appointment-list");


auth.onAuthStateChanged((user) => {
    if (user) {
      // User is logged in
      db.collection("appointments").get()
        .then((querySnapshot) => {
          let html = "<ul>";
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            const email = data.email;
            html += `<li><a href="appointment.html?email=${email}">${email}</a></li>`;
          });
          html += "</ul>";
          appointmentList.innerHTML = html;
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    } else {
      // User is not logged in
      window.location.replace("login.html");
    }
  });
  
  // Logout function
  function logout() {
    auth.signOut()
      .then(() => {
        window.location.replace("login.html");
      })
      .catch((error) => {
        console.log(error);
      });
  }