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

   let payment = prosesHitung.pembayaran ? "Cash" : "Transfer"

    let persenDiskon = 0
    if (prosesHitung.total >= 200000 && prosesHitung.pembayaran) {
        persenDiskon = 20
    } else if (prosesHitung.total >= 100000 && prosesHitung.pembayaran) {
        persenDiskon = 10
    } else if (prosesHitung.total >= 50000 && prosesHitung.pembayaran) {
        persenDiskon = 5
    } else {
        persenDiskon = 0
    }

    let totalbayar = prosesHitung.total - (prosesHitung.total * persenDiskon / 100)

    return {
        nama: prosesHitung.nama,
        total: prosesHitung.total,
        diskon: persenDiskon ,
        totalbayar: totalbayar,
        pembayaran: payment

    }


}



const renderData = (filter) => {
    const tbody = document.getElementById("tableCustomers")
    tbody.innerHTML = ""

    let filtered = customers.map(hitungTotal)
    if (filter === "cash") {
        filtered = filtered.filter(hasil => hasil.pembayaran === "Cash")
    } if (filter === "transfer") {
        filtered = filtered.filter(hasil => hasil.pembayaran === "Transfer")
    } if (filter === "diskon") {
        filtered = filtered.filter(hasil => hasil.diskon > 0)
    }



    for (let hasil of filtered) {


        tbody.innerHTML += `
    <tr> 
    <td>${hasil.nama}</td>
    <td>${hasil.total}</td>
    <td>${hasil.diskon}%</td>
    <td>${hasil.totalbayar}</td>
    <td>${hasil.pembayaran}</td>
    </tr>`

    }
}


renderData("all")
