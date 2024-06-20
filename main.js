// Daftar Khodam Yang Tersedia
const khodamList =[
    "Khodam Macan Putih",
    "Khodam Tuyul Sumbing",
    "Khodam Nini Kar",
    "Khodam Jawir",
    "Khodam Maung Biskuat",
    "Khodam Saun Garage",
    "Khodam Ikan Louhan",
    "Khodam Cacing Pita",
    "Khodam Pablo EsTeler",
    "Khodam Tidak Ada",
];

// Fungsi untuk memilih khodam secara acak
function pilihkhodam(event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = ""; // Menghapus Hasil Sebelumnya
    if (nama) {
        const randomIndex = Math.floor(Math.random() = khodamList.length);
        const khodamTerpilih = khodamList[randomIndex];
        resultDiv.textContent = "Nama Anda Adalah ${"nama"} dan khodam pilihan Anda adalah ${"khodamTerpilih"}.";

        // Menghapus  hasil setelah 5 detik (5000 milidetik)
        setTimeout(() => {
            resultDiv.textContent = "";
        }, 5000);
    } else {
        resultDiv.textContent = "Nama Tidak Boleh Kosong.";
    }
}

// Menambahkan Event Listener ke Form
document.getElementById("khodamform").addEventListener("submit", pilihkhodam);