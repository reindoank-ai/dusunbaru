Ini adalah folder untuk menyimpan gambar-gambar statis website Anda.

Cara penggunaannya:
1. Masukkan gambar Anda ke dalam folder ini (misalnya `lele.jpg`).
2. Di dalam file Markdown (`.md`), panggil gambar tersebut di bagian `coverImage` dengan awalan garis miring `/`.

Contoh di file Markdown:
```yaml
coverImage: "/images/lele.jpg"
```

Catatan: Next.js secara otomatis menjadikan folder `/public` sebagai root URL untuk aset statis. Jadi Anda tidak perlu menuliskan `/public/images/lele.jpg`, cukup `/images/lele.jpg`.
