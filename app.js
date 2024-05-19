async function getToDo() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json()
    console.log("todo",data);
    for(let el of data){
        document.querySelector("tbody").innerHTML += `<tr><td class="fs-4 fw-bold ">${el.id}</td><td class="fs-4">${el.title}</td></tr>`    
    }
}
getToDo()