const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.add = function() {
        myLibrary.push([this.title, this.author, this.pages]);
        return myLibrary
    };

    this.removeBook = function(item) {
        let findItem = myLibrary.findIndex(book => book === item);
        myLibrary.splice(findItem, 1);

        return myLibrary;   
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const openFormButton = document.getElementById("openFormButton");
    const closeFormButton = document.getElementById("closeFormButton");
    const popupOverlay = document.getElementById("popupOverlay");
    popupOverlay.style.display = "none";
    openFormButton.addEventListener("click", () => {
        popupOverlay.style.display = "flex";
    });

    closeFormButton.addEventListener("click", () => {
        let form = document.getElementById("popupForm");
        popupOverlay.style.display = "none";
        setTimeout(()=> {
            form.reset();
        });
    });

    // Optionally close the form when clicking outside of it
    popupOverlay.addEventListener("click", (event) => {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = "none";
        }
    });
});

let wordList = []

// Select all radio buttons with the name 'option'
let read = document.querySelectorAll(".radio");

// Add a change event listener to each radio button
read.forEach(radio => {
  radio.addEventListener('change', (event) => {
    // Get the selected radio button
    const selectedRadio = event.target;
    console.log(selectedRadio);
    
    // Get the label text by accessing the text content of the parent label
    const labelText = selectedRadio.value;
    
    wordList.push(labelText);
  });
});


let formSubmit = document.querySelector(".addBook");

formSubmit.addEventListener("click", function(event) {
    event.preventDefault();

    const popupOverlay = document.getElementById("popupOverlay");
    popupOverlay.style.display = "none";
    
    let form = document.getElementById("popupForm");
    let bookTitle = document.querySelector(".bookTitle");
    let bookAuthor = document.querySelector(".bookAuthor");
    let bookPages = document.querySelector(".bookPages");
    
    let store = new Book(bookTitle.value, bookAuthor.value, bookPages.value)
    let storageBook = store.add()

    wordList.push(bookTitle.value, bookAuthor.value, bookPages.value);
    displayBook(wordList); 
    setTimeout(()=> {
        form.reset();
    });

    return storageBook; 
});

function displayBook(infoBook) {
    let bookStore = document.querySelector("#bookStore");

    let parentDiv = document.createElement("div");
    parentDiv.classList.add("parentDiv");
    let paraDiv = document.createElement("div");
    let paragraph1 = document.createElement("p");
    let paragraph2 = document.createElement("p");
    let paragraph3 = document.createElement("p");
    
    paragraph1.classList.add("bookClass1")
    paragraph2.classList.add("bookClass2")
    paragraph3.classList.add("bookClass3")

    let removeBook = document.createElement("button");
    removeBook.textContent = "Remove Book."
    removeBook.classList.add("removeBook")
    let checkButton = document.createElement("button");
    checkButton.classList.add("readButton");
    let checkPara = document.createElement("p");
    checkButton.textContent = `Read: ${infoBook[infoBook.length-4]}.`;
    
    let paraText1 = document.createTextNode(`Title: ${infoBook[infoBook.length-3]}`);
    let paraText2 = document.createTextNode(`Author: ${infoBook[infoBook.length-2]}`)
    let paratext3 = document.createTextNode(`Pages: ${infoBook[infoBook.length-1]}`);

    paragraph1.appendChild(paraText1);
    paragraph2.appendChild(paraText2);
    paragraph3.appendChild(paratext3)
    paraDiv.appendChild(paragraph1);
    paraDiv.appendChild(paragraph2);
    paraDiv.appendChild(paragraph3);
    parentDiv.appendChild(document.createTextNode("Book Details"))
    parentDiv.appendChild(paraDiv);
    checkPara.appendChild(checkButton);
    parentDiv.appendChild(checkPara);
    parentDiv.appendChild(removeBook)
    bookStore.appendChild(parentDiv);  

};


let removemyBook = document.querySelectorAll(".removeBook");
let list = []; let list2 = [];
removemyBook.forEach(button => {
    button.addEventListener("click", (event) => {
        let buttonClicked = event.currentTarget;
        let parentDiv = buttonClicked.closest(".parentDiv");
        let bookClass1 = parentDiv.querySelector(".bookClass1");
        let bookClass2 = parentDiv.querySelector(".bookClass2");
        let bookClass3 = parentDiv.querySelector(".bookClass3");
        list.push(bookClass1.textContent, bookClass2.textContent, bookClass3.textContent);
        for (item in list){
            let word = list[item]; let index = 0; let joinWord = "";
            for(i = 0; i < word.length; i++) {
                if (word[i] === " ") {
                    index +=i+1
                }
                else {
                    if(index > 0) {
                        joinWord += word[i];
                    }  
                }
            }
           
            list2.push(joinWord)
            index = 0
        }
        list.splice(0,);

        let bookToRemove = new Book();
        bookToRemove.removeBook(list2);
        parentDiv.remove();
    
    });
});