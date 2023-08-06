
let myNote = [];
let Title = [];

function addNotes() {
    let title = document.getElementById('title').value;
    let note = document.getElementById('note').value;

    if (title, note == '') {
        alert('Bitte eine Notiz eintragen!')
    }
    else {
        myNote.push(note);
        Title.push(title);
    }

    document.getElementById('title').value = '';
    document.getElementById('note').value = '';

    let notes = document.getElementById('myNotes');
    notes.innerHTML = '';

    for (let i = 0; i < myNote.length; i++) {
        notes.innerHTML += `
           <div class="note">
             <b>${Title[i]}</b><br>
            ${myNote[i]} </div>
            <button class="button-note" id="d-none" onclick="trash(${i})">Trash</button>`;
    }
}

function trash(i) {
    myNote.splice(i, 1);
    Title.splice(i, 1);
    addNotes();
}
