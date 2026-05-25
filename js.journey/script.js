
const tambah = document.getElementById("addTask")
const addTask = () => {
    let input = document.getElementById("taskInput")
    let taskInput = input.value
    if(taskInput === ""){
        alert("isi tugas nya dulu")
        return
    }
    
    let ul = document.getElementById("taskList")
    let li = document.createElement("li")

     li.className = "flex justify-between items-center bg-white p-3 rounded-lg shadow-sm mb-2 ";

    li.innerHTML = `
        <span class="flex-1 font-medium">${taskInput}</span>
        <div class="flex gap-2 w-50 justify-end">
            <button onclick="editTask(this)" class="bg-blue-500 text-white p-1 rounded-md cursor-pointer">edit</button>
            <button onclick="toggleTask(this)" class="bg-green-500 text-white p-1 rounded-md cursor-pointer">Selesai</button>
            <button onclick="deleteTask(this)" class="bg-red-500 text-white p-1 rounded-md cursor-pointer">Hapus</button>
        </div>
    `
    ul.appendChild(li)
    input.value = ""
}
tambah.addEventListener("click", addTask)


const toggleTask = (element) => {
    let li = element.closest('li')
    li.classList.toggle("completed")
}

const deleteTask = (element) => {
    let li = element.closest('li')
    li.remove()
}

const editTask = (element) => {
    let li = element.closest("li")
    let span = li.querySelector("span")
    let newTask = span.innerText

    span.innerHTML = ` <input 
            type="text" 
            value="${newTask}"
            class="border-0 px-2 py-1 rounded w-full"
            onkeypress="saveEdit(event, this)"
        >`

}

const saveEdit = (event, element) => {
    
    if(event.key === "Enter"){
        let newValue = element.value
        if(newValue.trim() === ""){
            return
        }
        let span = element.parentElement
        span.innerText = newValue
    }
}
