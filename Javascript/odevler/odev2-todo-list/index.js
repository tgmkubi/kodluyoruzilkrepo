document.addEventListener("DOMContentLoaded", function () {
    const todoInputDOM = document.getElementById("todoInput");
    const addTodoDOM = document.getElementById("addTodo");
    const ulDOM = document.getElementById("todo-list");

    // Local storage'dan kayıtlı todoları listele
    const todosList = JSON.parse(localStorage.getItem("todos"));
    if (todosList && todosList.length !== 0) {
        todosList.forEach(todo => {
            const liDOM = createTodoElement(todo);
            ulDOM.appendChild(liDOM);
        });
    }

    addTodoDOM.addEventListener("click", addTodo);
    ulDOM.addEventListener("click", deleteTodo); // "Sil" butonunu dinlemek için <ul> öğesini dinleyin

    function createTodoElement(todoText) {
        const liDOM = document.createElement("li");
        liDOM.className = "list-group-item d-flex justify-content-between align-items-center";
        liDOM.innerHTML = `
            ${todoText}
            <button type="button" class="btn btn-danger delete-todo" style="width: 10%">Sil</button>
        `;
        return liDOM;
    }

    function addTodo() {
        const todoText = todoInputDOM.value.trim();
        if (todoText !== "") {
            const liDOM = createTodoElement(todoText);
            ulDOM.appendChild(liDOM);

            // Local Storage'a ekle
            let todos = JSON.parse(localStorage.getItem("todos")) || [];
            todos.push(todoText);
            localStorage.setItem("todos", JSON.stringify(todos));

            // Toast message göster
            displayToastMessage(todoText, "ekleme işlemi");

            todoInputDOM.value = ""; // Ekledikten sonra input'u temizle
        }
    }

    function deleteTodo(event) {
        if (event.target.classList.contains("delete-todo")) {
            const todoItemText = event.target.parentNode.firstChild.textContent.trim();

            // Seçilen todo'nun metnini local storage'dan kaldır
            let todos = JSON.parse(localStorage.getItem("todos")) || [];
            const index = todos.indexOf(todoItemText);
            if (index !== -1) {
                todos.splice(index, 1);
                localStorage.setItem("todos", JSON.stringify(todos));
            }

            // Öğeyi DOM'dan kaldır
            event.target.parentNode.remove();

            // Toast message göster
            displayToastMessage(todoItemText, "silme işlemi");
        }
    }
});

function displayToastMessage(message, type) {
    const toastDOM = createToastElement(message, type);
    const toastContainerDOM = document.getElementById("toast-container");
    toastContainerDOM.append(toastDOM);

    // Bootstrap toast örneğini al ve göster
    const toastBootstrap = new bootstrap.Toast(toastDOM, { delay: 3000 });
    toastBootstrap.show();

    // Toast gizlendikten sonra DOM'dan sil
    toastDOM.addEventListener('hidden.bs.toast', function () {
        toastDOM.parentNode.removeChild(toastDOM);
    });
}

function createToastElement(message, type) {
    const toastContainer = document.createElement("div");
    toastContainer.className = "toast";
    toastContainer.setAttribute("role", "alert");
    toastContainer.setAttribute("aria-live", "assertive");
    toastContainer.setAttribute("aria-atomic", "true");

    const toastInnerHtml = `
        <div class="toast-header">
            <strong class="me-auto">Todo List</strong>
            <small>${type}</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">${message}</div>
    `;
    toastContainer.innerHTML = toastInnerHtml;

    return toastContainer;
}
