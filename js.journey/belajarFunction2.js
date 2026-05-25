const listGame = [
    {
        nama: "fc 26",
        harga: 50000,
        jam: 2
    },
    {
        nama: "gta v",
        harga: 70000,
        jam: 2
    },
    {
        nama: "tekken 6",
        harga: 30000,
        jam: 5
    },
]

const customer = {
    nama: "majid",
    member: false,
    vip: false
}

const hitungRental = (jamRental) => {
    let totalGame = 0
    for (let i = 0; i < jamRental.length; i++) {
        totalGame += jamRental[i].harga * jamRental[i].jam
    }
    return totalGame
}

const hitungDiskon = (rentalDiskon, status) => {

    const promoDiskon = 300000
    const pajak = 11

    let diskon = 0
    if (rentalDiskon >= promoDiskon && status.member && status.vip) {
        diskon = 25
    } else if (rentalDiskon >= promoDiskon && status.member) {
        diskon = 20
    } else if (rentalDiskon >= promoDiskon && !status.member) {
        diskon = 5
    } else if (rentalDiskon < promoDiskon && status.member) {
        diskon = 10
    }
    let persenDiskon = rentalDiskon * diskon / 100
    let hasilDiskon = rentalDiskon - persenDiskon

    let hasilPajak = hasilDiskon * pajak / 100
    let totalAkhir = hasilDiskon + hasilPajak

    let voucher = ""
    if (totalAkhir > promoDiskon) {
        voucher = "dapat voucher 1 jam"
    } else {
        voucher = "tidak dapat voucher"
    }

    return {
        totalBayar: formatRupiah(rentalDiskon),
        totalDiskon: diskon + "%",
        potonganHarga: formatRupiah(persenDiskon),
        hargaDiskon: formatRupiah(hasilDiskon),
        totalPajak: pajak + "%",
        pajak: formatRupiah(hasilPajak),
        hargaAkhir: formatRupiah(totalAkhir),
        voucher

    }

}

const formatRupiah = (angka) => {
    return "Rp" + angka.toLocaleString("id-ID")
}

const invoice = (daftarGame, hasilPembayaran, member) => {

    console.log("======== INVOICE RENTAL ========")
    console.log("")
    console.log("Nama Customer: ", member.nama)
    console.log("Member: ", member.member)
    console.log("Vip: ", member.vip)
    console.log("")
    console.log("========= DAFTAR GAME ========")
    for (let i = 0; i < daftarGame.length; i++) {
        let item = daftarGame[i]
        console.log(`${item.nama} 
${item.jam} x ${formatRupiah(item.harga)}`)
    }
    console.log("===============================")
    console.log("")
    console.log("Total: ", hasilPembayaran.totalBayar)
    console.log("Diskon: ", hasilPembayaran.totalDiskon)
    console.log("Potongan: ", hasilPembayaran.potonganHarga)
    console.log("Pajak: ", hasilPembayaran.totalPajak)
    console.log("Potongan Pajak: ", hasilPembayaran.pajak)
    console.log("Total Akhir: ", hasilPembayaran.hargaAkhir)
    console.log("Voucher: ", hasilPembayaran.voucher)
    return ""

}

const rentalDiskon = hitungRental(listGame)
const hasil = hitungDiskon(rentalDiskon, customer)
const response = invoice(listGame, hasil, customer)
console.log(response)