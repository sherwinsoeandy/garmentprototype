/*
 * Inventory Konveksi - versi dasar
 * Penyimpanan: localStorage browser (belum menggunakan database/server).
 */

const STORAGE_KEY = 'konveksi_inventory_basic_v1';
const pageTitles = {
  dashboard: 'Dashboard',
  items: 'Master Barang',
  inbound: 'Barang Masuk',
  conversion: 'Konversi Batch',
  sales: 'Penjualan / Barang Keluar',
  history: 'Riwayat Transaksi'
};

// Interface translations. English is the default; Chinese uses Traditional Chinese (zh-TW).
const LANGUAGE_STORAGE_KEY = 'konveksi_inventory_language_v1';
const UI_TRANSLATIONS = {
  "Dashboard": {
    "en": "Dashboard",
    "zh-TW": "儀表板",
    "tl": "Dashboard"
  },
  "Master Barang": {
    "en": "Item Catalog",
    "zh-TW": "商品清單",
    "tl": "Listahan ng mga Item"
  },
  "Barang Masuk": {
    "en": "Stock In",
    "zh-TW": "入庫",
    "tl": "Pagpasok ng Stock"
  },
  "Konversi Batch": {
    "en": "Batch Conversion",
    "zh-TW": "批次轉換",
    "tl": "Batch Conversion"
  },
  "Penjualan / Barang Keluar": {
    "en": "Sales / Stock Out",
    "zh-TW": "銷售／出庫",
    "tl": "Benta / Paglabas ng Stock"
  },
  "Riwayat Transaksi": {
    "en": "Transaction History",
    "zh-TW": "交易紀錄",
    "tl": "Kasaysayan ng Transaksyon"
  },
  "Inventory sederhana": {
    "en": "Simple inventory",
    "zh-TW": "簡易庫存管理",
    "tl": "Simpleng imbentaryo"
  },
  "TRANSAKSI STOK": {
    "en": "INVENTORY",
    "zh-TW": "庫存交易",
    "tl": "IMBENTARYO"
  },
  "Tips penggunaan": {
    "en": "Usage tips",
    "zh-TW": "使用提示",
    "tl": "Mga tip sa paggamit"
  },
  "Catat setiap barang masuk, konversi, dan penjualan agar jumlah stok selalu terbarui.": {
    "en": "Record every stock-in, conversion, and sale to keep inventory quantities up to date.",
    "zh-TW": "記錄每筆入庫、轉換及銷售，讓庫存數量保持最新。",
    "tl": "Itala ang bawat pagpasok ng stock, conversion, at benta upang laging updated ang bilang ng imbentaryo."
  },
  "Versi dasar · Penyimpanan lokal browser": {
    "en": "Basic version · Browser local storage",
    "zh-TW": "基本版本 · 瀏覽器本機儲存",
    "tl": "Pangunahing bersyon · Lokal na storage ng browser"
  },
  "SISTEM PENCATATAN STOK": {
    "en": "INVENTORY MANAGEMENT",
    "zh-TW": "庫存管理系統",
    "tl": "PAMAMAHALA NG IMBENTARYO"
  },
  "Inventory Konveksi": {
    "en": "Garment Inventory",
    "zh-TW": "成衣庫存管理",
    "tl": "Imbentaryo ng Damit"
  },
  "Starter project untuk pengembangan awal": {
    "en": "Starter project for initial development",
    "zh-TW": "初期開發用起始專案",
    "tl": "Starter project para sa paunang development"
  },
  "Language": {
    "en": "Language",
    "zh-TW": "語言",
    "tl": "Wika"
  },
  "Pilih bahasa": {
    "en": "Select language",
    "zh-TW": "選擇語言",
    "tl": "Pumili ng wika"
  },
  "Jenis bahan baku": {
    "en": "Material types",
    "zh-TW": "原料種類",
    "tl": "Mga uri ng materyales"
  },
  "Jenis produk jadi": {
    "en": "Finished product types",
    "zh-TW": "成品種類",
    "tl": "Mga uri ng tapos na produkto"
  },
  "Stok menipis": {
    "en": "Low stock",
    "zh-TW": "低庫存",
    "tl": "Mababa ang stock"
  },
  "Transaksi bulan ini": {
    "en": "Transactions this month",
    "zh-TW": "本月交易",
    "tl": "Mga transaksyon ngayong buwan"
  },
  "Jenis bahan terdaftar": {
    "en": "Registered material types",
    "zh-TW": "已登記原料種類",
    "tl": "Mga nakarehistrong materyales"
  },
  "Jenis produk terdaftar": {
    "en": "Registered product types",
    "zh-TW": "已登記成品種類",
    "tl": "Mga nakarehistrong produkto"
  },
  "Perlu diperiksa": {
    "en": "Needs attention",
    "zh-TW": "需要留意",
    "tl": "Kailangang tingnan"
  },
  "Barang masuk, konversi, dan penjualan": {
    "en": "Stock-in, conversions, and sales",
    "zh-TW": "入庫、轉換及銷售",
    "tl": "Pagpasok ng stock, conversion, at benta"
  },
  "Stok perlu diperhatikan": {
    "en": "Stock requiring attention",
    "zh-TW": "需留意的庫存",
    "tl": "Stock na kailangang bantayan"
  },
  "barang": {
    "en": "items",
    "zh-TW": "項商品",
    "tl": "item"
  },
  "Nama barang": {
    "en": "Item name",
    "zh-TW": "商品名稱",
    "tl": "Pangalan ng item"
  },
  "Jenis": {
    "en": "Type",
    "zh-TW": "類型",
    "tl": "Uri"
  },
  "Stok saat ini": {
    "en": "Current stock",
    "zh-TW": "目前庫存",
    "tl": "Kasalukuyang stock"
  },
  "Batas minimum": {
    "en": "Minimum level",
    "zh-TW": "最低庫存量",
    "tl": "Minimum na antas"
  },
  "Status": {
    "en": "Status",
    "zh-TW": "狀態",
    "tl": "Status"
  },
  "Bahan baku": {
    "en": "Raw material",
    "zh-TW": "原料",
    "tl": "Hilaw na materyales"
  },
  "Produk jadi": {
    "en": "Finished product",
    "zh-TW": "成品",
    "tl": "Tapos na produkto"
  },
  "Aman": {
    "en": "In stock",
    "zh-TW": "充足",
    "tl": "Sapat ang stock"
  },
  "Menipis": {
    "en": "Low",
    "zh-TW": "偏低",
    "tl": "Mababa"
  },
  "Habis": {
    "en": "Out of stock",
    "zh-TW": "缺貨",
    "tl": "Ubos na"
  },
  "Tanpa kode": {
    "en": "No code",
    "zh-TW": "無代碼",
    "tl": "Walang code"
  },
  "Belum ada stok yang menipis": {
    "en": "No low-stock items",
    "zh-TW": "目前沒有低庫存商品",
    "tl": "Walang item na mababa ang stock"
  },
  "Barang dengan stok di bawah batas minimum akan muncul di bagian ini.": {
    "en": "Items at or below their minimum stock level will appear here.",
    "zh-TW": "庫存低於或等於最低庫存量的商品會顯示在此處。",
    "tl": "Lalabas dito ang mga item na umabot o bumaba sa minimum na stock level."
  },
  "Aktivitas terakhir": {
    "en": "Recent activity",
    "zh-TW": "最近活動",
    "tl": "Mga kamakailang aktibidad"
  },
  "transaksi": {
    "en": "transactions",
    "zh-TW": "筆交易",
    "tl": "transaksyon"
  },
  "Belum ada transaksi": {
    "en": "No transactions yet",
    "zh-TW": "尚無交易紀錄",
    "tl": "Wala pang transaksyon"
  },
  "Transaksi yang kamu simpan akan muncul di sini.": {
    "en": "Saved transactions will appear here.",
    "zh-TW": "已儲存的交易會顯示在此處。",
    "tl": "Lalabas dito ang mga na-save na transaksyon."
  },
  "Mulai dari sini:": {
    "en": "Get started:",
    "zh-TW": "從這裡開始：",
    "tl": "Magsimula rito:"
  },
  "buka menu": {
    "en": "open the",
    "zh-TW": "開啟",
    "tl": "buksan ang"
  },
  "untuk mendaftarkan bahan baku dan produk jadi terlebih dahulu. Masukkan stok awal saat membuat barang.": {
    "en": "to register raw materials and finished products first. Enter the opening stock when creating an item.",
    "zh-TW": "先登記原料與成品。新增商品時請輸入期初庫存。",
    "tl": "upang irehistro muna ang mga materyales at tapos na produkto. Ilagay ang panimulang stock kapag gumagawa ng item."
  },
  "Daftar barang": {
    "en": "Item list",
    "zh-TW": "商品清單",
    "tl": "Listahan ng mga item"
  },
  "Daftarkan setiap bahan baku dan produk jadi yang akan dicatat stoknya.": {
    "en": "Register each raw material and finished product whose stock you want to track.",
    "zh-TW": "登記所有需要追蹤庫存的原料與成品。",
    "tl": "Irehistro ang bawat materyal at tapos na produktong susubaybayan ang stock."
  },
  "Tambah barang baru": {
    "en": "Add new item",
    "zh-TW": "新增商品",
    "tl": "Magdagdag ng bagong item"
  },
  "Isi data dengan lengkap": {
    "en": "Complete all required details",
    "zh-TW": "請完整填寫資料",
    "tl": "Punan nang kumpleto ang mga detalye"
  },
  "Jenis barang *": {
    "en": "Item type *",
    "zh-TW": "商品類型 *",
    "tl": "Uri ng item *"
  },
  "Nama barang *": {
    "en": "Item name *",
    "zh-TW": "商品名稱 *",
    "tl": "Pangalan ng item *"
  },
  "Kode barang (opsional)": {
    "en": "Item code (optional)",
    "zh-TW": "商品代碼（選填）",
    "tl": "Item code (opsyonal)"
  },
  "Satuan *": {
    "en": "Unit *",
    "zh-TW": "單位 *",
    "tl": "Yunit *"
  },
  "Stok awal *": {
    "en": "Opening stock *",
    "zh-TW": "期初庫存 *",
    "tl": "Panimulang stock *"
  },
  "Batas minimum stok": {
    "en": "Minimum stock level",
    "zh-TW": "最低庫存量",
    "tl": "Minimum na antas ng stock"
  },
  "Isi 0 jika tidak perlu peringatan stok menipis.": {
    "en": "Enter 0 if you do not need low-stock alerts.",
    "zh-TW": "若不需要低庫存提醒，請輸入 0。",
    "tl": "Ilagay ang 0 kung hindi kailangan ng alerto sa mababang stock."
  },
  "＋ Simpan Barang": {
    "en": "＋ Save Item",
    "zh-TW": "＋ 儲存商品",
    "tl": "＋ I-save ang Item"
  },
  "Daftar barang terdaftar": {
    "en": "Registered items",
    "zh-TW": "已登記商品",
    "tl": "Mga rehistradong item"
  },
  "item": {
    "en": "items",
    "zh-TW": "項商品",
    "tl": "item"
  },
  "Pilih barang": {
    "en": "Select an item",
    "zh-TW": "選擇商品",
    "tl": "Pumili ng item"
  },
  "stok": {
    "en": "stock",
    "zh-TW": "庫存",
    "tl": "stock"
  },
  "Catat barang masuk": {
    "en": "Record stock received",
    "zh-TW": "記錄入庫",
    "tl": "Itala ang pagpasok ng stock"
  },
  "Gunakan saat kain atau bahan lain diterima dari supplier.": {
    "en": "Use this when fabric or other materials are received from a supplier.",
    "zh-TW": "收到供應商送來的布料或其他原料時使用。",
    "tl": "Gamitin ito kapag tumanggap ng tela o iba pang materyales mula sa supplier."
  },
  "Belum ada bahan baku. Tambahkan bahan terlebih dahulu di menu": {
    "en": "No raw materials yet. Add materials first in the",
    "zh-TW": "尚無原料。請先前往",
    "tl": "Wala pang materyales. Magdagdag muna sa menu na"
  },
  "Bahan yang diterima *": {
    "en": "Material received *",
    "zh-TW": "收到的原料 *",
    "tl": "Materyal na natanggap *"
  },
  "Jumlah masuk *": {
    "en": "Quantity received *",
    "zh-TW": "入庫數量 *",
    "tl": "Dami ng natanggap *"
  },
  "Tanggal diterima *": {
    "en": "Date received *",
    "zh-TW": "收貨日期 *",
    "tl": "Petsa ng pagtanggap *"
  },
  "Supplier (opsional)": {
    "en": "Supplier (optional)",
    "zh-TW": "供應商（選填）",
    "tl": "Supplier (opsyonal)"
  },
  "Catatan (opsional)": {
    "en": "Notes (optional)",
    "zh-TW": "備註（選填）",
    "tl": "Mga tala (opsyonal)"
  },
  "Nama toko / supplier": {
    "en": "Store / supplier name",
    "zh-TW": "商店／供應商名稱",
    "tl": "Pangalan ng tindahan / supplier"
  },
  "Nomor nota atau keterangan": {
    "en": "Receipt number or description",
    "zh-TW": "收據編號或說明",
    "tl": "Numero ng resibo o paglalarawan"
  },
  "Setelah disimpan, stok bahan yang dipilih akan": {
    "en": "After saving, the selected material stock will",
    "zh-TW": "儲存後，所選原料庫存將會",
    "tl": "Pagkatapos i-save, ang stock ng napiling materyal ay"
  },
  "bertambah otomatis": {
    "en": "increase automatically",
    "zh-TW": "自動增加",
    "tl": "awtomatikong madaragdagan"
  },
  "Simpan Barang Masuk": {
    "en": "Save Stock In",
    "zh-TW": "儲存入庫",
    "tl": "I-save ang Stock In"
  },
  "Bahan": {
    "en": "Material",
    "zh-TW": "原料",
    "tl": "Materyal"
  },
  "Produk": {
    "en": "Product",
    "zh-TW": "產品",
    "tl": "Produkto"
  },
  "Jumlah": {
    "en": "Quantity",
    "zh-TW": "數量",
    "tl": "Dami"
  },
  "Hapus baris": {
    "en": "Remove row",
    "zh-TW": "刪除列",
    "tl": "Alisin ang row"
  },
  "Buat batch konversi": {
    "en": "Create conversion batch",
    "zh-TW": "建立轉換批次",
    "tl": "Gumawa ng conversion batch"
  },
  "Catat bahan yang digunakan dan produk yang berhasil dihasilkan dalam satu batch.": {
    "en": "Record the materials used and products produced in a single batch.",
    "zh-TW": "在同一批次中記錄使用的原料及產出的成品。",
    "tl": "Itala sa iisang batch ang mga ginamit na materyales at mga produktong nagawa."
  },
  "Catatan:": {
    "en": "Notes:",
    "zh-TW": "備註：",
    "tl": "Mga tala:"
  },
  "jumlah bahan dan hasil produk diisi berdasarkan kondisi aktual. Tidak harus mengikuti rasio tetap. Satu batch dapat menggunakan beberapa bahan dan menghasilkan beberapa jenis produk.": {
    "en": "Enter actual material usage and product output. No fixed ratio is required. One batch can use multiple materials and produce multiple product types.",
    "zh-TW": "請依實際情況輸入原料用量及成品數量，不需遵循固定比例。單一批次可使用多種原料並產出多種成品。",
    "tl": "Ilagay ang aktuwal na dami ng materyales at produktong nagawa. Walang kailangang sunding nakapirming ratio. Maaaring gumamit ang isang batch ng maraming materyales at gumawa ng iba't ibang produkto."
  },
  "Pastikan Master Barang sudah memiliki minimal satu": {
    "en": "Make sure the Item Catalog contains at least one",
    "zh-TW": "請確認商品清單中至少有一項",
    "tl": "Tiyaking may kahit isang"
  },
  "dan satu": {
    "en": "and one",
    "zh-TW": "以及一項",
    "tl": "at isang"
  },
  "sebelum membuat batch.": {
    "en": "before creating a batch.",
    "zh-TW": "後再建立批次。",
    "tl": "bago gumawa ng batch."
  },
  "Tanggal konversi *": {
    "en": "Conversion date *",
    "zh-TW": "轉換日期 *",
    "tl": "Petsa ng conversion *"
  },
  "Contoh: Batch produksi kaos minggu pertama": {
    "en": "Example: First-week T-shirt batch",
    "zh-TW": "例如：第一週 T 恤批次",
    "tl": "Halimbawa: Batch ng T-shirt sa unang linggo"
  },
  "A. Bahan yang digunakan": {
    "en": "A. Materials used",
    "zh-TW": "A. 使用的原料",
    "tl": "A. Mga materyales na ginamit"
  },
  "＋ Tambah bahan": {
    "en": "＋ Add material",
    "zh-TW": "＋ 新增原料",
    "tl": "＋ Magdagdag ng materyal"
  },
  "B. Produk yang dihasilkan": {
    "en": "B. Products produced",
    "zh-TW": "B. 產出的成品",
    "tl": "B. Mga produktong nagawa"
  },
  "＋ Tambah produk": {
    "en": "＋ Add product",
    "zh-TW": "＋ 新增產品",
    "tl": "＋ Magdagdag ng produkto"
  },
  "Saat batch disimpan, stok bahan akan": {
    "en": "When the batch is saved, material stock will",
    "zh-TW": "儲存批次時，原料庫存將會",
    "tl": "Kapag na-save ang batch, ang stock ng materyales ay"
  },
  "berkurang": {
    "en": "decrease",
    "zh-TW": "減少",
    "tl": "mababawasan"
  },
  "dan stok produk jadi akan": {
    "en": "and finished product stock will",
    "zh-TW": "而成品庫存將會",
    "tl": "at ang stock ng tapos na produkto ay"
  },
  "bertambah": {
    "en": "increase",
    "zh-TW": "增加",
    "tl": "madaragdagan"
  },
  "secara bersamaan": {
    "en": "at the same time",
    "zh-TW": "同時更新",
    "tl": "nang sabay"
  },
  "Simpan Batch Konversi": {
    "en": "Save Conversion Batch",
    "zh-TW": "儲存轉換批次",
    "tl": "I-save ang Conversion Batch"
  },
  "Catat penjualan / barang keluar": {
    "en": "Record a sale / stock out",
    "zh-TW": "記錄銷售／出庫",
    "tl": "Itala ang benta / paglabas ng stock"
  },
  "Gunakan saat produk jadi dijual atau dikirim kepada pelanggan.": {
    "en": "Use this when finished products are sold or delivered to a customer.",
    "zh-TW": "成品售出或交付給客戶時使用。",
    "tl": "Gamitin ito kapag ibinenta o inihatid na sa customer ang tapos na produkto."
  },
  "Belum ada produk jadi. Tambahkan produk melalui menu": {
    "en": "No finished products yet. Add a product through the",
    "zh-TW": "尚無成品。請先前往",
    "tl": "Wala pang tapos na produkto. Magdagdag muna sa menu na"
  },
  "lalu lakukan konversi atau isi stok awalnya.": {
    "en": "then convert materials or enter its opening stock.",
    "zh-TW": "再進行原料轉換或輸入期初庫存。",
    "tl": "pagkatapos ay mag-convert ng materyales o ilagay ang panimulang stock nito."
  },
  "Produk yang keluar *": {
    "en": "Product leaving stock *",
    "zh-TW": "出庫產品 *",
    "tl": "Produktong ilalabas *"
  },
  "Jumlah keluar *": {
    "en": "Quantity out *",
    "zh-TW": "出庫數量 *",
    "tl": "Dami ng ilalabas *"
  },
  "Tanggal *": {
    "en": "Date *",
    "zh-TW": "日期 *",
    "tl": "Petsa *"
  },
  "Pelanggan (opsional)": {
    "en": "Customer (optional)",
    "zh-TW": "客戶（選填）",
    "tl": "Customer (opsyonal)"
  },
  "Nama pelanggan": {
    "en": "Customer name",
    "zh-TW": "客戶名稱",
    "tl": "Pangalan ng customer"
  },
  "Nomor pesanan / keterangan": {
    "en": "Order number / description",
    "zh-TW": "訂單編號／說明",
    "tl": "Numero ng order / paglalarawan"
  },
  "Stok produk akan": {
    "en": "Product stock will",
    "zh-TW": "產品庫存將會",
    "tl": "Ang stock ng produkto ay"
  },
  "berkurang otomatis": {
    "en": "decrease automatically",
    "zh-TW": "自動減少",
    "tl": "awtomatikong mababawasan"
  },
  "setelah transaksi disimpan. Pesanan pelanggan belum mengurangi stok sampai barang benar-benar keluar.": {
    "en": "after the transaction is saved. A customer order does not reduce stock until the goods actually leave inventory.",
    "zh-TW": "交易儲存後自動更新。客戶下單不會立即扣庫存，直到商品實際出庫才會扣減。",
    "tl": "pagkatapos i-save ang transaksyon. Hindi mababawasan ang stock sa order ng customer hangga't hindi aktuwal na nailalabas ang mga produkto."
  },
  "Simpan Barang Keluar": {
    "en": "Save Stock Out",
    "zh-TW": "儲存出庫",
    "tl": "I-save ang Stock Out"
  },
  "jenis bahan": {
    "en": "material type(s)",
    "zh-TW": "種原料",
    "tl": "uri ng materyal"
  },
  "jenis produk": {
    "en": "product type(s)",
    "zh-TW": "種產品",
    "tl": "uri ng produkto"
  },
  "Riwayat transaksi stok": {
    "en": "Stock transaction history",
    "zh-TW": "庫存交易紀錄",
    "tl": "Kasaysayan ng transaksyon ng stock"
  },
  "Semua transaksi masuk, konversi, dan barang keluar tersimpan di sini.": {
    "en": "All stock-in, conversion, and stock-out transactions are saved here.",
    "zh-TW": "所有入庫、轉換及出庫交易都會儲存在此處。",
    "tl": "Dito naka-save ang lahat ng stock-in, conversion, at stock-out na transaksyon."
  },
  "Cari nomor atau nama barang...": {
    "en": "Search by transaction number or item name...",
    "zh-TW": "搜尋交易編號或商品名稱...",
    "tl": "Maghanap ayon sa numero ng transaksyon o pangalan ng item..."
  },
  "Semua transaksi": {
    "en": "All transactions",
    "zh-TW": "所有交易",
    "tl": "Lahat ng transaksyon"
  },
  "Belum ada riwayat transaksi": {
    "en": "No transaction history yet",
    "zh-TW": "尚無交易紀錄",
    "tl": "Wala pang kasaysayan ng transaksyon"
  },
  "Transaksi yang sudah disimpan akan tercatat otomatis di halaman ini.": {
    "en": "Saved transactions will automatically appear on this page.",
    "zh-TW": "已儲存的交易會自動顯示在此頁面。",
    "tl": "Awtomatikong lalabas sa pahinang ito ang mga na-save na transaksyon."
  },
  "Jenis transaksi": {
    "en": "Transaction type",
    "zh-TW": "交易類型",
    "tl": "Uri ng transaksyon"
  },
  "Nomor transaksi": {
    "en": "Transaction number",
    "zh-TW": "交易編號",
    "tl": "Numero ng transaksyon"
  },
  "Ringkasan": {
    "en": "Summary",
    "zh-TW": "摘要",
    "tl": "Buod"
  },
  "Catatan": {
    "en": "Notes",
    "zh-TW": "備註",
    "tl": "Mga tala"
  },
  "Detail": {
    "en": "Details",
    "zh-TW": "詳細資料",
    "tl": "Mga detalye"
  },
  "Konversi": {
    "en": "Conversion",
    "zh-TW": "轉換",
    "tl": "Conversion"
  },
  "Masuk": {
    "en": "In",
    "zh-TW": "入庫",
    "tl": "Pumasok"
  },
  "Keluar": {
    "en": "Out",
    "zh-TW": "出庫",
    "tl": "Lumabas"
  },
  "Lihat": {
    "en": "View",
    "zh-TW": "查看",
    "tl": "Tingnan"
  },
  "Periksa kembali data barang.": {
    "en": "Please check the item details.",
    "zh-TW": "請重新檢查商品資料。",
    "tl": "Pakisuri muli ang mga detalye ng item."
  },
  "Kode barang sudah digunakan. Gunakan kode lain.": {
    "en": "This item code is already in use. Please use another code.",
    "zh-TW": "此商品代碼已被使用，請改用其他代碼。",
    "tl": "Ginagamit na ang item code na ito. Gumamit ng ibang code."
  },
  "Barang berhasil ditambahkan.": {
    "en": "Item added successfully.",
    "zh-TW": "商品新增成功。",
    "tl": "Matagumpay na naidagdag ang item."
  },
  "Pilih bahan dan masukkan jumlah yang valid.": {
    "en": "Select a material and enter a valid quantity.",
    "zh-TW": "請選擇原料並輸入有效數量。",
    "tl": "Pumili ng materyal at maglagay ng wastong dami."
  },
  "Barang masuk tersimpan. Stok ": {
    "en": "Stock-in saved. Stock of ",
    "zh-TW": "入庫已儲存。",
    "tl": "Na-save ang stock-in. Ang stock ng "
  },
  " bertambah ": {
    "en": " increased by ",
    "zh-TW": " 增加了 ",
    "tl": " ay nadagdagan ng "
  },
  ". ": {
    "en": ". ",
    "zh-TW": "。",
    "tl": ". "
  },
  "Tambahkan minimal satu ": {
    "en": "Add at least one ",
    "zh-TW": "請至少新增一項",
    "tl": "Magdagdag ng kahit isang "
  },
  "Lengkapi pilihan ": {
    "en": "Complete the ",
    "zh-TW": "請完成",
    "tl": "Kumpletuhin ang "
  },
  " dan jumlahnya.": {
    "en": " selection and quantity.",
    "zh-TW": "選擇及數量。",
    "tl": " pagpili at dami."
  },
  "Tanggal konversi wajib diisi.": {
    "en": "Conversion date is required.",
    "zh-TW": "必須填寫轉換日期。",
    "tl": "Kailangang ilagay ang petsa ng conversion."
  },
  "Pilihan bahan tidak valid.": {
    "en": "Invalid material selection.",
    "zh-TW": "原料選擇無效。",
    "tl": "Hindi wastong pagpili ng materyal."
  },
  "Stok ": {
    "en": "Stock of ",
    "zh-TW": "庫存",
    "tl": "Stock ng "
  },
  " tidak mencukupi. Tersedia ": {
    "en": " is insufficient. Available: ",
    "zh-TW": " 不足。可用數量：",
    "tl": " ay kulang. Available: "
  },
  "Pilihan produk tidak valid.": {
    "en": "Invalid product selection.",
    "zh-TW": "產品選擇無效。",
    "tl": "Hindi wastong pagpili ng produkto."
  },
  "Batch ": {
    "en": "Batch ",
    "zh-TW": "批次 ",
    "tl": "Batch "
  },
  " berhasil disimpan. Stok bahan dan produk sudah diperbarui.": {
    "en": " saved successfully. Material and product stock have been updated.",
    "zh-TW": "已成功儲存。原料及成品庫存已更新。",
    "tl": "ay matagumpay na na-save. Na-update na ang stock ng materyales at produkto."
  },
  "Pilih produk dan masukkan jumlah yang valid.": {
    "en": "Select a product and enter a valid quantity.",
    "zh-TW": "請選擇產品並輸入有效數量。",
    "tl": "Pumili ng produkto at maglagay ng wastong dami."
  },
  "Barang keluar tersimpan. Sisa stok ": {
    "en": "Stock-out saved. Remaining stock: ",
    "zh-TW": "出庫已儲存。剩餘庫存：",
    "tl": "Na-save ang stock-out. Natitirang stock: "
  },
  "Bahan yang digunakan": {
    "en": "Materials used",
    "zh-TW": "使用的原料",
    "tl": "Mga materyales na ginamit"
  },
  "Produk yang dihasilkan": {
    "en": "Products produced",
    "zh-TW": "產出的成品",
    "tl": "Mga produktong nagawa"
  },
  "Bahan tidak ditemukan": {
    "en": "Material not found",
    "zh-TW": "找不到原料",
    "tl": "Hindi nakita ang materyal"
  },
  "Produk tidak ditemukan": {
    "en": "Product not found",
    "zh-TW": "找不到產品",
    "tl": "Hindi nakita ang produkto"
  },
  "Barang tidak ditemukan": {
    "en": "Item not found",
    "zh-TW": "找不到商品",
    "tl": "Hindi nakita ang item"
  },
  "Supplier:": {
    "en": "Supplier:",
    "zh-TW": "供應商：",
    "tl": "Supplier:"
  },
  "Pelanggan:": {
    "en": "Customer:",
    "zh-TW": "客戶：",
    "tl": "Customer:"
  },
  "Tutup": {
    "en": "Close",
    "zh-TW": "關閉",
    "tl": "Isara"
  },
  "File backup berhasil dibuat. Simpan file ini di tempat yang aman.": {
    "en": "Backup file created. Store it in a safe place.",
    "zh-TW": "備份檔案已建立，請妥善保存。",
    "tl": "Nagawa ang backup file. Itago ito sa ligtas na lugar."
  },
  "Konveksi": {
    "en": "Garment",
    "zh-TW": "成衣",
    "tl": "Damit"
  },
  "Tanggal": {
    "en": "Date",
    "zh-TW": "日期",
    "tl": "Petsa"
  },
  "Pelanggan": {
    "en": "Customer",
    "zh-TW": "客戶",
    "tl": "Customer"
  },
  "Supplier": {
    "en": "Supplier",
    "zh-TW": "供應商",
    "tl": "Supplier"
  },
  "Penjualan / keluar": {
    "en": "Sales / stock out",
    "zh-TW": "銷售／出庫",
    "tl": "Benta / paglabas ng stock"
  },
  "Simple inventory": {
    "en": "Simple inventory",
    "zh-TW": "簡易庫存管理",
    "tl": "Simpleng imbentaryo"
  },
  "Item Catalog": {
    "en": "Item Catalog",
    "zh-TW": "商品清單",
    "tl": "Listahan ng mga Item"
  },
  "Stock In": {
    "en": "Stock In",
    "zh-TW": "入庫",
    "tl": "Pagpasok ng Stock"
  },
  "Batch Conversion": {
    "en": "Batch Conversion",
    "zh-TW": "批次轉換",
    "tl": "Batch Conversion"
  },
  "Sales / Stock Out": {
    "en": "Sales / Stock Out",
    "zh-TW": "銷售／出庫",
    "tl": "Benta / Paglabas ng Stock"
  },
  "Transaction History": {
    "en": "Transaction History",
    "zh-TW": "交易紀錄",
    "tl": "Kasaysayan ng Transaksyon"
  },
  "INVENTORY": {
    "en": "INVENTORY",
    "zh-TW": "庫存管理",
    "tl": "IMBENTARYO"
  },
  "Usage tips": {
    "en": "Usage tips",
    "zh-TW": "使用提示",
    "tl": "Mga tip sa paggamit"
  },
  "Record every stock-in, conversion, and sale so inventory quantities stay up to date.": {
    "en": "Record every stock-in, conversion, and sale so inventory quantities stay up to date.",
    "zh-TW": "記錄每筆入庫、轉換及銷售，讓庫存數量保持最新。",
    "tl": "Itala ang bawat pagpasok ng stock, conversion, at benta upang laging updated ang bilang ng imbentaryo."
  },
  "Basic version · Browser local storage": {
    "en": "Basic version · Browser local storage",
    "zh-TW": "基本版本 · 瀏覽器本機儲存",
    "tl": "Pangunahing bersyon · Lokal na storage ng browser"
  },
  "INVENTORY MANAGEMENT": {
    "en": "INVENTORY MANAGEMENT",
    "zh-TW": "庫存管理系統",
    "tl": "PAMAMAHALA NG IMBENTARYO"
  },
  "Garment Inventory": {
    "en": "Garment Inventory",
    "zh-TW": "成衣庫存管理",
    "tl": "Imbentaryo ng Damit"
  },
  "Starter project for initial development": {
    "en": "Starter project for initial development",
    "zh-TW": "初期開發用起始專案",
    "tl": "Starter project para sa paunang development"
  },
  "Export Backup": {
    "en": "Export Backup",
    "zh-TW": "匯出備份",
    "tl": "I-export ang Backup"
  },
  "Select language": {
    "en": "Select language",
    "zh-TW": "選擇語言",
    "tl": "Pumili ng wika"
  },
  "Menu utama": {
    "en": "Main menu",
    "zh-TW": "主選單",
    "tl": "Pangunahing menu"
  },
  "bahan": {
    "en": "material",
    "zh-TW": "原料",
    "tl": "materyal"
  },
  "produk": {
    "en": "product",
    "zh-TW": "產品",
    "tl": "produkto"
  },
  "Jenis barang": {
    "en": "Item type",
    "zh-TW": "商品類型",
    "tl": "Uri ng item"
  },
  "Jenis produk": {
    "en": "Product type",
    "zh-TW": "產品類型",
    "tl": "Uri ng produkto"
  },
  "Stok": {
    "en": "Stock",
    "zh-TW": "庫存",
    "tl": "Stock"
  },
  "Belum ada barang": {
    "en": "No items yet",
    "zh-TW": "尚無商品",
    "tl": "Wala pang item"
  },
  "Tambahkan bahan baku dan produk jadi menggunakan form di atas.": {
    "en": "Add raw materials and finished products using the form above.",
    "zh-TW": "請使用上方表單新增原料及成品。",
    "tl": "Magdagdag ng mga materyales at tapos na produkto gamit ang form sa itaas."
  },
  "Satuan": {
    "en": "Unit",
    "zh-TW": "單位",
    "tl": "Yunit"
  },
  "Nomor": {
    "en": "Number",
    "zh-TW": "編號",
    "tl": "Numero"
  },
  "Transaksi": {
    "en": "Transaction",
    "zh-TW": "交易",
    "tl": "Transaksyon"
  },
  "Contoh: Cotton Combed Hitam": {
    "en": "Example: Black Cotton Combed",
    "zh-TW": "例如：黑色精梳棉布",
    "tl": "Halimbawa: Itim na Cotton Combed"
  },
  "Barang keluar": {
    "en": "Stock out",
    "zh-TW": "出庫",
    "tl": "Paglabas ng stock"
  },
  "Jumlah masuk": {
    "en": "Quantity received",
    "zh-TW": "入庫數量",
    "tl": "Dami ng natanggap"
  },
  "Jumlah keluar": {
    "en": "Quantity out",
    "zh-TW": "出庫數量",
    "tl": "Dami ng inilabas"
  },
  "Stok awal": {
    "en": "Opening stock",
    "zh-TW": "期初庫存",
    "tl": "Panimulang stock"
  },
  "Simpan": {
    "en": "Save",
    "zh-TW": "儲存",
    "tl": "I-save"
  }
};

