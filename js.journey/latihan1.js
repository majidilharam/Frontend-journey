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

const formatRupiah = (angka) => {
     return "RP." + angka.toLocaleString("id-ID")
}

const daftarProduk = produk.map((item)=>{
    return item.nama
})

const produkElektronik = produk.filter((item)=>{
    return  item.kategori === "elektornik"
})


const cariProduk = produk.find((item)=>{
    return item.nama === "headset"
})


const hitungTotal = produk.reduce((acc, item)=>{
let jumlah = item.harga * item.jumlah
return acc + jumlah
}, 0)

const totalBelanja = hitungTotal


const cetakStruk = (daftarProduk, produkElektronik, cariProduk, hitungTotal) => {
console.log("========== TOKO ONLINE =========")
console.log("")
console.log("Daftar Produk")
for(let i = 0 ; i < daftarProduk.length; i++){
    console.log("_", daftarProduk[i])
}
}

cetakStruk()