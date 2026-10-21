/* ==========================================
   RPK - RIZA PARFUM KENDAL
   SCRIPT.JS FINAL
========================================== */

let hargaProduk = 0;

/* ==========================================
   PILIH PRODUK
========================================== */

function pilihProduk(nama, harga, id) {

    document.querySelectorAll(".card").forEach(card => {
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

/* ==========================================
   HITUNG TOTAL
========================================== */

function hitungTotal() {

    const jumlah =
        parseInt(document.getElementById("jumlah").value) || 1;

    const total = jumlah * hargaProduk;

    document.getElementById("total").value =
        "Rp " + total.toLocaleString("id-ID");
}

/* ==========================================
   BUKA MODAL
========================================== */

function bukaModal() {

    document.getElementById("modal").style.display = "flex";

    document.body.style.overflow = "hidden";
}

/* ==========================================
   TUTUP MODAL
========================================== */

function tutupModal() {

    document.getElementById("modal").style.display = "none";

    document.body.style.overflow = "auto";

    document.querySelectorAll(".card").forEach(card => {
        card.classList.remove("selected");
    });
}

/* ==========================================
   CHECKOUT WHATSAPP
========================================== */

function checkout() {

    const nama =
        document.getElementById("nama").value.trim();

    const produk =
        document.getElementById("produkDipilih").value;

    const jumlah =
        document.getElementById("jumlah").value;

    const total =
        document.getElementById("total").value;

    if (!nama) {

        alert("Silakan masukkan nama terlebih dahulu.");

        document.getElementById("nama").focus();

        return;
    }

    const pesan =
`Halo RPK 👋

Saya ingin memesan parfum.

👤 Nama : ${nama}
🧴 Produk : ${produk}
📦 Jumlah : ${jumlah}
💰 Total : ${total}

Mohon diproses ya, terima kasih.`;

    const nomorWA = "6285165814941";

    const url =
        `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");

    resetForm();

    tutupModal();
}

/* ==========================================
   RESET FORM
========================================== */

function resetForm() {

    document.getElementById("nama").value = "";
    document.getElementById("produkDipilih").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("jumlah").value = 1;
    document.getElementById("total").value = "";
}

/* ==========================================
   CLOSE MODAL SAAT KLIK AREA GELAP
========================================== */

window.addEventListener("click", function (e) {

    const modal = document.getElementById("modal");

    if (e.target === modal) {
        tutupModal();
    }

});

/* ==========================================
   ESC UNTUK TUTUP MODAL
========================================== */

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        const modal =
            document.getElementById("modal");

        if (modal.style.display === "flex") {
            tutupModal();
        }
    }

});

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);
        }

    });

},
{
    threshold: 0.15
}

);

cards.forEach(card => {

    observer.observe(card);

});

/* ==========================================
   HEADER SHADOW SAAT SCROLL
========================================== */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow =
            "0 3px 10px rgba(0,0,0,.08)";
    }

});

/* ==========================================
   ACTIVE MENU NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            current &&
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });
});

/* ==========================================
   PRELOAD TOTAL
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    hitungTotal();

});