let currentLanguage = (() => {
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return ['en', 'zh-TW', 'tl'].includes(saved) ? saved : 'en';
  } catch { return 'en'; }
})();

const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();

function translateText(sourceText) {
  const dictionary = Object.entries(UI_TRANSLATIONS)
    .sort((a, b) => b[0].length - a[0].length);
  let output = String(sourceText ?? '');
  for (const [source, values] of dictionary) {
    const translated = values[currentLanguage];
    if (translated && translated !== source) output = output.split(source).join(translated);
  }
  return output;
}

function translateDom(root = document.body) {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) {
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
    node.nodeValue = translateText(originalTextNodes.get(node));
  }

  const elements = [root, ...root.querySelectorAll('*')];
  const translatableAttributes = ['placeholder', 'aria-label', 'title'];
  for (const element of elements) {
    if (!element.getAttribute) continue;
    let originals = originalAttributes.get(element);
    if (!originals) {
      originals = new Map();
      originalAttributes.set(element, originals);
    }
    for (const attribute of translatableAttributes) {
      if (!element.hasAttribute(attribute)) continue;
      if (!originals.has(attribute)) originals.set(attribute, element.getAttribute(attribute));
      element.setAttribute(attribute, translateText(originals.get(attribute)));
    }
  }
}

function setLanguage(language) {
  if (!['en', 'zh-TW', 'tl'].includes(language)) return;
  currentLanguage = language;
  try { localStorage.setItem(LANGUAGE_STORAGE_KEY, language); } catch (error) { console.warn('Could not save language preference:', error); }
  document.documentElement.lang = language;
  document.title = ({ en: 'Garment Inventory', 'zh-TW': '成衣庫存管理', tl: 'Imbentaryo ng Damit' })[language];
  translateDom(document.body);
}

