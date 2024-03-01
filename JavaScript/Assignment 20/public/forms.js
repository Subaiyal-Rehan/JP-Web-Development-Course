// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
    ref,
    set,
    getDatabase,
    push,
    onValue,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkBwZ2tW2rJQoy6knNbgEMNCGyi-J9Y1o",
    authDomain: "assignment-20-jp.firebaseapp.com",
    databaseURL: "https://assignment-20-jp-default-rtdb.firebaseio.com",
    projectId: "assignment-20-jp",
    storageBucket: "assignment-20-jp.appspot.com",
    messagingSenderId: "415084960507",
    appId: "1:415084960507:web:d91338b1ed3ce1a1f72e5e",
    measurementId: "G-KJ2TCEWESQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();


var FormsUl = document.getElementById('FormsUl')
var FormName = document.getElementById('FormName')
var numberOfForms = document.getElementById('numberOfForms')
var noteSpan = document.getElementById('noteSpan')
function allSubmittedNames() {
    var reference = ref(database, "Forms Data/");
    onValue(reference, function (data) {
        console.log(data.val())
        var userData = data.val();
        var namesArray = []
        for (const key in userData) {
            const item = userData[key];
            namesArray.push(item["Full Name"])
        }
        for (let i = 0; i < namesArray.length; i++) {
            numberOfForms.innerHTML = namesArray.length;
            FormsUl.innerHTML += `<li id="FormName" class="my-3">Name: <span>${namesArray[i]}</span></li>`;
        }
        if (namesArray != 0) {
            noteSpan.innerHTML = "Please note: The information submitted is private and confidential. We are unable to disclose their personal information to you."
        }
    });
}
allSubmittedNames();