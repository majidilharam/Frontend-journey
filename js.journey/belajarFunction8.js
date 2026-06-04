const menu = [
    {
        nama: "nasi goreng",
        harga: 14000,
        jumlah: 4
    },
    {
        nama: "mei goreng",
        harga: 14000,
        jumlah: 2
    },{
        nama: "kwetiaw",
        harga: 14000,
        jumlah: 1
    },{
        nama: "sate padang",
        harga: 25000,
        jumlah: 3
    },{
        nama: "sop kambing",
        harga: 30000,
        jumlah: 2
    }
]

const daftarMenu = menu.map((item)=>{
    return item.nama
})

const menuMahal = menu.filter((item)=>{
    return item.harga >= 25000
})

const cariMenu = menu.find((item)=>{
    return item.nama === "kwetiaw"
})

const totalBelanja = menu.reduce((acc, item)=>{
    let totalAkhir = item.harga * item.jumlah

    return acc + totalAkhir
}, 0)


console.log(totalBelanja)
console.log(cariMenu)
console.log(menuMahal)
console.log(daftarMenu)