function activeLocale() {
  return ({ en: 'en-US', 'zh-TW': 'zh-TW', tl: 'fil-PH' })[currentLanguage] || 'en-US';
}

let state = loadState();
let currentPage = 'dashboard';
let toastTimer;

function emptyState() {
  return { items: [], transactions: [] };
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return emptyState();
    const parsed = JSON.parse(saved);
    return {
      items: Array.isArray(parsed.items) ? parsed.items : [],
      transactions: Array.isArray(parsed.transactions) ? parsed.transactions : []
    };
  } catch (error) {
    console.error('Gagal membaca data lokal:', error);
    return emptyState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function makeId(prefix) {
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${prefix}-${Date.now().toString(36).toUpperCase()}-${random}`;
}

function today() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function formatDate(value) {
  if (!value) return '-';
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(activeLocale(), { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
}

function formatNumber(value) {
  return new Intl.NumberFormat(activeLocale(), { maximumFractionDigits: 3 }).format(Number(value) || 0);
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[char]);
}

function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  toast.textContent = translateText(message);
  toast.className = `toast show${isError ? ' error' : ''}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.className = 'toast'; }, 3000);
}

function getItem(itemId) {
  return state.items.find(item => item.id === itemId);
}

function itemLabel(item) {
  return `${item.name}${item.sku ? ` (${item.sku})` : ''}`;
}

