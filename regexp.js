// untuk cari kata di paragraph (bisa pakai .length di akhir buat cari brp banyak)(kalo cari digit pakai "\d")
var paragraph = "www.google.com"
console.log(paragraph.match(/(?<=\.)(.*)(?=\.)/g))