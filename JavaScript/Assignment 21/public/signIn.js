// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import {
  ref,
  set,
  getDatabase,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHehM5b1kQwInzvK-KaFSbgAgcBHcrVVs",
  authDomain: "assignment-21-jp.firebaseapp.com",
  databaseURL: "https://assignment-21-jp-default-rtdb.firebaseio.com",
  projectId: "assignment-21-jp",
  storageBucket: "assignment-21-jp.appspot.com",
  messagingSenderId: "423334010349",
  appId: "1:423334010349:web:565ffbc04e568a13c2dbe4",
  measurementId: "G-W9R5BPFYGC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
const auth = getAuth();

var modalHeading = document.getElementById("exampleModalLabel");
var modalBody = document.getElementById("exampleModalBody");
var modalContainer = new bootstrap.Modal(
  document.getElementById("modalContainer")
);

var emailAddressInp = document.getElementById("emailAddressInp");
var passwordInp = document.getElementById("passwordInp");
var obj = {};

window.signInForm = function (e) {
  e.preventDefault();

  obj.email = emailAddressInp.value;
  obj.password = passwordInp.value;

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (response) {
      obj.id = response.user.uid;

      var reference = ref(database, `Users/${obj.id}`);
      onValue(reference, (data) => {
        saveObjToStorage(data.val())

        emailAddressInp.value = "";
        passwordInp.value = "";

        modalHeading.classList.add("text-success");
        modalHeading.classList.remove("text-danger");
        modalHeading.innerHTML = `Sign In Successful <i class="fa-solid fa-circle-check"></i>`;
        modalBody.innerHTML = "You have successfully signed in! Welcome back to <b>Taskify</b>";
        modalContainer.show();
        var modalElement = document.getElementById("modalContainer");
        modalElement.addEventListener('hidden.bs.modal', () => { window.location.href = 'Taskify/index.html'; });
        window.modalClose = function () { }
      })
    })
    .catch(function (response) {
      modalHeading.classList.add("text-danger");
      modalHeading.classList.remove("text-success");
      modalHeading.innerHTML = `Something went Wrong! <i class="fa-solid fa-circle-xmark"></i>`;
      if (response.message === "Firebase: Error (auth/invalid-credential).") {
        modalBody.innerHTML = "Authentication failed. Please verify your email and password.";
      } else if (response.message == "Firebase: Error (auth/network-request-failed).") {
        modalBody.innerHTML = "Authentication failed. Please check your internet connection.";
      } else { modalBody.innerHTML = response.message || "Unknown error occurred."; }
      modalContainer.show();
      window.modalClose = function () { }
    });
};
function saveObjToStorage(object) {
  localStorage.setItem('userObject', JSON.stringify(object));
}