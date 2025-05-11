# 🎮 Karnaugh Quest

**Karnaugh Quest** adalah game web interaktif berbasis React yang dirancang untuk membantu pengguna belajar menyelesaikan **Peta Karnaugh** melalui pendekatan visual dan gameplay bertingkat. Cocok untuk pelajar, mahasiswa teknik, atau siapa pun yang ingin memahami logika Boolean secara menyenangkan!

---

## 🚀 Fitur Utama

* 🌟 Tiga level kesulitan (Dasar, Menengah, Lanjut)
* 🧠 Soal interaktif dengan sistem nyawa dan verifikasi jawaban
* 🧹 Peta Karnaugh klik-able (X → 0 → 1 → X)
* 📚 Penjelasan materi setelah setiap jawaban benar
* 💾 Progress pemain tersimpan secara lokal (LocalStorage)

---

## 🖥️ Cara Menjalankan di Localhost

1. **Clone repositori ini**

   ```bash
   git clone https://github.com/mirachelcindejona/KarnaughQuest.git
   cd KarnaughQuest
   ```

2. **Install dependencies**
   Pastikan kamu sudah menginstal [Node.js](https://nodejs.org/) dan npm.

   ```bash
   npm install
   ```

3. **Jalankan aplikasinya**

   ```bash
   npm start
   ```

4. **Buka di browser**
   Kunjungi `http://localhost:3000` untuk mulai bermain!

---

## 🧱 Teknologi yang Digunakan

* React.js (Frontend & state management)
* HTML5 + CSS3 (UI & Layout)
* LocalStorage (Simpan progress pemain)
* SVG (Visualisasi gerbang logika)

---

## 📚 Struktur Game

* **Halaman Login** – Input nama pemain dan mulai game
* **Level Gameplay** – Soal logika, peta Karnaugh, verifikasi
* **Tampilan Hasil** – Feedback dan penjelasan konsep
* **Game Over & Menu** – Sistem nyawa & navigasi level

---

## 💡 Konten Belajar

| Level | Topik    | Ukuran Peta | Materi                    |
| ----- | -------- | ----------- | ------------------------- |
| 1     | Dasar    | 2x2         | AND, OR, NOT              |
| 2     | Menengah | 2x4         | NAND, NOR, grouping       |
| 3     | Lanjut   | 4x4         | Optimasi ekspresi Boolean |

---

## ⚠️ Catatan

Game ini masih dalam tahap pengembangan. Beberapa fitur mungkin ditambahkan atau diperbaiki di versi berikutnya.

---

## ✨ Kontribusi

Pull request sangat diterima! Jika kamu punya ide soal, perbaikan tampilan, atau penambahan fitur, silakan kirim kontribusimu.

---

## 📜 Lisensi

Proyek ini menggunakan lisensi MIT. Silakan gunakan dan modifikasi sesuai kebutuhan.
