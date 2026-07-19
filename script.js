let hargaProduk = 0;

function pilihProduk(nama, harga, id){

    document.querySelectorAll(".card").forEach(card=>{
        card.classList.remove("selected");
    });

    document.getElementById(id).classList.add("selected");

    document.getElementById("produkDipilih").value = nama;

    document.getElementById("harga").value =
    "Rp " + harga.toLocaleString("id-ID");

    hargaProduk = harga;

    hitungTotal();

    bukaModal();

}

function hitungTotal(){

let jumlah = document.getElementById("jumlah").value;

let total = jumlah * hargaProduk;

document.getElementById("total").value =
"Rp " + total.toLocaleString("id-ID");

}

function bukaModal(){

    document.getElementById("modal").style.display = "flex";

}

function tutupModal(){

    document.getElementById("modal").style.display = "none";

}

function tambahCart(){

    let nama = document.getElementById("produkDipilih").value;

    let jumlah = document.getElementById("jumlah").value;

    let total = document.getElementById("total").value;

    cart.push({

        nama,
        jumlah,
        total

    });

    document.getElementById("jumlahCart").innerHTML = cart.length;

    tampilkanCart();

}

function checkout() {

    let nama = document.getElementById("nama").value;
    let produk = document.getElementById("produkDipilih").value;
    let jumlah = document.getElementById("jumlah").value;
    let total = document.getElementById("total").value;

    if (nama.trim() === "") {
        alert("Silakan masukkan nama terlebih dahulu!");
        return;
    }

    let pesan =
`Halo RPK 👋

Saya ingin memesan parfum.

👤 Nama : ${nama}
🧴 Produk : ${produk}
📦 Jumlah : ${jumlah}
💰 Total : ${total}

Mohon diproses ya, terima kasih.`;

    let nomorWA = "6285165814941";

    let url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");

    tutupModal();

    // Reset Form
    document.getElementById("nama").value = "";
    document.getElementById("produkDipilih").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("jumlah").value = 1;
    document.getElementById("total").value = "";
}