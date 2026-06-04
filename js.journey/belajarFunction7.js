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

const makanan = menu.find((item)=>{
    return item.nama === "sop kambing"
})

console.log(makanan)