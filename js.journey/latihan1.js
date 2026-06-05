

const produk = [
    {
        nama: "keyboard",
        harga: 250000,
        jumlah: 2,
        kategori: "elektronik"
    },
    {
        nama: "mouse",
        harga: 150000,
        jumlah: 1,
        kategori: "elektronik"
    },
    {
        nama: "buku javascript",
        harga: 100000,
        jumlah: 3,
        kategori: "edukasi"
    },
    {
        nama: "headset",
        harga: 300000,
        jumlah: 1,
        kategori: "elektronik"
    },
]

const user = {nama: "Majid", status: "member"}

const formatRupiah = (angka) => {
     return "RP." + angka.toLocaleString("id-ID")
}

const daftarProduk = produk.map((item)=>{
    return item.nama
})

const produkElektronik = produk.filter((item)=>{
    return  item.kategori === "elektronik"
})


const cariProduk = produk.find((item)=>{
    return item.nama === "headset"
})


const hitungTotal = produk.reduce((acc, item)=>{
let jumlah = item.harga * item.jumlahP
return acc + jumlah
}, 0)

const hitungDiskon = (totalBelanja, user) => {
    let diskon = 0
    if(totalBelanja >= 1000000){
        diskon += 10
    } if (totalBelanja >= 1000000 && user.status === "member"){
        diskon += 5
    }

    let persenDiskon = totalBelanja * diskon / 100
    let hasilDiskon = totalBelanja - persenDiskon

    return {
        diskon: diskon, 
        persenDiskon: persenDiskon, 
        totalAkhir: hasilDiskon
    }
}

const hasilDiskon = hitungDiskon(hitungTotal, user)

const totalBelanja = hitungTotal


const cetakStruk = (daftarProduk, produkElektronik, cariProduk, hitungTotal, hitungDiskon, user) => {
console.log("========== TOKO ONLINE =========")
console.log("")
console.log("Daftar Produk")
for(let i = 0 ; i < daftarProduk.length; i++){
    console.log("_", daftarProduk[i])
}
console.log("")
console.log("Produk Elektronik")
for(let i = 0 ; i < produkElektronik.length; i++){
    console.log("_", produkElektronik[i].nama)
}
console.log("")
console.log("Total Harga: ", formatRupiah(hitungTotal))
console.log("Diskon: ", hitungDiskon.diskon + "%")
console.log("Potongan: ", formatRupiah(hitungDiskon.persenDiskon))
console.log("Harga Akhir: ", formatRupiah(hitungDiskon.totalAkhir))
console.log("Member: ", user.status)
}

cetakStruk(daftarProduk, produkElektronik, cariProduk, hitungTotal, hasilDiskon, user)