const addButton = document.querySelector('#add');


const addNewNote = (text='') =>{
    
    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
    
        <div class="opration">
          <button class="edit"><i class="fas fa-edit"></i></button>
          <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        
        <div class="main"></div>
        <textarea class=""></textarea>
    `;
       note.insertAdjacentHTML('afterbegin',htmlData);
    //    console.log(note);

    // getting the refrences

    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textarea = note.querySelector('.textarea');


    // deleting the note
     delButton.addEventListener('click',() =>{
        note.remove();
     })

       document.body.appendChild(note)

}

addButton.addEventListener('click',() =>{
    addNewNote()
})