const addTitle = document.getElementById("addTitle");
const addText = document.getElementById("addText");
const addNoteButton = document.getElementById("addNote");
const notesDiv = document.getElementById("notes");
let notes = [];

//local storage vs session storage
//JSON: js Object Notation
//can send local Storage in form of string oly.

showNotes();

function addNotes() {
  let localStorageNote = localStorage.getItem("notes");
  if (localStorageNote == null) {
    localStorageNote = [];
  } else {
    localStorageNote = JSON.parse(localStorageNote);
  }
  if (addText.value == "") {
    alert("Add your note");
    return;
  }

  const noteObj = {
    title: addTitle.value,
    text: addText.value,
  };
  addTitle.value = "";
  addText.value = "";
  notes.push(noteObj);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}
function showNotes() {
  let notesHTML = "";
  let localStorageNote = localStorage.getItem("notes");
  if (localStorageNote === null) {
    return;
  } else {
    localStorageNote = JSON.parse(localStorageNote);
  }
  for (let i = 0; i < notes.length; i++) {
    console.log(notes[i]);
    notesHTML += `<div class="note">
                <button class="deleteNote" id=${i}onclick="deleteNote(${i})">Delete</button>
                <div class="title">${
                  notes[i].title === "" ? "Note" : notes[i].title
                }</div>
                <div class="text">${notes[i].text}</div>
            </div>`;
  }

  notesDiv.innerHTML = notesHTML;
}
function deleteNote(index) {
  console.log("deleting");
  let localStorageNote = localStorage.getItem("notes");
  if (localStorageNote == null) {
    return;
  } else {
    localStorageNote = JSON.parse(localStorageNote);
  }

  localStorageNote.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}
addNoteButton.addEventListener("click", addNotes);
