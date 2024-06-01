function updateParagraph() {
    var inputText = document.getElementById("inputText").value;
    document.getElementById("displayText").innerText = inputText;
}


function addListItem() {
    var ul = document.getElementById("myList");
    var li = document.createElement("li");
    li.innerText = "Hello";
    ul.appendChild(li);
}

function changeColor(color) {
    document.getElementById("myHeader").style.backgroundColor = color;
}