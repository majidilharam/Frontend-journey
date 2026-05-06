function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Isi tugasnya dulu, ya!");
        return;
    }

    let ul = document.getElementById("taskList");
    let li = document.createElement("li");

    // Styling list agar rapi
    li.className = "flex justify-between items-center bg-white p-3 rounded-lg shadow-sm mb-2";

    li.innerHTML = `
        <span class="flex-1 font-medium">${taskText}</span>
        <div class="flex gap-2">
            <button onclick="toggleTask(this)" class="bg-green-500 text-white px-3 py-1 rounded-md cursor-pointer">Selesai</button>
            <button onclick="deleteTask(this)" class="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer">Hapus</button>
        </div>
    `;

    ul.appendChild(li);
    input.value = "";
}

function toggleTask(element) {
    // Mencari elemen <li> (induk terdekat) dari tombol yang diklik
    let li = element.closest('li');
    
    // Menambah/menghapus class 'completed' yang tadi kita buat di CSS
    li.classList.toggle("completed");
}

function deleteTask(element) {
    let li = element.closest('li');
    li.remove();
}