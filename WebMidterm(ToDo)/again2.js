function addTodo() {
    var input = document.getElementById("todo-input");
    var inputValue = input.value;
    if (inputValue.trim() !== "") {
        var listItem = document.createElement("li");
        listItem.className = "todo-item";
        listItem.textContent = inputValue;

        var editButton = document.createElement("button");
        editButton.textContent = "編輯";
        editButton.onclick = function() {
            var newText = prompt("請輸入新的待辦事項：", inputValue);
            if (newText !== null && newText.trim() !== "") {
                listItem.textContent = newText;
            }
        };

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "刪除";
        deleteButton.onclick = function() {
            listItem.remove();
            checkClearButton();
        };

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

        document.getElementById("todo-list").appendChild(listItem);
        input.value = "";

        checkClearButton();
    }
}

function checkClearButton() {
    var todoList = document.getElementById("todo-list");
    var clearButton = document.getElementById("clear-button");

    if (todoList.children.length > 0 && !clearButton) {
        clearButton = document.createElement("button");
        clearButton.textContent = "清除所有";
        clearButton.id = "clear-button";
        clearButton.onclick = function() {
            todoList.innerHTML = "";
            clearButton.remove();
        };
        todoList.parentNode.insertBefore(clearButton, todoList.nextSibling);
    }
}