function stockText(item) {
  return `${formatNumber(item.stock)} ${item.unit}`;
}

function stockBadge(item) {
  if (item.minStock > 0 && item.stock <= item.minStock) {
    return '<span class="pill pill-amber">Menipis</span>';
  }
  if (item.stock <= 0) return '<span class="pill pill-red">Habis</span>';
  return '<span class="pill pill-green">Aman</span>';
}

function render() {
  document.getElementById('page-title').textContent = pageTitles[currentPage];
  document.querySelectorAll('.nav-link').forEach(button => {
    button.classList.toggle('active', button.dataset.page === currentPage);
  });

  const content = document.getElementById('page-content');
  const renderers = {
    dashboard: renderDashboard,
    items: renderItems,
    inbound: renderInbound,
    conversion: renderConversion,
    sales: renderSales,
    history: renderHistory
  };
  content.innerHTML = renderers[currentPage]();
  const languageSelect = document.getElementById('language-select');
  if (languageSelect) languageSelect.value = currentLanguage;
  translateDom(document.body);
  bindPageEvents();
}

function renderDashboard() {
  const materials = state.items.filter(item => item.type === 'material');
  const products = state.items.filter(item => item.type === 'product');
  const lowStock = state.items.filter(item => item.minStock > 0 && item.stock <= item.minStock);
  const thisMonth = today().slice(0, 7);
  const monthTransactions = state.transactions.filter(tx => (tx.date || '').startsWith(thisMonth));
  const recent = [...state.transactions].sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || '')).slice(0, 6);

  return `
    <div class="stats-grid">
      <div class="card stat-card"><div class="stat-top">Jenis bahan baku <span class="stat-icon">▤</span></div><div class="stat-value">${materials.length}</div><div class="stat-foot">Jenis bahan terdaftar</div></div>
      <div class="card stat-card"><div class="stat-top">Jenis produk jadi <span class="stat-icon">◫</span></div><div class="stat-value">${products.length}</div><div class="stat-foot">Jenis produk terdaftar</div></div>
      <div class="card stat-card"><div class="stat-top">Stok menipis <span class="stat-icon">!</span></div><div class="stat-value">${lowStock.length}</div><div class="stat-foot">Perlu diperiksa</div></div>
      <div class="card stat-card"><div class="stat-top">Transaksi bulan ini <span class="stat-icon">◷</span></div><div class="stat-value">${monthTransactions.length}</div><div class="stat-foot">Barang masuk, konversi, dan penjualan</div></div>
    </div>
    <div class="two-column">
      <section class="card card-pad">
        <div class="panel-title"><h2>Stok perlu diperhatikan</h2><small>${lowStock.length} barang</small></div>
        ${lowStock.length ? `<div class="table-wrap"><table><thead><tr><th>Nama barang</th><th>Jenis</th><th>Stok saat ini</th><th>Batas minimum</th><th>Status</th></tr></thead><tbody>${lowStock.map(item => `<tr><td><span class="item-name">${escapeHtml(item.name)}</span><span class="subtext">${escapeHtml(item.sku || 'Tanpa kode')}</span></td><td>${item.type === 'material' ? 'Bahan baku' : 'Produk jadi'}</td><td>${stockText(item)}</td><td>${formatNumber(item.minStock)} ${escapeHtml(item.unit)}</td><td>${stockBadge(item)}</td></tr>`).join('')}</tbody></table></div>` : `<div class="empty-state"><div class="empty-icon">✓</div><strong>Belum ada stok yang menipis</strong><p>Barang dengan stok di bawah batas minimum akan muncul di bagian ini.</p></div>`}
      </section>
      <section class="card card-pad">
        <div class="panel-title"><h2>Aktivitas terakhir</h2><small>${state.transactions.length} transaksi</small></div>
        ${recent.length ? `<div class="table-wrap"><table><thead><tr><th>Transaksi</th><th>Tanggal</th><th>Nomor</th></tr></thead><tbody>${recent.map(tx => `<tr><td>${transactionTypeLabel(tx.type)}</td><td>${formatDate(tx.date)}</td><td><span class="item-name">${escapeHtml(tx.number)}</span></td></tr>`).join('')}</tbody></table></div>` : `<div class="empty-state"><div class="empty-icon">◷</div><strong>Belum ada transaksi</strong><p>Transaksi yang kamu simpan akan muncul di sini.</p></div>`}
      </section>
    </div>
    ${state.items.length === 0 ? `<div class="notice" style="margin-top:15px"><strong>Mulai dari sini:</strong> buka menu <strong>Master Barang</strong> untuk mendaftarkan bahan baku dan produk jadi terlebih dahulu. Masukkan stok awal saat membuat barang.</div>` : ''}
  `;
}

