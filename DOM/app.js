let btnSubmit = document.createElement('button');
document.body.appendChild(btnSubmit);
let btnSubmitText = document.createTextNode('Click for nice message');
btnSubmit.appendChild(btnSubmitText);
btnSubmit.addEventListener('click', function () {
    alert('Some Nice Message');
});


document.getElementById("submitField").addEventListener('click', function () {
    let inputValue = document.getElementById('textField').value;
    alert(inputValue);
});


let colorDiv = document.querySelector('div');
colorDiv.style.height = '30px';
// colorDiv.style.backgroundColor = "blue";
colorDiv.addEventListener('mouseenter', function () {
    colorDiv.style.backgroundColor = "tomato";
});
colorDiv.addEventListener('mouseleave', function () {
    colorDiv.style.backgroundColor = "inherit";
});


let paraClickColor = document.querySelector('p');
paraClickColor.style.fontSize = '2rem'
paraClickColor.addEventListener('click', function () {
    paraClickColor.style.color = getRandomColor();
})

//generates random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let btnAddName = document.createElement('button');
document.body.appendChild(btnAddName);
let btnAddNameText = document.createTextNode('Add My Name');
btnAddName.appendChild(btnAddNameText);

let divSpanContainer = document.createElement('div');
document.body.appendChild(divSpanContainer);

btnAddName.addEventListener('click', function() {
    let spanName = document.createElement('span')
    document.body.appendChild(spanName)
    let spanNameText = document.createTextNode('Sam')
    spanName.appendChild(spanNameText);
    divSpanContainer.appendChild(spanName);
})


let myFriendsUl = document.body.querySelector('ul');
let friendsArray = ['Katie', 'Chase', 'Trey', 'Ryan', 'Devonte', 'Bob', 'Frank', 'Joe', 'Rita', 'Stop'];

let i = 0;
document.getElementById("showFriends").addEventListener('click', function() {
    
    if (i < friendsArray.length) {
        let friendsLi = document.createElement('li');
        myFriendsUl.appendChild(friendsLi);
        let friendsLiText = document.createTextNode(friendsArray[i]);
        friendsLi.appendChild(friendsLiText);
    } else if (i > friendsArray.length) {
        document.getElementById("showFriends").removeEventListener;
    }    
    i++;
})
