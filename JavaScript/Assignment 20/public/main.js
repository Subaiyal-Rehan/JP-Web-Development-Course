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


var mainForm = document.getElementById('mainForm')
var mainContainer = document.getElementById('mainContainer');
var resultContainer = document.getElementById('resultContainer');
var fullName = document.getElementById('fullName');
var fatherName = document.getElementById('fatherName');
var selectCity = document.getElementById('selectCity');
var selectCourses = document.getElementById('selectCourses');
var EmailAddress = document.getElementById('EmailAddress');
var PhoneNo = document.getElementById('PhoneNo');
var CNIC = document.getElementById('CNIC');
var fatherCNIC = document.getElementById('fatherCNIC');
var dateOfBirth = document.getElementById('dateOfBirth');
var selectGender = document.getElementById('selectGender');
var Address = document.getElementById('Address');
var qualification = document.getElementById('qualification');
var laptop = document.getElementById('laptop');
var picture = document.getElementById('picture');
var invalidCheck = document.getElementById('invalidCheck');
var inputsValueArray = [fullName, fatherName, selectCity, selectCourses, EmailAddress, PhoneNo, CNIC, fatherCNIC, dateOfBirth, selectGender, Address, qualification, laptop, picture];

window.submitBtn = function () {
  for (let i = 0; i < inputsValueArray.length; i++) {
    if (inputsValueArray[i].value === '' || !invalidCheck.checked) {
      return;
    }
  }
  var obj = {
    "Full Name": fullName.value,
    "Father Name": fatherName.value,
    "City": selectCity.value,
    "Course or Event": selectCourses.value,
    "Email Address": EmailAddress.value,
    "Phone No": PhoneNo.value,
    "CNIC": CNIC.value,
    "Father CNIC": fatherCNIC.value,
    "Date of Birth": dateOfBirth.value,
    "Gender": selectGender.value,
    "Address": Address.value,
    "Last Qualification": qualification.value,
    "Do you have a laptop?": laptop.value,
    "Picture": picture.value,
  };

  obj.id = push(ref(database, "Forms Data/")).key;
  const reference = ref(database, `Forms Data/${obj.id}`);
  set(reference, obj);

  var IdModal = document.getElementById('IdModal')
  IdModal.innerHTML = `Your ID is: <strong>${obj.id}</strong><br><span>Note down this ID. You can use it to find your data later.</span>`;

  var submitModal = new bootstrap.Modal(document.getElementById('submitModal'));
  submitModal.show();
}

mainForm.addEventListener('submit', function (event) {
  event.preventDefault();
  for (let i = 0; i < inputsValueArray.length; i++) {
    inputsValueArray[i].value = "";
  }
});

var resulth1 = document.getElementById('resulth1');
var fullNameResult = document.getElementById('fullNameResult');
var fatherNameResult = document.getElementById('fatherNameResult');
var selectCityResult = document.getElementById('selectCityResult');
var selectCoursesResult = document.getElementById('selectCoursesResult');
var EmailAddressResult = document.getElementById('EmailAddressResult');
var PhoneNoResult = document.getElementById('PhoneNoResult');
var CNICResult = document.getElementById('CNICResult');
var fatherCNICResult = document.getElementById('fatherCNICResult');
var dateOfBirthResult = document.getElementById('dateOfBirthResult');
var selectGenderResult = document.getElementById('selectGenderResult');
var AddressResult = document.getElementById('AddressResult');
var qualificationResult = document.getElementById('qualificationResult');
var laptopResult = document.getElementById('laptopResult');
var searchIdInput = document.getElementById('searchIdInput');
var pictureResult = document.getElementById('pictureResult');
var inputsValueArrayResult = [fullNameResult, fatherNameResult, selectCityResult, selectCoursesResult, EmailAddressResult, PhoneNoResult, CNICResult, fatherCNICResult, dateOfBirthResult, selectGenderResult, AddressResult, qualificationResult, laptopResult, pictureResult]

window.searchID = function () {
  for (let i = 0; i < inputsValueArrayResult.length; i++) {
    inputsValueArrayResult[i].value = "";
  }
  mainContainer.classList.add('displayNone');
  resultContainer.classList.remove('displayNone');
  var userId = searchIdInput.value;
  var reference = ref(database, "Forms Data/");
  onValue(reference, function (data) {
    var userData = data.val();
    for (const key in userData) {
      const item = userData[key];
      if (item.id === userId) {
        resulth1.innerHTML = `Hello ${item["Full Name"]}!`
        fullNameResult.value = item["Full Name"];
        fatherNameResult.value = item["Father Name"];
        selectCityResult.value = item["City"];
        selectCoursesResult.value = item["Course or Event"];
        EmailAddressResult.value = item["Email Address"];
        PhoneNoResult.value = item["Phone No"];
        CNICResult.value = item["CNIC"];
        fatherCNICResult.value = item["Father CNIC"];
        dateOfBirthResult.value = item["Date of Birth"];
        selectGenderResult.value = item["Gender"];
        AddressResult.value = item["Address"];
        qualificationResult.value = item["Last Qualification"];
        laptopResult.value = item["Do you have a laptop?"];
        pictureResult.value = item["Picture"];
        break;
      }
      if (item.id !== userId) {
        resulth1.innerHTML = `You have entered an invalid ID!`;
      }
    }
  });
}

window.goBackBtn = function () {
  resultContainer.classList.add('displayNone');
  mainContainer.classList.remove('displayNone');
  for (let i = 0; i < inputsValueArrayResult.length; i++) {
    inputsValueArrayResult[i].value = "";
  }
  searchIdInput.value = "";
}