function renderItems() {
  const rows = state.items.map(item => `
    <tr>
      <td><span class="item-name">${escapeHtml(item.name)}</span><span class="subtext">${escapeHtml(item.sku || 'Tanpa kode')}</span></td>
      <td>${item.type === 'material' ? '<span class="pill pill-gray">Bahan baku</span>' : '<span class="pill pill-green">Produk jadi</span>'}</td>
      <td>${escapeHtml(item.unit)}</td>
      <td><strong>${formatNumber(item.stock)}</strong></td>
      <td>${formatNumber(item.minStock)} ${escapeHtml(item.unit)}</td>
      <td>${stockBadge(item)}</td>
    </tr>`).join('');

  return `
    <div class="section-heading"><div><h2>Daftar barang</h2><p>Daftarkan setiap bahan baku dan produk jadi yang akan dicatat stoknya.</p></div></div>
    <div class="card card-pad form-card">
      <div class="panel-title"><h2>Tambah barang baru</h2><small>Isi data dengan lengkap</small></div>
      <form id="item-form">
        <div class="form-grid">
          <div class="field"><label for="item-type">Jenis barang *</label><select id="item-type" required><option value="material">Bahan baku</option><option value="product">Produk jadi</option></select></div>
          <div class="field"><label for="item-name">Nama barang *</label><input id="item-name" required maxlength="100" placeholder="Contoh: Cotton Combed Hitam" /></div>
          <div class="field"><label for="item-sku">Kode barang (opsional)</label><input id="item-sku" maxlength="40" placeholder="Contoh: KAIN-001" /></div>
          <div class="field"><label for="item-unit">Satuan *</label><input id="item-unit" required maxlength="20" placeholder="Contoh: meter, pcs, gulung" /></div>
          <div class="field"><label for="item-opening">Stok awal *</label><input id="item-opening" type="number" min="0" step="0.001" value="0" required /></div>
          <div class="field"><label for="item-min">Batas minimum stok</label><input id="item-min" type="number" min="0" step="0.001" value="0" /><span class="field-help">Isi 0 jika tidak perlu peringatan stok menipis.</span></div>
        </div>
        <div class="form-actions"><button class="button button-primary" type="submit">＋ Simpan Barang</button></div>
      </form>
    </div>
    <section class="card card-pad" style="margin-top:17px">
      <div class="panel-title"><h2>Daftar barang terdaftar</h2><small>${state.items.length} item</small></div>
      ${rows ? `<div class="table-wrap"><table><thead><tr><th>Nama barang</th><th>Jenis</th><th>Satuan</th><th>Stok saat ini</th><th>Batas minimum</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table></div>` : `<div class="empty-state"><div class="empty-icon">▤</div><strong>Belum ada barang</strong><p>Tambahkan bahan baku dan produk jadi menggunakan form di atas.</p></div>`}
    </section>
  `;
}

