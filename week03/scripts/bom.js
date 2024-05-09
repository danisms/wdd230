// Get all html elements needed
const userInput = document.querySelector('#favchap');
const addBtn = document.querySelector('button');
const scriptureList = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    // create a list element
    const newList = document.createElement('li');
    // capitalize the value of the list using a css style rule
    newList.style.textTransform = 'capitalize';
    // create a button element and set it properties
    const delBtn = document.createElement('button')
    delBtn.setAttribute('class', 'del-btn');
    delBtn.textContent = "❌";
    // populate the li elements with the input value
    newList.innerHTML = item;
    newList.append(delBtn);
    scriptureList.appendChild(newList);

    // add an event listener to the delete button
    // this will remove the child element on click
    delBtn.addEventListener('click', () => {
        scriptureList.removeChild(newList);
        deleteChapter(newList.textContent);  // this functions removes the value from the array and from local storage
        userInput.focus();
    })
}

function setChapterList() {
    // clear the current value and replace with the new one
    // localStorage only store string so to store other datatypes, we need to convert it first to string before storing.
    window.localStorage.setItem('favoriteBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(window.localStorage.getItem('favoriteBOMList'));
}

function deleteChapter(chapter) {
    chapter.slice(0, chapter.length - 1);  // remove the last character in the string
    chaptersArray = chaptersArray.filter(value => {
        value != chapter;
    });
    setChapterList();
}

addBtn.addEventListener('click', () => {
    if (userInput.value != "") {
        // display list of chapter
        displayList(userInput.value);
        chaptersArray.push(userInput.value);
        // update localStorage with the new array
        setChapterList();
        // reset userInput
        userInput.value = "";
        userInput.focus();
    }else {
        alert('Please, Enter a chapter.')
        userInput.focus();
    }
})