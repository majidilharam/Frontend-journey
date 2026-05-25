

const totalbayar = (hitungTotal) => {

    let persenDiskon = 0
    if (hitungTotal >= 200000) {
        persenDiskon = 20

    } else if (hitungTotal >= 100000) {
        persenDiskon = 10

    } else if (hitungTotal >= 50000) {
        persenDiskon = 5

    }
    const total = hitungTotal - (hitungTotal * persenDiskon / 100)

    let notif
    switch (persenDiskon) {
        case 20:
            notif = "anda mendapatkan diskon 20%"
            break
        case 10:
            notif = "anda mendapatkan diskon 10%, tambah belanja hingga 200000 agar dapat diskon 20%"
            break
        case 5:
            notif = "anda mendapatkan diskon 5%, tambah belanja hingga 110000 agar dapat diskon 10%"
        default:
            notif = "anda tidak dapat diskon, tambah belanja hingga 50000 agar dapat diskon 5%"
    }



    return {
        harga: hitungTotal,
        diskon: persenDiskon + "%",
        hargaAkhir: total,
        notif: notif

    }



}

const response = totalbayar(10000)

console.log(response)