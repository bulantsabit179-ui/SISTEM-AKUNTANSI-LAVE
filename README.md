# 👗 LAVÉ — Dress Rental & Accounting System

### Sistem Informasi Penyewaan Dress dan Pencatatan Akuntansi

**LAVÉ** adalah aplikasi berbasis web untuk mengelola inventaris dress, pembelian, penyewaan, pembayaran, pengembalian, denda, utang supplier, setoran modal, serta pencatatan dan pelaporan akuntansi secara terintegrasi menggunakan Supabase PostgreSQL.

[![Buka Sistem ÉLAN](https://img.shields.io/badge/✨_KLIK_DI_SINI_UNTUK_BUKA_SISTEM-C08A58?style=for-the-badge&labelColor=3B302A)](https://bulantsabit179-ui.github.io/SISTEM-AKUNTANSI-LAVE/)
---

[![HTML5](https://img.shields.io/badge/HTML5-Frontend-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)

> *"Elegance in Every Rental, Accuracy in Every Transaction."*

---

## 📖 Tentang Proyek

**LAVÉ Dress Rental & Accounting System** merupakan aplikasi yang dirancang untuk membantu pengelolaan operasional usaha penyewaan dress dan pencatatan keuangan secara terstruktur.

Sistem mengintegrasikan master dress, varian ukuran dan warna, unit fisik, pembelian, penyewaan, pembayaran, pengembalian, denda, utang supplier, dan transaksi modal. Proses transaksi penting menggunakan fungsi/RPC database, trigger, dan validasi untuk menjaga konsistensi data operasional serta akuntansi.

## ✨ Fitur Utama

### 📊 Dashboard dan Inventaris
- Menampilkan ringkasan inventaris berdasarkan data database.
- Mengelola ketersediaan dress berdasarkan model, ukuran, warna, dan unit fisik.
- Memisahkan status unit: tersedia, disewa, laundry, perbaikan, tidak layak, dan belum terklasifikasi.
- Mencatat riwayat pergerakan persediaan (*inventory movement*).

### 👗 Master Dress
- Membuat dan mengedit data master dress.
- Mengelola varian ukuran dan warna.
- Menjadi sumber utama informasi model dress.
- Mendukung identifikasi unit fisik dengan kode internal `UNIT-########`.

### 🛒 Pembelian
- Mencatat transaksi pembelian dan detail pembelian.
- Membuat unit persediaan berdasarkan jumlah pembelian melalui alur transaksi database.
- Mengintegrasikan pembelian dengan inventory movement, utang, dan jurnal terkait.
- Menyediakan informasi supplier dan catatan supplier opsional.

### 📝 Penyewaan
- Mencatat transaksi penyewaan dan keterkaitannya dengan unit dress.
- Memilih dan mengunci unit berstatus tersedia sesuai alur RPC database.
- Memperbarui status unit dan mencatat pergerakan persediaan.
- Mendukung pembatalan transaksi melalui alur yang disediakan database.

### 💳 Pembayaran
- Mencatat pembayaran penyewaan sesuai fitur yang tersedia.
- Memvalidasi saldo tagihan yang masih harus dibayar.
- Menghubungkan pembayaran dengan posting jurnal.
- Memproses pembayaran melalui RPC atomik untuk menjaga konsistensi transaksi.

### 🔄 Pengembalian dan Denda
- Mencatat pengembalian berdasarkan transaksi penyewaan.
- Memperbarui status unit berdasarkan kondisi pengembalian.
- Mendukung denda keterlambatan serta kerusakan sesuai alur database.
- Mengintegrasikan pengembalian, denda, pembayaran denda, dan deposit sesuai aturan sistem.

### 🧾 Utang Supplier
- Menyediakan informasi saldo utang pembelian.
- Menampilkan utang positif melalui view yang telah disesuaikan.
- Memproses pembayaran utang melalui RPC atomik.

### 💰 Setoran Modal
- Mencatat setoran modal pemilik sebagai transaksi ekuitas.
- Mengintegrasikan transaksi modal dengan jurnal dan klasifikasi arus kas pendanaan.
- Mendukung validasi role melalui RPC sesuai konfigurasi database.

### 📚 Jurnal dan Buku Besar
- Mendukung posting jurnal dari transaksi terkait.
- Menyediakan penelusuran detail jurnal per akun melalui Buku Besar.
- Mempertahankan data dan proses jurnal meskipun halaman Jurnal Umum terpisah telah dihapus.
- Mendukung validasi integritas jurnal pada database.

### 📈 Laporan Akuntansi
Menyediakan struktur tabel dan view untuk mendukung informasi akuntansi, termasuk utang pembelian, setoran modal, dan klasifikasi arus kas pendanaan. Cakupan laporan mengikuti implementasi database dan frontend yang tersedia.

### 🖼️ Foto Dress
Menggunakan Supabase Storage dengan bucket `dress-photos` untuk penyimpanan foto dress. Kebijakan upload dan delete pada migration membatasi operasi tersebut kepada pengguna terautentikasi dengan role tertentu, sesuai konfigurasi database.

---

## 🛠️ Teknologi

| Layer | Teknologi |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Backend dan API data | Supabase |
| Database | PostgreSQL |
| Penyimpanan foto | Supabase Storage |
| Logika transaksi | PostgreSQL Functions/RPC, Trigger, View |
| Editor | Visual Studio Code |
| Server lokal | Live Server |
| Hosting | GitHub Pages |
| Otomatisasi deployment | GitHub Actions |

---

## 🗄️ Arsitektur Basis Data

Database menggunakan PostgreSQL melalui Supabase.

| Komponen | Fungsi |
|---|---|
| Master dress dan varian | Menyimpan model dress beserta ukuran dan warna |
| `dress_units` | Menyimpan identitas unit fisik dress |
| Purchase dan detail pembelian | Mencatat pembelian dress |
| Rental | Menyimpan transaksi penyewaan |
| Return | Mendukung proses pengembalian dan denda |
| Payments | Mendukung pencatatan pembayaran |
| Supplier dan utang | Mendukung transaksi pembelian dan pembayaran utang |
| Data modal | Mencatat setoran dan reversal modal |
| Jurnal dan akun | Mendukung pencatatan akuntansi |
| Inventory movement | Mencatat pergerakan dan perubahan status unit |
| Settings dan audit log | Mendukung pengaturan serta pencatatan aktivitas |

### Integritas Transaksi

- Pembelian diproses melalui RPC untuk mengintegrasikan data dress, pembelian, detail, movement, dan jurnal terkait.
- Pembayaran dan pengeluaran menggunakan alur atomik dengan validasi.
- Pengembalian memproses perubahan terkait melalui RPC database.
- Penyewaan memilih unit yang tersedia sesuai mekanisme penguncian database.
- Pembayaran utang dan setoran modal menggunakan RPC sesuai validasi yang diterapkan.
- Trigger, foreign key, policy, dan validasi database membantu menjaga konsistensi data.

---

## 📂 Struktur Proyek

```text
LAVE-DRESS-RENTAL/
├── .github/
│   └── workflows/
│       └── pages.yml
├── frontend/
│   ├── html/
│   │   └── index.html
│   ├── js/
│   │   └── config.js
│   └── ...
├── backend/
│   └── database/
│       ├── 01_schema.sql
│       ├── 02_seed.sql
│       ├── 03_functions.sql
│       ├── 04_triggers.sql
│       ├── 05_views.sql
│       ├── ...
│       └── 36_public_access.sql
└── README.md
```

Keterangan:

- `frontend/html/index.html` — halaman awal aplikasi.
- `frontend/js/config.js` — konfigurasi URL Supabase dan publishable/anon key.
- `backend/database/` — kumpulan skrip SQL untuk skema, seed, fungsi, trigger, view, integrasi, dan perbaikan database.
- `.github/workflows/pages.yml` — workflow deployment ke GitHub Pages.
- `README.md` — dokumentasi proyek.

*Catatan: sesuaikan struktur dokumentasi ini jika susunan file aktual di repository berbeda.*

---

## 🚀 Cara Menjalankan

### 1. Persiapan

Siapkan:
- Akun dan project Supabase.
- Visual Studio Code.
- Ekstensi Live Server.
- Repository proyek yang berisi frontend dan migration database.

### 2. Konfigurasi Supabase

1. Buat project di [Supabase](https://supabase.com/).
2. Buka menu **SQL Editor**.
3. Jalankan migration database sesuai urutan pada bagian berikut.
4. Pastikan URL dan key yang digunakan berasal dari project yang sama.

### 3. Urutan Migration Database

Jalankan file SQL secara berurutan:

```text
01_schema.sql
02_seed.sql
03_functions.sql
04_triggers.sql
05_views.sql
06_integration_fix.sql
07_trigger_hotfix.sql
09_accounting_reporting.sql
10_settings_security_inventory.sql
11_auth_rls_hotfix.sql
12_return_penalty_integration.sql
13_capital_contribution.sql
14_purchase_inventory_integration.sql
15_accounting_integrity_hardening.sql
16_purchase_transaction_rpc.sql
17_capital_view_repair.sql
18_atomic_payment_flows.sql
19_supplier_notes.sql
20_capital_posting_rpc.sql
21_capital_role_access.sql
22_settings_rls_repair.sql
23_dress_model_merge_prepare.sql
24_dress_variant_schema_backfill.sql
25_dress_variant_transaction_flows.sql
26_dress_photo_storage.sql
27_purchase_dress_id_ambiguity_fix.sql
28_deposit_return_accounting.sql
29_dress_variant_color.sql
30_variant_inventory_status.sql
31_purchase_payable_integrity.sql
32_dress_physical_units.sql
33_unit_purchase_rental_flows.sql
34_unit_return_inventory_flows.sql
35_fix_v_dress_inventory.sql
36_public_access.sql
```

Nomor `08` tidak tercantum dalam daftar migration proyek.

**Perhatian sebelum migration 23–25 dan 32–35:**
- Backup database terlebih dahulu.
- Hentikan sementara penulisan transaksi selama maintenance.
- Verifikasi model dress duplikat sebelum melakukan penggabungan.
- Cocokkan stok database dengan stok fisik.
- Jalankan migration 32–35 dalam satu jendela maintenance.
- Deploy frontend terbaru setelah migration berhasil.
- Jangan lanjutkan jika migration gagal atau rekonsiliasi stok belum selesai.

### 4. Konfigurasi Frontend

Buka file:

```text
frontend/js/config.js
```

Isi URL Supabase dan publishable/anon key dari project yang digunakan.

**Jangan pernah memasukkan `service_role` key atau secret key ke frontend maupun repository publik.**

### 5. Menjalankan Aplikasi

1. Buka folder proyek di Visual Studio Code.
2. Pastikan konfigurasi Supabase sudah benar.
3. Klik kanan `frontend/html/index.html`.
4. Pilih **Open with Live Server**.
5. Buka URL lokal yang diberikan Live Server.

Jika aplikasi gagal mengambil atau menyimpan data, periksa Console browser, respons request Supabase, konfigurasi URL/key, serta status migration.

---

## 🌐 Deploy ke GitHub Pages

Workflow `.github/workflows/pages.yml` menerbitkan folder `frontend` setiap ada push ke branch `main`.

Langkah deployment:

1. Commit dan push perubahan ke branch `main`.
2. Buka repository GitHub.
3. Pilih **Settings → Pages**.
4. Pilih **GitHub Actions** sebagai source.
5. Periksa hasil deployment pada tab **Actions**.
6. Buka URL GitHub Pages setelah workflow berhasil.

Pastikan path file, referensi aset, dan konfigurasi Supabase sesuai dengan lokasi hosting.

### ⚠️ Peringatan Keamanan Akses Publik

Migration `36_public_access.sql` digunakan untuk skenario database yang sengaja dibuka kepada publik. Berdasarkan konfigurasi proyek, migration ini menonaktifkan RLS dan memberikan role `anon` akses baca/tulis serta eksekusi RPC pada schema `public`.

Akibatnya, siapa pun yang mengetahui URL aplikasi dapat berpotensi membaca, mengubah, atau menghapus data pelanggan dan akuntansi.

- Gunakan migration ini hanya untuk database demo yang memang sengaja dipublikasikan.
- Jangan gunakan konfigurasi ini untuk data privat atau produksi.
- Untuk penggunaan nyata, pertahankan RLS dan gunakan policy dengan hak akses minimum.
- Publishable/anon key bukan pengganti keamanan database.
- Pastikan konfigurasi akses publik sesuai dengan tujuan penggunaan aplikasi.

---

## ⚠️ Catatan Migration dan Inventaris

### Model, Varian, dan Unit Fisik

- Master Dress menjadi tempat utama membuat dan mengedit dress.
- Migration 23 menyiapkan pemetaan model yang diduga duplikat. Kesamaan nama saja tidak cukup untuk menggabungkan model.
- Migration 24 mengalihkan referensi transaksi dan menandai master sumber nonaktif.
- Data tanpa ukuran dimigrasikan menjadi `UNKNOWN` dan tidak dapat disewakan.
- Migration 29 menambahkan warna pada varian. Stok gabungan yang belum diverifikasi harus dicocokkan secara fisik.
- Migration 32 membuat `dress_units` dengan kode internal `UNIT-########`. Cocokkan kode dan tempelkan label pada unit fisik.
- Rental aktif yang tidak dapat dipetakan atau counter yang tidak seimbang dapat menyebabkan migration 32 dibatalkan.

### Akuntansi dan Transaksi

- Pembelian, pembayaran, pengembalian, pembayaran utang, dan setoran modal menggunakan alur database sesuai migration masing-masing.
- Jurnal lama tidak dihapus atau ditulis ulang oleh proses migrasi varian yang dijelaskan.
- Deposit baru dicatat sebagai liabilitas sesuai migration 28. Deposit historis pada rental selesai tidak ditebak atau ditulis ulang sembarangan.
- View utang pembelian menampilkan saldo positif sesuai migration 31.
- Detail jurnal per akun dapat ditinjau melalui Buku Besar.

### Login dan Role

Migration terdahulu menyediakan mekanisme `app_users` dan role `admin`, `staff`, `accounting`, serta `owner`. Beberapa RPC memerlukan pengguna terautentikasi dan validasi role.

Namun, konfigurasi akses publik melalui migration 36 memiliki konsekuensi keamanan berbeda. Jangan menganggap RLS dan validasi akses tetap melindungi database setelah RLS dinonaktifkan. Gunakan konfigurasi akses yang konsisten dengan tujuan aplikasi.

---

## ✅ Pengujian Setelah Deployment

Setelah seluruh migration berhasil dan frontend terbaru diterbitkan, lakukan pengujian pada database yang disiapkan untuk pengujian:

1. **Master Dress** — periksa model dan varian dress.
2. **Purchase** — periksa transaksi pembelian, unit, movement, utang, dan jurnal terkait.
3. **Rental** — sewakan unit yang tersedia dan periksa status unit.
4. **Return** — periksa status unit, denda, dan deposit jika relevan.
5. **Payment** — periksa saldo tagihan, status pembayaran, dan jurnal.
6. **Accounting** — periksa Buku Besar, view utang, dan laporan yang tersedia.
7. **Inventory** — cocokkan jumlah unit dalam database dengan stok fisik.
8. **Security** — pastikan akses sesuai konfigurasi yang dipilih.

Pastikan transaksi tidak menghasilkan unit ganda, pembayaran berlebih, movement tidak konsisten, atau jurnal yang tidak seimbang.

---

## 📝 Pengembangan Selanjutnya

- Backup database sebelum perubahan skema atau migrasi besar.
- Jalankan migration sesuai urutan dan periksa hasil setiap tahap.
- Jangan gunakan frontend lama setelah migration yang mengubah RPC atau struktur transaksi.
- Rekonsiliasi stok digital dengan unit fisik secara berkala.
- Pastikan laporan menggunakan definisi dan sumber data yang konsisten.
- Tinjau RLS, role, Storage, dan akses RPC sebelum menggunakan data nyata.
- Perbarui dokumentasi ketika struktur folder, fitur frontend, atau kebijakan akses berubah.

---

## 👩‍💻 Pengembangan

**LAVÉ — Dress Rental & Accounting System** merupakan proyek sistem informasi berbasis web yang mengintegrasikan operasional penyewaan dress, pengelolaan inventaris fisik, transaksi pembelian, dan pencatatan akuntansi melalui Supabase PostgreSQL.

Proyek ini menerapkan relasi basis data, fungsi/RPC transaksi, trigger, view, dan inventory movement untuk mendukung konsistensi data operasional dan keuangan.

**LAVÉ — Dress Rental & Accounting System**

*Elegance in Every Rental, Accuracy in Every Transaction.*
