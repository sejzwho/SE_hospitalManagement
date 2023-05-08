const data = localStorage.getItem("name");
// console.log(data);
var dtype = (document.getElementById("doctortype").textContent = data);



const firebaseConfig = {
  apiKey: "AIzaSyAyThyWBIXQiHIGe9B0V_PjEq_eHWPreRM",
  authDomain: "semedtech-b49de.firebaseapp.com",
  projectId: "semedtech-b49de",
  storageBucket: "semedtech-b49de.appspot.com",
  messagingSenderId: "891896801677",
  appId: "1:891896801677:web:9ee15853f7bec5bd99b5c4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function addData() {

    console.log("function called ")
  const doctype = data;
  const name1 = document.getElementById("name").value;
  const age1 = document.getElementById("age").value;
  const email1 = document.getElementById("email").value;
  const number1 = document.getElementById("number").value;
  const gender1 = document.getElementById("gender").value;
  const allergies1 = document.getElementById("allergies").value;
  const date1 = document.getElementById("date").value;

  console.log("Data to be added: ", {
    doctype: doctype,
    name: name1,
    age: age1,
    email: email1,
    number: number1,
    gender: gender1,
    allergies: allergies1,
    date: date1,
  });

  db.collection("appointments")
    .add({
      doctype: doctype,
      name: name1,
      age: age1,
      email: email1,
      number: number1,
      gender: gender1,
      allergies: allergies1,
      date: date1,
    })
    .then((docRef) => {
      alert("Appointment Booked" );
      document.getElementById("myForm").reset();
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}


const submitBtn = document.getElementById("submitbtn");
submitBtn.addEventListener("click", addData);