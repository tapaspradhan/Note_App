const addBtn=document.querySelector("#addBtn")
const main=document.querySelector("#main")

addBtn.addEventListener("click",()=>{
    addNote()
})

const saveNote=()=>{
    const notes=document.querySelector(".note textarea")
    const data=[];
    console.log(notes);
    notes.forEach((note) => {
        data.push(note.value);
    });
    // console.log(note);
    localStorage.setItem("notes",JSON.stringify(data))
}

const addNote=()=>{
    const note=document.createElement("div")
    note.classList.add("note")
    note.innerHTML=`
        <div class="tool">
                <i class="save fa-solid fa-floppy-disk"></i>
                <i class="trash fa-solid fa-trash"></i>
            </div>
            <textarea></textarea>
        </div>
    `;
    note.querySelector(".trash").addEventListener("click",
        function(){
            note.remove()
        }
    )
    note.querySelector(".save").addEventListener("click",
        saveNote()
    )
    main.appendChild(note);
    saveNote()
}
(
    function(){
        const lsNotes=JSON.parse(localStorage.getItem("notes"));
        console.log(lsNotes);
    }
)