function itemOptions(type, selected = '') {
  const items = state.items.filter(item => item.type === type);
  return `<option value="">Pilih barang</option>${items.map(item => `<option value="${escapeHtml(item.id)}" ${item.id === selected ? 'selected' : ''}>${escapeHtml(itemLabel(item))} · stok ${formatNumber(item.stock)} ${escapeHtml(item.unit)}</option>`).join('')}`;
}

function renderInbound() {
  const hasMaterials = state.items.some(item => item.type === 'material');
  return `
    <div class="section-heading"><div><h2>Catat barang masuk</h2><p>Gunakan saat kain atau bahan lain diterima dari supplier.</p></div></div>
    ${!hasMaterials ? `<div class="notice">Belum ada bahan baku. Tambahkan bahan terlebih dahulu di menu <strong>Master Barang</strong>.</div>` : ''}
    <div class="card card-pad form-card">
      <form id="inbound-form">
        <div class="form-grid">
          <div class="field full"><label for="inbound-item">Bahan yang diterima *</label><select id="inbound-item" required ${!hasMaterials ? 'disabled' : ''}>${itemOptions('material')}</select></div>
          <div class="field"><label for="inbound-qty">Jumlah masuk *</label><input id="inbound-qty" type="number" min="0.001" step="0.001" required placeholder="Contoh: 50" /></div>
          <div class="field"><label for="inbound-date">Tanggal diterima *</label><input id="inbound-date" type="date" value="${today()}" required /></div>
          <div class="field"><label for="inbound-supplier">Supplier (opsional)</label><input id="inbound-supplier" maxlength="100" placeholder="Nama toko / supplier" /></div>
          <div class="field"><label for="inbound-note">Catatan (opsional)</label><input id="inbound-note" maxlength="200" placeholder="Nomor nota atau keterangan" /></div>
        </div>
        <div class="notice" style="margin-top:15px;margin-bottom:0">Setelah disimpan, stok bahan yang dipilih akan <strong>bertambah otomatis</strong>.</div>
        <div class="form-actions"><button class="button button-primary" type="submit" ${!hasMaterials ? 'disabled' : ''}>Simpan Barang Masuk</button></div>
      </form>
    </div>
  `;
}

function lineRow(type, index) {
  const label = type === 'material' ? 'Bahan' : 'Produk';
  return `<div class="line-row ${type === 'product' ? 'product-row' : ''}" data-line-type="${type}">
    <select aria-label="${label} ${index + 1}" class="line-item" required>${itemOptions(type)}</select>
    <input class="line-qty" type="number" min="0.001" step="0.001" placeholder="Jumlah" aria-label="Jumlah ${label.toLowerCase()}" required />
    <button type="button" class="remove-line" data-action="remove-line" aria-label="Hapus baris">×</button>
  </div>`;
}

function renderConversion() {
  const hasMaterials = state.items.some(item => item.type === 'material');
  const hasProducts = state.items.some(item => item.type === 'product');
  return `
    <div class="section-heading"><div><h2>Buat batch konversi</h2><p>Catat bahan yang digunakan dan produk yang berhasil dihasilkan dalam satu batch.</p></div></div>
    <div class="notice"><strong>Catatan:</strong> jumlah bahan dan hasil produk diisi berdasarkan kondisi aktual. Tidak harus mengikuti rasio tetap. Satu batch dapat menggunakan beberapa bahan dan menghasilkan beberapa jenis produk.</div>
    ${(!hasMaterials || !hasProducts) ? `<div class="notice">Pastikan Master Barang sudah memiliki minimal satu <strong>bahan baku</strong> dan satu <strong>produk jadi</strong> sebelum membuat batch.</div>` : ''}
    <div class="card card-pad form-card">
      <form id="conversion-form">
        <div class="form-grid">
          <div class="field"><label for="conversion-date">Tanggal konversi *</label><input id="conversion-date" type="date" value="${today()}" required /></div>
          <div class="field"><label for="conversion-note">Catatan (opsional)</label><input id="conversion-note" maxlength="200" placeholder="Contoh: Batch produksi kaos minggu pertama" /></div>
        </div>
        <div class="line-section">
          <div class="line-section-head"><h3>A. Bahan yang digunakan</h3><button type="button" class="button button-secondary button-small" data-action="add-material">＋ Tambah bahan</button></div>
          <div id="material-lines" class="line-list">${lineRow('material', 0)}</div>
        </div>
        <div class="line-section">
          <div class="line-section-head"><h3>B. Produk yang dihasilkan</h3><button type="button" class="button button-secondary button-small" data-action="add-product">＋ Tambah produk</button></div>
          <div id="product-lines" class="line-list">${lineRow('product', 0)}</div>
        </div>
        <div class="notice" style="margin-top:17px;margin-bottom:0">Saat batch disimpan, stok bahan akan <strong>berkurang</strong> dan stok produk jadi akan <strong>bertambah</strong> secara bersamaan.</div>
        <div class="form-actions"><button class="button button-primary" type="submit" ${(!hasMaterials || !hasProducts) ? 'disabled' : ''}>Simpan Batch Konversi</button></div>
      </form>
    </div>
  `;
}

