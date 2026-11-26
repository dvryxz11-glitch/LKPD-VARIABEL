const form = document.getElementById("voucherForm");

const namaInput = document.getElementById("nama");
const kelasInput = document.getElementById("kelas");
const kodeInput = document.getElementById("kode");
const voucherInput = document.getElementById("voucher");
const jumlahInput = document.getElementById("jumlah");
const bayarInput = document.getElementById("bayar");

const rupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = namaInput.value.trim();
    const kelas = kelasInput.value.trim();
    const kode = kodeInput.value.trim();
    const harga = Number(voucherInput.value);
    const jumlah = Number(jumlahInput.value);
    const bayar = Number(bayarInput.value);
    const jenisVoucher = voucherInput.options[voucherInput.selectedIndex].text;

    const subtotal = harga * jumlah;
    const diskon = subtotal * 5 / 100;
    const admin = 1000;
    const total = subtotal - diskon + admin;
    const kembalian = bayar - total;

    document.getElementById("rNama").textContent = nama.toUpperCase();
    document.getElementById("rKelas").textContent = kelas;
    document.getElementById("rKode").textContent = kode;
    document.getElementById("rVoucher").textContent = jenisVoucher;
    document.getElementById("rHarga").textContent = rupiah.format(harga);
    document.getElementById("rJumlah").textContent = jumlah + " Voucher";
    document.getElementById("rSubtotal").textContent = rupiah.format(subtotal);
    document.getElementById("rDiskon").textContent = rupiah.format(diskon);
    document.getElementById("rAdmin").textContent = rupiah.format(admin);
    document.getElementById("rTotal").textContent = rupiah.format(total);
    document.getElementById("rBayar").textContent = rupiah.format(bayar);
    document.getElementById("rKembalian").textContent =
        kembalian >= 0 ? rupiah.format(kembalian) : "Uang kurang " + rupiah.format(Math.abs(kembalian));

    document.getElementById("emptyState").classList.add("hidden");
    document.getElementById("receipt").classList.remove("hidden");
});

form.addEventListener("reset", function() {
    document.getElementById("receipt").classList.add("hidden");
    document.getElementById("emptyState").classList.remove("hidden");
});
