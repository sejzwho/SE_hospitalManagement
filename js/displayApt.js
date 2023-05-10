const emailIn = localStorage.getItem("email");

console.log(emailIn);

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

  const name1 = document.getElementById("name");
  const age1 = document.getElementById("age");
  const number1 = document.getElementById("number");
  const gender1 = document.getElementById("gender");
  const doctor1 = document.getElementById("doctor");
  const date1 = document.getElementById("date");

  function getAppointmentByName() {

    const collectionName = "appointments";


  
    db.collection("appointments")
  .where("email", "==", emailIn)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const doctor = data.doctype;
      const name = data.name;
      const date = data.date;
      const age = data.age;
      const gender = data.gender;
      const number = data.number;
      console.log(doctor, name, date, age, gender,number);
      
      name1.value = name;
      age1.value = age;
      number1.value = number;
      gender1.value = gender;
      doctor1.value = doctor;
      date1.value = date;
    });
    
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

  

  

  }

//   const searchBtn = document.getElementById("checkBtn");
//   searchBtn.addEventListener("click", getAppointmentByName);

getAppointmentByName()