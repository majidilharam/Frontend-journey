const menu = [
    {
        nama: "nasi goreng",
        harga: 25000,
        jumlah: 2
    },
    {
        nama: "mie ayam",
        harga: 20000,
        jumlah: 3
    },
    {
        nama: "es teh manis",
        harga: 5000,
        jumlah: 4
    }
]

const customer = {
    nama: "majid",
    member: true,
    takeaway: false
}

const hitung = (jumlahBelanja) => {
    let jumlah = 0
    for (let i = 0; i < jumlahBelanja.length; i++) {
        jumlah += jumlahBelanja[i].harga * jumlahBelanja[i].jumlah
    }
    return jumlah
}

const hitungPembayaran = (totalBelanja, cust) => {
    const promo = 100000
    const pajak = 11
    const biayaBungkus = 5000
    let diskon = 0
    if (totalBelanja > promo) {
        diskon += 10
    } if (cust.member) {
        diskon += 15
    } else {
        diskon += 5
    }
    let persenDiskon = totalBelanja * diskon / 100
    let hasilDiskon = totalBelanja - persenDiskon

    let persenPajak = hasilDiskon * pajak / 100
    let hasilPajak = hasilDiskon + persenPajak

    let bonus = ""
    if (cust.takeaway) {
        hasilPajak += biayaBungkus
    } if (hasilPajak > 150000) {
        bonus = "dapat free dessert"
    } else {
        bonus = "tidak dapat bonus"
    }

    return {
        totalBayar: formatRupiah(totalBelanja),
        diskon: diskon + "%",
        potonganHarga: formatRupiah(persenDiskon),
        pajak: pajak + "%",
        potonganPajak: formatRupiah(persenPajak),
        totalAkhir: formatRupiah(hasilPajak),
        bonus: bonus
    }
}

const formatRupiah = (angka) => {
    return "RP." + angka.toLocaleString("id-ID")
}

const cetakStruk = (cust, daftarMakanan, totalSemua) => {
    console.log("========= STRUK RESTORAN ==========")
    console.log("")
    console.log("Nama: ", cust.nama)
    console.log("Member: ", cust.member)
    console.log("Takeaway: ", cust.takeaway)
    console.log("")
    console.log("============ DAFTAR MENU ============")
    console.log("")
    for (let i = 0; i < daftarMakanan.length; i++) {
        let item = daftarMakanan[i]
        let subtotal = item.harga * item.jumlah
        console.log(`
${item.nama}
${item.jumlah} X ${formatRupiah(item.harga)}
Subtotal: ${formatRupiah(subtotal)}`)

    }
    console.log("============")
    console.log("")
    console.log("Total: ", totalSemua.totalBayar)
    console.log("Diskon: ", totalSemua.diskon)
    console.log("Potongan Harga: ", totalSemua.potonganHarga)
    console.log("Pajak: ", totalSemua.pajak)
    console.log("Biaya Pajak:", totalSemua.potonganPajak)
    console.log("Total Akhir: ", totalSemua.totalAkhir)
    console.log("Bonus: ", totalSemua.bonus)
}



const jumlahMenu = hitung(menu)
const hasilAkhir = hitungPembayaran(jumlahMenu, customer)
const response = cetakStruk(customer, menu, hasilAkhir)
