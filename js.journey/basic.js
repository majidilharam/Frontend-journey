const siswa = [
    {
        nama: "andi",
        nilai: 88,
        hadir: true
    },
    {
        nama: "budi",
        nilai: 75,
        hadir: false
    },
    {
        nama: "citra",
        nilai: 95,
        hadir: true
    },
    {
        nama: "deni",
        nilai: 55,
        hadir: true
    },
    {
        nama: "alfa",
        nilai: 50,
        hadir: false
    },
]



const prosesSiswa = (dataSiswa) => {

    let absensi
    switch (dataSiswa.hadir) {
        case true:
            absensi = "Hadir dalam ujian"
            break
        case false:
            absensi = "Tidak hadir dalam ujian"
            break
        default:
            absensi = "Tidak ada keterangan"
    }

    let status
    if (dataSiswa.nilai >= 75 && dataSiswa.hadir) {
        status = "Selamat anda lulus"

    } else if (dataSiswa.nilai >= 75 && !dataSiswa.hadir) {
        status = "Anda dinyatakan tidak lulus"

    } else if (dataSiswa.nilai < 75 && dataSiswa.hadir) {
        status = "Anda harus mengulang"

    } else {
        status = "Anda tidak lulus"
    }

    return {
        Nama: dataSiswa.nama,
        Nilai: dataSiswa.nilai,
        Absensi: absensi,
        Status: status
    }

}
for (let data of siswa) {
    console.log(prosesSiswa(data))
}

