// Variáveis globais para cada atividade
let students = [];
let cart = [];
let books = [];
let tasks = [];

// Gerenciamento de Alunos
function addStudent() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  if (name && age) {
    students.push({ name, age });
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    listStudents();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function listStudents() {
  const studentList = document.getElementById("studentList");
  studentList.innerHTML = "";
  students.forEach((student) => {
    const li = document.createElement("li");
    li.textContent = `${student.name} (${student.age} anos)`;
    studentList.appendChild(li);
  });
}

// Loja de Produtos
function addProduct() {
  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;

  if (product && quantity && price) {
    cart.push({
      product,
      quantity: parseInt(quantity),
      price: parseFloat(price),
    });
    document.getElementById("product").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
    listCart();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function listCart() {
  const cartList = document.getElementById("cart");
  const totalElem = document.getElementById("total");
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - ${
      item.quantity
    } x R$${item.price.toFixed(2)} = R$${(item.quantity * item.price).toFixed(
      2
    )}`;
    cartList.appendChild(li);
    total += item.quantity * item.price;
  });

  totalElem.textContent = `Total: R$${total.toFixed(2)}`;
}

// Biblioteca de Livros
function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  if (title && author) {
    books.push({ title, author });
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    listBooks();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function listBooks() {
  const bookList = document.getElementById("bookList");
  const bookCount = document.getElementById("bookCount");
  bookList.innerHTML = "";
  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} - ${book.author}`;
    bookList.appendChild(li);
  });
  bookCount.textContent = `Total de livros: ${books.length}`;
}

// Gerenciador de Tarefas
function addTask() {
  const taskText = document.getElementById("task").value;
  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    document.getElementById("task").value = "";
    listTasks();
  } else {
    alert("Por favor, preencha o campo da tarefa.");
  }
}

function listTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.className = task.completed ? "completed" : "";

    li.onclick = () => {
      tasks[index].completed = !tasks[index].completed;
      listTasks();
    };

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.onclick = (e) => {
      e.stopPropagation();
      tasks.splice(index, 1);
      listTasks();
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  });
}