function renderSales() {
  const hasProducts = state.items.some(item => item.type === 'product');
  return `
    <div class="section-heading"><div><h2>Catat penjualan / barang keluar</h2><p>Gunakan saat produk jadi dijual atau dikirim kepada pelanggan.</p></div></div>
    ${!hasProducts ? `<div class="notice">Belum ada produk jadi. Tambahkan produk melalui menu <strong>Master Barang</strong>, lalu lakukan konversi atau isi stok awalnya.</div>` : ''}
    <div class="card card-pad form-card">
      <form id="sales-form">
        <div class="form-grid">
          <div class="field full"><label for="sales-item">Produk yang keluar *</label><select id="sales-item" required ${!hasProducts ? 'disabled' : ''}>${itemOptions('product')}</select></div>
          <div class="field"><label for="sales-qty">Jumlah keluar *</label><input id="sales-qty" type="number" min="0.001" step="0.001" required placeholder="Contoh: 10" /></div>
          <div class="field"><label for="sales-date">Tanggal *</label><input id="sales-date" type="date" value="${today()}" required /></div>
          <div class="field"><label for="sales-customer">Pelanggan (opsional)</label><input id="sales-customer" maxlength="100" placeholder="Nama pelanggan" /></div>
          <div class="field"><label for="sales-note">Catatan (opsional)</label><input id="sales-note" maxlength="200" placeholder="Nomor pesanan / keterangan" /></div>
        </div>
        <div class="notice" style="margin-top:15px;margin-bottom:0">Stok produk akan <strong>berkurang otomatis</strong> setelah transaksi disimpan. Pesanan pelanggan belum mengurangi stok sampai barang benar-benar keluar.</div>
        <div class="form-actions"><button class="button button-primary" type="submit" ${!hasProducts ? 'disabled' : ''}>Simpan Barang Keluar</button></div>
      </form>
    </div>
  `;
}

function transactionTypeLabel(type) {
  return ({ inbound: 'Barang masuk', conversion: 'Konversi batch', sale: 'Penjualan / keluar' })[type] || type;
}

function transactionSummary(tx) {
  if (tx.type === 'inbound') {
    const item = getItem(tx.itemId);
    return `${item ? item.name : 'Barang'} +${formatNumber(tx.qty)} ${item ? item.unit : ''}`;
  }
  if (tx.type === 'sale') {
    const item = getItem(tx.itemId);
    return `${item ? item.name : 'Produk'} -${formatNumber(tx.qty)} ${item ? item.unit : ''}`;
  }
  const materialCount = (tx.materials || []).length;
  const productCount = (tx.products || []).length;
  return `${materialCount} jenis bahan → ${productCount} jenis produk`;
}

function renderHistory() {
  const transactions = [...state.transactions].sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
  return `
    <div class="section-heading"><div><h2>Riwayat transaksi stok</h2><p>Semua transaksi masuk, konversi, dan barang keluar tersimpan di sini.</p></div></div>
    <section class="card card-pad">
      <div class="filter-row">
        <input id="history-search" type="search" placeholder="Cari nomor atau nama barang..." />
        <select id="history-type"><option value="all">Semua transaksi</option><option value="inbound">Barang masuk</option><option value="conversion">Konversi batch</option><option value="sale">Penjualan / keluar</option></select>
      </div>
      <div id="history-table-wrap">${historyTable(transactions)}</div>
    </section>
  `;
}

function historyTable(transactions) {
  if (!transactions.length) return `<div class="empty-state"><div class="empty-icon">◷</div><strong>Belum ada riwayat transaksi</strong><p>Transaksi yang sudah disimpan akan tercatat otomatis di halaman ini.</p></div>`;
  return `<div class="table-wrap"><table><thead><tr><th>Tanggal</th><th>Jenis transaksi</th><th>Nomor transaksi</th><th>Ringkasan</th><th>Catatan</th><th>Detail</th></tr></thead><tbody>${transactions.map(tx => `
    <tr>
      <td>${formatDate(tx.date)}</td>
      <td>${tx.type === 'conversion' ? '<span class="pill pill-green">Konversi</span>' : tx.type === 'inbound' ? '<span class="pill pill-gray">Masuk</span>' : '<span class="pill pill-amber">Keluar</span>'}</td>
      <td><strong>${escapeHtml(tx.number)}</strong></td>
      <td>${escapeHtml(transactionSummary(tx))}</td>
      <td>${escapeHtml(tx.note || '-')}</td>
      <td><button class="button button-secondary button-small" type="button" data-action="view-transaction" data-id="${escapeHtml(tx.id)}">Lihat</button></td>
    </tr>`).join('')}</tbody></table></div>`;
}

function bindPageEvents() {
  const itemForm = document.getElementById('item-form');
  if (itemForm) itemForm.addEventListener('submit', handleAddItem);

  const inboundForm = document.getElementById('inbound-form');
  if (inboundForm) inboundForm.addEventListener('submit', handleInbound);

  const conversionForm = document.getElementById('conversion-form');
  if (conversionForm) conversionForm.addEventListener('submit', handleConversion);

  const salesForm = document.getElementById('sales-form');
  if (salesForm) salesForm.addEventListener('submit', handleSale);

  const search = document.getElementById('history-search');
  const typeFilter = document.getElementById('history-type');
  if (search && typeFilter) {
    const filter = () => {
      const q = search.value.trim().toLowerCase();
      const type = typeFilter.value;
      const filtered = [...state.transactions].sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || '')).filter(tx => {
        if (type !== 'all' && tx.type !== type) return false;
        const searchable = [tx.number, tx.note, transactionSummary(tx), tx.customer, tx.supplier].join(' ').toLowerCase();
        return searchable.includes(q);
      });
      document.getElementById('history-table-wrap').innerHTML = historyTable(filtered);
    };
    search.addEventListener('input', filter);
    typeFilter.addEventListener('change', filter);
  }
}

function handleAddItem(event) {
  event.preventDefault();
  const type = document.getElementById('item-type').value;
  const name = document.getElementById('item-name').value.trim();
  const sku = document.getElementById('item-sku').value.trim();
  const unit = document.getElementById('item-unit').value.trim();
  const stock = Number(document.getElementById('item-opening').value);
  const minStock = Number(document.getElementById('item-min').value || 0);
  if (!name || !unit || !Number.isFinite(stock) || stock < 0 || !Number.isFinite(minStock) || minStock < 0) {
    showToast('Periksa kembali data barang.', true); return;
  }
  if (sku && state.items.some(item => (item.sku || '').toLowerCase() === sku.toLowerCase())) {
    showToast('Kode barang sudah digunakan. Gunakan kode lain.', true); return;
  }
  state.items.push({ id: makeId('ITEM'), type, name, sku, unit, stock, minStock, createdAt: new Date().toISOString() });
  saveState();
  render();
  showToast('Barang berhasil ditambahkan.');
}

function handleInbound(event) {
  event.preventDefault();
  const itemId = document.getElementById('inbound-item').value;
  const qty = Number(document.getElementById('inbound-qty').value);
  const date = document.getElementById('inbound-date').value;
  const supplier = document.getElementById('inbound-supplier').value.trim();
  const note = document.getElementById('inbound-note').value.trim();
  const item = getItem(itemId);
  if (!item || item.type !== 'material' || !date || !Number.isFinite(qty) || qty <= 0) {
    showToast('Pilih bahan dan masukkan jumlah yang valid.', true); return;
  }
  item.stock += qty;
  const tx = { id: makeId('TX'), number: makeTransactionNumber('IN'), type: 'inbound', date, itemId, qty, supplier, note, createdAt: new Date().toISOString() };
  state.transactions.push(tx);
  saveState();
  render();
  showToast(`Barang masuk tersimpan. Stok ${item.name} bertambah ${formatNumber(qty)} ${item.unit}.`);
}

