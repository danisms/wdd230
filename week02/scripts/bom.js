// Get all html elements needed
const userInput = document.querySelector('#favchap');
const addBtn = document.querySelector('button');
const scriptureList = document.querySelector('#list');

addBtn.addEventListener('click', () => {
    if (userInput.value != "") {
        // create a list element
        const newList = document.createElement('li');
        // capitalize the value of the list using a css style rule
        newList.style.textTransform = 'capitalize';
        // create a button element and set it properties
        const delBtn = document.createElement('button')
        delBtn.setAttribute('class', 'del-btn');
        delBtn.textContent = "❌";
        // populate the li elements with the input value
        newList.innerHTML = userInput.value;
        newList.append(delBtn);
        scriptureList.appendChild(newList);

        // add an event listener to the delete button
        // this will remove the child element on click
        delBtn.addEventListener('click', () => {
            scriptureList.removeChild(newList);
            userInput.focus();
            userInput.value = "";
        })

    }else {
        alert('Please, Enter a chapter.')
        userInput.focus();
    }
})