
const listBarang = [
    {
     nama: "keyboard",
     jumlah: 4,
     harga: 200000
},
    {
     nama: "mouse",
     jumlah: 2,
     harga: 100000
},
    {
     nama: "monitor",
     jumlah: 1,
     harga: 4000000
},
    {
     nama: "mouse pad",
     jumlah: 1,
     harga: 30000
},
]

const user = {
nama: "majid",
noTlp: 6285719346282,
status: "biasa"
}

const totalBelanja = (hasil) => {
let jumlah = 0 
for(let i = 0; i < hasil.length; i++){
    jumlah += hasil[i].harga * hasil[i].jumlah
}
return jumlah
}

const hitungTotal = (totalBayar, akun) => {
    let diskon = 0 
    if(totalBayar >= 5000000 && akun.status === "member"){
        diskon = 30
    } if (totalBayar >= 5000000 && akun.status !== "member"){
        diskon = 10
    } if (totalBayar < 5000000 && akun.status === "member"){
        diskon = 5
    }
    let persenDiskon = totalBayar * diskon / 100
    let hasilDiskon = totalBayar - persenDiskon

    return {
        jumlahDiskon: diskon +"%",
        potonganharga: persenDiskon, 
        totalBayar,
        pembayaranAkhir: hasilDiskon

    }
}

const invoice = (daftarProduk, daftarPembayaran, member ) => {
    return {
        listProduk: daftarProduk,
        pembayaran: daftarPembayaran,
        status: member
        
    }
}


const hasil = totalBelanja(listBarang)
const diskon = hitungTotal(hasil, user)
const response = invoice(listBarang, diskon, user)

console.log(response)