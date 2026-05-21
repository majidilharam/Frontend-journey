const tombol =
    document.getElementById("addBtn")

const hitungTotal = () => {
    let totalBelanja =
        document.getElementById("belanja").value

    let diskon
    if (totalBelanja >= 200000) {
        diskon = 20
    } else if (totalBelanja >= 100000) {
        diskon = 10
    } else if (totalBelanja >= 50000) {
        diskon = 5
    }

    let hargaDiskon = totalBelanja * diskon / 100
    let hargaSetelahDiskon = totalBelanja - hargaDiskon

    let notif
    switch (diskon) {
        case 20:
            notif = "Anda mendapatkan diskon 20%"
            break
        case 10:
            notif = "Tambah belanja hingga 200000 agar mendapatkan diskon 20%"
            break
        case 5:
            notif = "Tambah belanja hingga 100000 agar mendapatkan diskon 10%"
            break
        default:
            notif = "Tambah belanja hingga 500000 agar mendapatkann diskon 5%"
    }

    let hasil =
        document.getElementById("hasil")

    hasil.innerHTML =
        `<p>Diskon: ${diskon}% </p>
        <p> Harga Potongan: ${hargaDiskon}  </p>
    <p> Total Bayar:  ${hargaSetelahDiskon} </p>
    <p> ${notif} </p>`

}
tombol.addEventListener("click", hitungTotal) 