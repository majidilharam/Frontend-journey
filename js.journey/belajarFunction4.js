const menu = [
    {
        nama: "nasi goreng",
        harga: 14000,
        jumlah: 2
    },
    {
        nama: "mie goreng",
        harga: 15000,
        jumlah: 4
    },
    {
        nama: "ketoprak indomie",
        harga: 20000,
        jumlah: 1
    },
    {
        nama: "sate padang",
        harga: 24000,
        jumlah: 3
    }
]

const daftarMakanan = menu.reduce((acc, item) => {
let jumlahMakanan = item.harga * item.jumlah

return acc + jumlahMakanan

},0)
console.log(daftarMakanan)