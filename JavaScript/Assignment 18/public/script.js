// var main = document.getElementById("main");
// function createElem() {
//     var div = document.createElement('DIV');
//     div.setAttribute('class', 'listContainer')
//     main.appendChild(div);

//     var input = document.getElementById('input');
//     var para = document.createElement('P');
//     para.setAttribute('class', 'para');
//     var paraTxt = document.createTextNode(input.value);
//     para.appendChild(paraTxt);
//     div.appendChild(para);

//     var div2 = document.createElement('DIV');
//     div2.setAttribute('class', 'btnContainerJava')
//     div.appendChild(div2);

//     var button2 = document.createElement('BUTTON');
//     button2.setAttribute('onclick', 'edit(this)');
//     button2.setAttribute('id', 'editBtn');
//     var button2Text = document.createTextNode('Edit');
//     button2.appendChild(button2Text);
//     div2.appendChild(button2);

//     var button = document.createElement('BUTTON')
//     button.setAttribute('onclick', 'del(this)')
//     var buttonTxt = document.createTextNode('Delete');
//     button.appendChild(buttonTxt);
//     div2.appendChild(button);
// }

// function del(elem) {
//     var deleteVar = elem.parentNode.parentNode;
//     deleteVar.remove()
// }

// function edit(elem) {
//     var editVar = elem.parentNode.parentNode.firstChild;
//     var userValue = prompt(`Previous: ${editVar.innerHTML}`, editVar.innerHTML)
//     editVar.innerHTML = userValue;
// }

// function deleteAll() {
//     main.innerHTML = '';
//     document.getElementById('input').value = '';
// }



var main = document.getElementById("main");
var inputList;
function createElem() {
    var div = document.createElement('DIV');
    div.setAttribute('class', 'listContainer')
    main.appendChild(div);

    var input = document.getElementById('input');
    inputList = document.createElement('INPUT');
    inputList.setAttribute('class', 'inputList');
    inputList.setAttribute('type', 'text');
    inputList.setAttribute('value', input.value);
    inputList.disabled = true;
    div.appendChild(inputList);

    var div2 = document.createElement('DIV');
    div2.setAttribute('class', 'btnContainerJava')
    div.appendChild(div2);

    var button2 = document.createElement('BUTTON');
    button2.setAttribute('onclick', 'edit(this)');
    button2.setAttribute('id', 'editBtn');
    var button2Text = document.createTextNode('Edit');
    button2.appendChild(button2Text);
    div2.appendChild(button2);

    var button = document.createElement('BUTTON')
    button.setAttribute('onclick', 'del(this)')
    var buttonTxt = document.createTextNode('Delete');
    button.appendChild(buttonTxt);
    div2.appendChild(button);
}

function del(elem) {
    var deleteVar = elem.parentNode.parentNode;
    deleteVar.remove()
}

function edit(elem) {
    var editVar = elem.parentNode.parentNode.firstChild;
    var userValue = editVar.value;
    editVar.disabled = false;
    editVar.style.fontSize = '32px'
    editVar.focus();
    editVar.setSelectionRange(userValue.length, userValue.length);
    editVar.addEventListener('blur', function () {
        editVar.disabled = true;
        editVar.style.fontSize = '28px'
    });
    editVar.addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            editVar.disabled = true;
            editVar.style.fontSize = '28px'
        }
    });
}

function deleteAll() {
    main.innerHTML = '';
    document.getElementById('input').value = '';
}