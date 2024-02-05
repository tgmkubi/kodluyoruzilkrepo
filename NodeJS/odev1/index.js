/*Node.JS Komut Satırı Kullanımı
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır.
Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız.
Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.
*/

// PI sayısını 3.14 olarak kabul edelim.
const PI = 3.14;

// Kullanıcının terminalden girdiği daire yarıçap bilgisini aldık.
const radius = process.argv[2];

// Daire Alanını Hesaplayan Fonksiyon
const calculateAreaOfCircle = (r) => {
    // Kullanıcıdan geçerli bir sayı girdiğinden emin oluyoruz
  if (isNaN(r) || r < 0) {
    console.log("Geçerli bir sayı giriniz");
    return;
  }

  console.log(`Yarıçapı ${r} cm olan dairenin alanı: ${PI * r * r} cm²`);
};

calculateAreaOfCircle(radius * 1);
