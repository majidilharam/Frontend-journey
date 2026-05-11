function hitungTotal (harga, jumlah) {
    return harga * jumlah;
}

let totalBurger = hitungTotal(35000, 3)
let totalMinum = hitungTotal(10000, 2)
let totalBayar = totalBurger + totalMinum;

console.log("Total burger:", totalBurger);
console.log("Total minum:", totalMinum);
console.log("Total bayar:", totalBayar);


function hitungDiskon (harga, persen){
    let diskon = harga * persen / 100
    let hargaAkhir = harga - diskon
    return hargaAkhir
}

let hargaBurger = 70000
let hargaSetelahDiskon = hitungDiskon(hargaBurger, 40)

console.log("harga asli:", hargaBurger)
console.log("harga setelah diskon 40%", hargaSetelahDiskon)


let judul = document.getElementById("judul")
let tombol = document.getElementById("tombol")

let teksAwal = judul.textContent
let teksBaru = "hidup jokowi"

tombol.addEventListener("click", function(){
    if (judul.textContent === teksAwal) {
        judul.textContent = teksBaru
    } else 
        judul.textContent = teksAwal
        
})




let angka = 0

let elemenAngka = document.getElementById("angka")
let btnTambah = document.getElementById("btnTambah")
let btnKurang = document.getElementById("btnKurang")
let btnReset = document.getElementById("btnReset")


btnTambah.addEventListener("click", function(){
    angka++ 
    elemenAngka.textContent = angka
})

btnKurang.addEventListener("click", function(){
    angka--
    elemenAngka.textContent = angka
})

btnReset.addEventListener("click", function(){
    angka = 0
    elemenAngka.textContent = angka
})