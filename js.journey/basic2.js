const customers = [
    {
        nama: "Majid",
        total: 200000,
        pembayaran: true
    },
    {
        nama: "Fery",
        total: 150000,
        pembayaran: false
    },
    {
        nama: "Anggoro",
        total: 90000,
        pembayaran: true
    },
    {
        nama: "Alfa",
        total: 50000,
        pembayaran: false
    },
    {
        nama: "Yapi",
        total: 30000,
        pembayaran: true
    },
     {
        nama: "bima",
        total: 130000,
        pembayaran: false
    },
]

const hitungTotal = (prosesHitung) => {

    let payment
    switch (prosesHitung.pembayaran) {
        case true:
            payment = "Cash"
            break
        case false:
            payment = "Transfer"
            break
        default: payment = "tidak ada keterangan"
    }

    let persenDiskon = 0
    if (prosesHitung.total >= 200000 && prosesHitung.pembayaran) {
        persenDiskon = 20
    } else if (prosesHitung.total >= 100000 && prosesHitung.pembayaran) {
        persenDiskon = 10
    } else if (prosesHitung.total >= 50000 && prosesHitung.pembayaran) {
        persenDiskon = 5
    } else (prosesHitung.total)



    let hitungDiskon = prosesHitung.total * persenDiskon / 100
    let hasilDiskon = prosesHitung.total - hitungDiskon
    return {
        nama: prosesHitung.nama,
        diskon: persenDiskon + "%",
        totalbayar: hasilDiskon,
        pembayaran: payment

    }


}

for (let data of customers) {
    console.log(hitungTotal(data))
}
