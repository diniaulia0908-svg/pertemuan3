document.getElementById("header-utama").textContent = "Seleksi ID Berhasil";


Array.from(document.getElementsByClassName("produk-item"))
  .forEach(item => {
    item.classList.add("tebal"); // tambah class tebal
    item.textContent = "[UPDATED] " + item.textContent; // tambah prefix
  });


const statusEl = document.querySelector('[data-status="pending"]');
statusEl.style.backgroundColor = "yellow";


document.querySelectorAll("ul li").forEach(li => {
  li.innerHTML = "Konten Baru dari JS"; // isi ulang li
});