function collectLines(containerId) {
  const rows = [...document.querySelectorAll(`#${containerId} .line-row`)];
  return rows.map(row => ({ itemId: row.querySelector('.line-item').value, qty: Number(row.querySelector('.line-qty').value) }));
}

function validateLines(lines, typeLabel) {
  if (!lines.length) return `Tambahkan minimal satu ${typeLabel}.`;
  for (const line of lines) {
    if (!line.itemId || !Number.isFinite(line.qty) || line.qty <= 0) return `Lengkapi pilihan ${typeLabel} dan jumlahnya.`;
  }
  return '';
}

function aggregateLines(lines) {
  const totals = new Map();
  lines.forEach(line => totals.set(line.itemId, (totals.get(line.itemId) || 0) + line.qty));
  return [...totals.entries()].map(([itemId, qty]) => ({ itemId, qty }));
}

function handleConversion(event) {
  event.preventDefault();
  const date = document.getElementById('conversion-date').value;
  const note = document.getElementById('conversion-note').value.trim();
  const materialsInput = collectLines('material-lines');
  const productsInput = collectLines('product-lines');
  const materialError = validateLines(materialsInput, 'bahan');
  const productError = validateLines(productsInput, 'produk');
  if (!date || materialError || productError) {
    showToast(materialError || productError || 'Tanggal konversi wajib diisi.', true); return;
  }

  const materials = aggregateLines(materialsInput);
  const products = aggregateLines(productsInput);
  for (const line of materials) {
    const item = getItem(line.itemId);
    if (!item || item.type !== 'material') { showToast('Pilihan bahan tidak valid.', true); return; }
    if (line.qty > item.stock) { showToast(`Stok ${item.name} tidak mencukupi. Tersedia ${stockText(item)}.`, true); return; }
  }
  for (const line of products) {
    const item = getItem(line.itemId);
    if (!item || item.type !== 'product') { showToast('Pilihan produk tidak valid.', true); return; }
  }

  // Kedua sisi stok diperbarui dalam satu penyimpanan agar transaksi batch tetap seimbang.
  materials.forEach(line => { getItem(line.itemId).stock -= line.qty; });
  products.forEach(line => { getItem(line.itemId).stock += line.qty; });
  const tx = { id: makeId('TX'), number: makeTransactionNumber('BATCH'), type: 'conversion', date, materials, products, note, createdAt: new Date().toISOString() };
  state.transactions.push(tx);
  saveState();
  render();
  showToast(`Batch ${tx.number} berhasil disimpan. Stok bahan dan produk sudah diperbarui.`);
}

function handleSale(event) {
  event.preventDefault();
  const itemId = document.getElementById('sales-item').value;
  const qty = Number(document.getElementById('sales-qty').value);
  const date = document.getElementById('sales-date').value;
  const customer = document.getElementById('sales-customer').value.trim();
  const note = document.getElementById('sales-note').value.trim();
  const item = getItem(itemId);
  if (!item || item.type !== 'product' || !date || !Number.isFinite(qty) || qty <= 0) {
    showToast('Pilih produk dan masukkan jumlah yang valid.', true); return;
  }
  if (qty > item.stock) {
    showToast(`Stok ${item.name} tidak mencukupi. Tersedia ${stockText(item)}.`, true); return;
  }
  item.stock -= qty;
  const tx = { id: makeId('TX'), number: makeTransactionNumber('OUT'), type: 'sale', date, itemId, qty, customer, note, createdAt: new Date().toISOString() };
  state.transactions.push(tx);
  saveState();
  render();
  showToast(`Barang keluar tersimpan. Sisa stok ${stockText(item)}.`);
}

function makeTransactionNumber(prefix) {
  const datePart = today().replaceAll('-', '');
  const count = state.transactions.filter(tx => tx.number && tx.number.startsWith(`${prefix}-${datePart}`)).length + 1;
  return `${prefix}-${datePart}-${String(count).padStart(3, '0')}`;
}

function addLine(type) {
  const container = document.getElementById(type === 'material' ? 'material-lines' : 'product-lines');
  if (!container) return;
  container.insertAdjacentHTML('beforeend', lineRow(type, container.children.length));
  translateDom(container.lastElementChild);
}

function showTransactionDetail(id) {
  const tx = state.transactions.find(transaction => transaction.id === id);
  if (!tx) return;
  let detail = '';
  if (tx.type === 'inbound') {
    const item = getItem(tx.itemId);
    detail = `<strong>Barang masuk</strong><br>${escapeHtml(item ? item.name : 'Barang tidak ditemukan')}: +${formatNumber(tx.qty)} ${escapeHtml(item ? item.unit : '')}<br>Supplier: ${escapeHtml(tx.supplier || '-')}<br>Catatan: ${escapeHtml(tx.note || '-')}`;
  } else if (tx.type === 'sale') {
    const item = getItem(tx.itemId);
    detail = `<strong>Barang keluar</strong><br>${escapeHtml(item ? item.name : 'Produk tidak ditemukan')}: -${formatNumber(tx.qty)} ${escapeHtml(item ? item.unit : '')}<br>Pelanggan: ${escapeHtml(tx.customer || '-')}<br>Catatan: ${escapeHtml(tx.note || '-')}`;
  } else {
    const materialRows = (tx.materials || []).map(line => { const item = getItem(line.itemId); return `<li>${escapeHtml(item ? item.name : 'Bahan')} − ${formatNumber(line.qty)} ${escapeHtml(item ? item.unit : '')}</li>`; }).join('');
    const productRows = (tx.products || []).map(line => { const item = getItem(line.itemId); return `<li>${escapeHtml(item ? item.name : 'Produk')} + ${formatNumber(line.qty)} ${escapeHtml(item ? item.unit : '')}</li>`; }).join('');
    detail = `<strong>Bahan yang digunakan</strong><ul>${materialRows}</ul><strong>Produk yang dihasilkan</strong><ul>${productRows}</ul><strong>Catatan:</strong> ${escapeHtml(tx.note || '-')}`;
  }
  const existing = document.getElementById('transaction-detail');
  if (existing) existing.remove();
  const panel = document.createElement('div');
  panel.id = 'transaction-detail';
  panel.className = 'card card-pad';
  panel.style.marginTop = '13px';
  panel.innerHTML = `<div class="panel-title"><h2>Detail ${escapeHtml(tx.number)}</h2><button class="button button-secondary button-small" type="button" data-action="close-detail">Tutup</button></div><div class="batch-detail">${detail}</div>`;
  document.querySelector('#page-content .card.card-pad').appendChild(panel);
  translateDom(panel);
}

function exportBackup() {
  const backup = {
    app: 'Inventory Konveksi - versi dasar',
    exportedAt: new Date().toISOString(),
    data: state
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `backup-inventory-konveksi-${today()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast('File backup berhasil dibuat. Simpan file ini di tempat yang aman.');
}

// Navigasi utama.
document.querySelectorAll('.nav-link').forEach(button => {
  button.addEventListener('click', () => {
    currentPage = button.dataset.page;
    render();
  });
});

// Aksi tombol dinamis pada form dan riwayat.
document.addEventListener('click', event => {
  const actionButton = event.target.closest('[data-action]');
  if (!actionButton) return;
  const action = actionButton.dataset.action;
  if (action === 'add-material') addLine('material');
  if (action === 'add-product') addLine('product');
  if (action === 'remove-line') {
    const row = actionButton.closest('.line-row');
    const container = row.parentElement;
    if (container.children.length === 1) {
      row.querySelector('select').value = '';
      row.querySelector('input').value = '';
    } else row.remove();
  }
  if (action === 'view-transaction') showTransactionDetail(actionButton.dataset.id);
  if (action === 'close-detail') document.getElementById('transaction-detail')?.remove();
});

const languageSelect = document.getElementById('language-select');
if (languageSelect) {
  languageSelect.value = currentLanguage;
  languageSelect.addEventListener('change', event => setLanguage(event.target.value));
}

document.getElementById('export-backup').addEventListener('click', exportBackup);

render();
setLanguage(currentLanguage);
