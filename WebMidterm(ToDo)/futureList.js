function addTodo() {
    var input = document.getElementById("todo-input");
    var inputValue = input.value;
    if (inputValue.trim() !== "") {
        var listItem = document.createElement("li");
        listItem.className = "todo-item";
        listItem.innerHTML =
            inputValue + '<div class="button-container"><button onclick="editTodo(element)">編輯</button><button onclick="deleteTodo()">刪除</button></div>'
        '<div class="clearAll"><button onclick="clearTodos()">清空全部紀錄</button>';
        document.getElementById("todo-list").appendChild(listItem);
        input.value = "";

    }
}

function editTodo(inputValue) {
    var newText = prompt("請輸入新的待辦事項：", inputValue.parentNode.firstChild.textContent);
    if (newText !== null) {
        inputValue.parentNode.firstChild.textContent = newText;
    }
}
function deleteTodo(element) {
    element.parentNode.remove("todo-item");

}

function clearTodos() {
    var list = document.getElementById("todo-list");
    list.innerHTML = "";
}
