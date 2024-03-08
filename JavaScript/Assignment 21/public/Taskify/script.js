import getSignUpUser from "../Sign Up/signUp.js";
import getSignInUser from "../signIn.js";

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
    remove,
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
var modalBtn = document.getElementById("modalButton");
var modalContainer = new bootstrap.Modal(document.getElementById('modalContainer'));

let signInObj = getSignInUser();
let signUpObj = getSignUpUser();
var userObj;

if (Object.keys(signInObj).length !== 0) {
    userObj = signInObj;
} else if (Object.keys(signUpObj).length !== 0) {
    userObj = signUpObj;
} else {
    modalHeading.classList.add('text-danger')
    modalHeading.classList.remove('text-success')
    modalHeading.innerHTML = `Something went Wrong! <i class="fa-solid fa-circle-xmark"></i>`
    modalBody.innerHTML = `We encountered an issue while trying to sign you in. Please try again.`;
    modalContainer.show();
    var modalElement = document.getElementById("modalContainer");
    modalElement.addEventListener('hidden.bs.modal', () => { window.location.href = '../index.html'; });
    window.modalClose = function () { }
}

let userNameSpan = document.getElementById("userNameSpan");
let main = document.getElementById("tasksContainer");

userNameSpan.innerHTML = userObj.userName;

window.signOutUser = function (e) {
    e.preventDefault();
    localStorage.clear()
    modalHeading.classList.add("text-success");
    modalHeading.classList.remove("text-danger");
    modalHeading.innerHTML = `Sign out Successful <i class="fa-solid fa-circle-check"></i>`;
    modalBody.innerHTML = "You have successfully signed out!";
    modalContainer.show();
    var modalElement = document.getElementById("modalContainer");
    modalElement.addEventListener('hidden.bs.modal', () => { window.location.href = '../index.html'; });
    window.modalClose = function () { }
}

window.userProfile = (e) => {
    e.preventDefault();
    document.getElementById('mainContainer').style.display = "none";
    document.getElementById('profileContainer').style.display = "block";

    document.getElementById('UserUL').innerHTML = `
    <li onclick="goBack(event)"><a class="dropdown-item" href="">Go Back</a></li>`


    var childrensTag = document.getElementById('profileContainer').children;
    childrensTag[1].innerHTML = `User Name: ${userObj.userName}`
    childrensTag[2].innerHTML = `Email Address: ${userObj.email}`
    childrensTag[3].innerHTML = `Password: ${userObj.password}`
}

window.goBack = function (e) {
    e.preventDefault();
    document.getElementById('mainContainer').style.display = "block";
    document.getElementById('profileContainer').style.display = "none";

    document.getElementById('UserUL').innerHTML = `
    <li onclick="userProfile(event)"><a class="dropdown-item" href="">Profile</a></li>
    <li class="dropdown-divider"></li>
    <li onclick="signOutUser(event)"><a class="dropdown-item" href="">Sign out</a></li>`
}

var reference = ref(database, `Users/${userObj.id}/Todos/`);
onValue(reference, function name(data) {
    main.innerHTML = "";
    if (data.val() == null) { return; }

    for (let i = 0; i < Object.values(data.val()).length; i++) {
        var div = document.createElement('DIV');
        div.setAttribute('class', 'listContainer bg-logo-black text-white')
        main.appendChild(div);

        var inputList = document.createElement('INPUT');
        inputList.setAttribute('class', 'inputList');
        inputList.setAttribute('type', 'text');
        inputList.setAttribute('value', Object.values(data.val()).reverse()[i].value);
        inputList.disabled = true;
        div.appendChild(inputList);

        var div2 = document.createElement('DIV');
        div2.setAttribute('class', 'btnContainerJava')
        div.appendChild(div2);

        var button2 = document.createElement('BUTTON');
        button2.setAttribute('onclick', 'edit(this)');
        button2.setAttribute('id', Object.values(data.val()).reverse()[i].id);
        button2.setAttribute('class', 'btn btn-success btn-lg');
        var button2Text = document.createTextNode('Edit');
        button2.appendChild(button2Text);
        div2.appendChild(button2);

        var button = document.createElement('BUTTON')
        button.setAttribute('onclick', 'del(this)')
        button.setAttribute('id', Object.values(data.val()).reverse()[i].id)
        button.setAttribute('class', 'btn btn-danger btn-lg')
        var buttonTxt = document.createTextNode('Delete');
        button.appendChild(buttonTxt);
        div2.appendChild(button);
    }
})


window.addTask = function (e) {
    e.preventDefault();
    var input = document.getElementById('addTaskInput');
    var todoObj = { value: input.value, }
    todoObj.id = push(ref(database, `Users/${userObj.id}/Todos/`)).key;
    var reference = ref(database, `Users/${userObj.id}/Todos/${todoObj.id}`);
    set(reference, todoObj)
    input.value = "";
}

window.del = (elem) => { remove(ref(database, `Users/${userObj.id}/Todos/${elem.id}`)) }


window.edit = (elem) => {
    var editVar = elem.parentNode.parentNode.firstChild;
    editVar.disabled = false;
    editVar.style.fontSize = '32px'
    editVar.focus();
    editVar.setSelectionRange(editVar.value.length, editVar.value.length);
    editVar.addEventListener('blur', function () {
        var reference = ref(database, `Users/${userObj.id}/Todos/${elem.id}`);
        set(reference, {
            value: editVar.value,
            id: elem.id
        })
        editVar.disabled = true;
        editVar.style.fontSize = '28px'
    });

    editVar.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) { editVar.blur(); }
    });
}

window.deleteAll = (e) => {
    e.preventDefault();
    if (main.innerHTML == "") {
        modalHeading.classList.remove("text-success");
        modalHeading.classList.add("text-danger");
        modalHeading.innerHTML = `Nothing to Delete`;
        modalBody.innerHTML = "There are currently no tasks to delete. Once you add tasks, you'll be able to delete them.";
        modalContainer.show();
        return window.modalClose = function () { }
    }

    modalHeading.classList.remove("text-success");
    modalHeading.classList.add("text-danger");
    modalHeading.innerHTML = `Confirm Task Deletion`;
    modalBody.innerHTML = "Are you sure you want to delete all of your tasks? This action cannot be undone.";
    modalBtn.innerHTML = "Yes";
    modalContainer.show();
    window.modalClose = function () {
        remove(ref(database, `Users/${userObj.id}/Todos`))
            .then(() => {
                modalHeading.classList.add("text-success");
                modalHeading.classList.remove("text-danger");
                modalHeading.innerHTML = `Task Deleted Successful <i class="fa-solid fa-circle-check"></i>`;
                modalBody.innerHTML = "All tasks have been deleted successfully";
                modalBtn.innerHTML = "Close";
                modalContainer.show();
                main.innerHTML = "";
                window.modalClose = function () { }
            })
            .catch((error) => {
                modalHeading.classList.remove("text-success");
                modalHeading.classList.add("text-danger");
                modalHeading.innerHTML = `Error Deleting Tasks <i class="fa-solid fa-circle-xmark"></i>`;
                modalBody.innerHTML = "An error occurred while deleting your tasks. Please try again later.";
                modalContainer.show();
                window.modalClose = function () { }
            });
    }

}