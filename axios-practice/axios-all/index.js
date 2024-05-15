const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios
    .get("https://crudcrud.com/api/e2ad6606e6ac4011895bd9eed2368b8c/todo")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function postTodo() {
    // Write your code here
    axios
      .post("https://crudcrud.com/api/e2ad6606e6ac4011895bd9eed2368b8c/todo", {
        title: "Learn Axios1",
        completed: false,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
}

function putTodo() {
  // Write your code here
  axios
    .put("https://crudcrud.com/api/e2ad6606e6ac4011895bd9eed2368b8c/todo/66438e4d3207ed03e8c939ad",
    {
        title: "Learn Axios",
        completed: true,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function deleteTodo() {
  // Write your code here
  axios
    .delete("https://crudcrud.com/api/e2ad6606e6ac4011895bd9eed2368b8c/todo/66438e4d3207ed03e8c939ad")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
