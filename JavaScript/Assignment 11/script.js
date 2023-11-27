const marks = document.getElementById("Marks");
function Marks() {
    let marksEng = parseInt(prompt("Enter English marks (out of 100)", "0"));
    while (marksEng > 100 || isNaN(marksEng)) {
        alert("Enter Valid English Marks");
        marksEng = parseInt(prompt("Enter English marks (out of 100)", "0"));
    }

    let marksMaths = parseInt(prompt("Enter Maths marks (out of 100)", "0"));
    while (marksMaths > 100 || isNaN(marksMaths)) {
        alert("Enter Valid Mathematics Marks");
        marksMaths = parseInt(prompt("Enter Maths marks (out of 100)", "0"));
    }

    let marksUrdu = parseInt(prompt("Enter Urdu marks (out of 100)", "0"));
    while (marksUrdu > 100 || isNaN(marksUrdu)) {
        alert("Enter Valid Urdu Marks");
        marksUrdu = parseInt(prompt("Enter Urdu marks (out of 100)", "0"));
    }

    let marksScience = parseInt(prompt("Enter Science marks (out of 100)", "0"));
    while (marksScience > 100 || isNaN(marksScience)) {
        alert("Enter Valid Science Marks");
        marksScience = parseInt(prompt("Enter Science marks (out of 100)", "0"));
    }

    let marksComputer = parseInt(prompt("Enter Computer marks (out of 100)", "0"));
    while (marksComputer > 100 || isNaN(marksComputer)) {
        alert("Enter Valid Urdu Marks");
        marksComputer = parseInt(prompt("Enter Computer marks (out of 100)", "0"));
    }

    let totalMarks = 500;
    let gainedMarks = marksEng + marksMaths + marksUrdu + marksScience + marksComputer;
    let percentage = gainedMarks * 100 / totalMarks;

    marks.innerHTML = "Your Total Percentage is: " + percentage.toFixed(1) + "%";
    alert("Your Total Percentage is: " + percentage.toFixed(1) + "%");
    document.getElementById("MarksIn").style.display = "block";

    document.getElementById("MarksEng").innerHTML = marksEng;
    document.getElementById("MarksMaths").innerHTML = marksMaths;
    document.getElementById("MarksUrdu").innerHTML = marksUrdu;
    document.getElementById("MarksScience").innerHTML = marksScience;
    document.getElementById("MarksComputer").innerHTML = marksComputer;
    document.getElementById("TotalMarks").innerHTML = marksEng + marksMaths + marksUrdu + marksScience + marksComputer + "/" + totalMarks;

    document.getElementById("Reset").innerHTML = '<button onclick="resetResult()" class="btn btn-success btn-sm text-center">Reset Result</button>';
}

function resetResult() {
    marks.innerHTML = "Click on the &uarr; button to check the percentage";
    document.getElementById("MarksIn").style.display = "none";
}