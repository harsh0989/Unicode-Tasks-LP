let content = document.getElementById("content")

let postsArr = []
let editTitle = document.getElementById("editTitle")
let editBody = document.getElementById("editBody")
let tableBody = document.getElementById("tableBody")

//Fetch and Display Data
let fetchingData = async (postObj, type) => {
  let data = await fetch('https://jsonplaceholder.typicode.com/posts')
  let fetchData = await data.json()

  if (type == "create") {
    fetchData.push(postObj)
    newTitle.value = null;
    newBody.value = null
  }
  displayPost(fetchData)
}
fetchingData();




//displaying the posts
let displayPost = (data) => {
  let str = ""
  tableBody.innerHTML = ""
  data.forEach((element, index) => {
    str += `<tr>
  <th scope="row">${element.id}</th>
  <td>${element.title}</td>
  <td>${element.body}</td> 
  <div id"#btns">
  <td><button class="but" id="edit" onclick="edit(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"/>
  </svg></button>
  
  <button class="but" id="del" onclick="deleted(${index})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
  </svg></button></td> </div>
  </tr>`
  })
  tableBody.innerHTML = str;
}


// taking new post (i)displaying modal
let addBtn = document.querySelector('.addPostBtn')
addBtn.addEventListener("click", addPost)
function addPost() {
  console.log("adding post")
  let modal = document.getElementById("myModal");
  let span = document.getElementsByClassName("close")[0];

  modal.style.display = "block"
  span.onclick = function () {
    modal.style.display = "none";
  }
}


//taking new post (ii)on submitting the entry
let newEntry = () => {
  console.log("submitted")
  let modal = document.getElementById("myModal");
  modal.style.display = "none"
  let newTitle = document.getElementById("newTitle").value
  let newBody = document.getElementById("newBody").value
  console.log(newTitle, newBody)
  postreq()
}


//taking new post (iii)post request
const postreq = async () => {
  let newTitle = document.getElementById("newTitle").value
  let newBody = document.getElementById("newBody").value
  let datafetch = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      title: newTitle,
      body: newBody,
      userId: 1,
    })

  })
  let postData = await datafetch.json()
  fetchingData(postData, "create");
}


//editing a post (i)display modal
const edit = async (index) => {
  document.getElementById("editTitle").value = "",
    document.getElementById("editBody").value = ""
  console.log("edited", index)
  let modal = document.getElementById("editModal");
  let span = document.getElementsByClassName("close")[1];
  modal.style.display = "Block"
  fetch(`https://jsonplaceholder.typicode.com/posts/${index + 1}`)
    .then((response) => response.json())
    .then((json) => {
      document.getElementById("saveBtn").value = json.id
      document.getElementById("editTitle").value = json.title,
        document.getElementById("editBody").value = json.body
    });

  span.onclick = () => {
    modal.style.display = "none";

  }

}

//editing a post (ii)patch request
let patchPost = async (itemIndex) => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${itemIndex + 1}`, {
    method: 'PATCH',
    body: JSON.stringify({
      id: itemIndex,
      title: editTitle.value,
      body: editBody.value,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  let updateData = await response.json()
  console.log(updateData)
}

//editing a post (iii)on submiting the changes
let savechanges = async () => {
  console.log(document.getElementById("saveBtn").value)
  console.log(editTitle.value, editBody.value)
  console.log("saved changes")
  patchPost(document.getElementById("saveBtn").value)
  let modal = document.getElementById("editModal");
  modal.style.display = "none"


}


//deleting a post
const deleted = async (itemIndex) => {
  console.log("deleted", itemIndex)
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${itemIndex}`, {
    method: 'DELETE',
  })
  let deletePost = await response.json()
  console.log(deletePost, itemIndex)
  let data = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  let fetchedPost = await data.json()
  newData = fetchedPost.splice(itemIndex, 1)
  console.log(newData)
  let finalArr = fetchedPost.filter(index => index != itemIndex)
  console.log(finalArr)
  displayPost(finalArr);
}