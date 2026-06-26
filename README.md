[README.md](https://github.com/user-attachments/files/29365862/README.md)
# 🌌 Cosmic Explorer

Öğrenci Adı Soyadı: [Kaan ARTUN]
Öğrenci Numarası: 24010501032

## 📑 İçindekiler
1. [Projenin Amacı ve Özeti](#-projenin-amacı-ve-özeti)
2. [Teknolojik Altyapı ve Mimari](#-teknolojik-altyapı-ve-mimari)
3. [Klasör ve Modül Yapısı](#-klasör-ve-modül-yapısı)
4. [Kurulum ve Çalıştırma](#-kurulum-ve-çalıştırma)
5. [Kullanım Talimatları](#-kullanım-talimatları)
6. [Ekran Görüntüleri](#-ekran-görüntüleri)
7. [GitHub Proje Bağlantısı](#-github-proje-bağlantısı)
8. [Kaynakça](#-kaynakça)

---

## 📌 Projenin Amacı ve Özeti
**Cosmic Explorer**, kullanıcıların uzayın derinliklerini keşfetmelerini sağlayan etkileşimli, sinematik ve eğitici bir uzay keşif web uygulamasıdır. Projenin temel amacı, karmaşık uzay verilerini ve astronomik olayları (Güneş sistemi, galaksiler, meteor yağmurları, kara delikler vb.) modern, sürükleyici ve kullanıcı dostu bir arayüzle sunmaktır.

Herhangi bir dış kütüphane (React, Vue vb.) veya framework kullanılmadan tamamen **Vanilla JavaScript** ve **HTML5 Canvas API** ile sıfırdan performanslı bir yapı oluşturulmuştur. Tasarımda modern web prensipleri olan "Glassmorphism" ve sinematik karanlık mod odaklı çalışılmıştır.

## ⚙️ Teknolojik Altyapı ve Mimari
Proje, tamamen modern istemci taraflı (client-side) web teknolojileri kullanılarak geliştirilmiştir.

*   **HTML5 & Semantik Etiketler:** Modern tarayıcı uyumluluğu ve erişilebilirlik.
*   **CSS3 (Vanilla):** Glassmorphism tasarımlar, mikro-animasyonlar, CSS değişkenleri ve tamamen duyarlı (responsive) tasarım.
*   **Vanilla JavaScript (ES6+):** Modüler yapı (`app.js` ve `data.js`), DOM manipülasyonları, durum yönetimi.
*   **HTML5 Canvas API:** Arka plan yıldız simülasyonu ve interaktif, hareketli Güneş Sistemi simülasyonu (özel render motoru).
*   **Web API'leri:** Dinamik veri yönetimi ve olay dinleyiciler.

## 📁 Klasör ve Modül Yapısı
Uygulama kodunun sürdürülebilirliğini sağlamak amacıyla modüler bir yapı tercih edilmiştir:

```text
cosmic-explorer/
├── assets/
│   └── screenshots/        # Uygulamanın ekran görüntüleri
│       ├── explore.png
│       ├── home.png
│       ├── news.png
│       └── solar.png
├── index.html              # Ana DOM yapısı, sayfalar ve alt menü yerleşimleri
├── styles.css              # Glassmorphism UI, global değişkenler ve animasyonlar
├── app.js                  # Çekirdek motor (Canvas çizimleri, sayfa yönlendirmeleri, AI sohbet)
├── data.js                 # Uygulama verileri (Gezegenler, Haberler, Olaylar)
└── README.md               # Proje dokümantasyonu
```

## 🚀 Kurulum ve Çalıştırma

Proje tamamen istemci tarafında çalıştığından karmaşık bir sunucu kurulumuna ihtiyaç duymaz. Ancak ES6 modülleri (`type="module"`) kullanıldığı için projeyi bir yerel sunucu (local server) üzerinden çalıştırmanız gerekmektedir.

### Yöntem 1: VS Code Live Server (Tavsiye Edilen)
1. Projeyi Visual Studio Code veya Antigravity IDE ile açın.
2. Eklentilerden "Live Server" (Ritwick Dey) kurun.
3. `index.html` dosyasına sağ tıklayıp **"Open with Live Server"** seçeneğini seçin.
4. Tarayıcınızda otomatik olarak açılacaktır (Genellikle `http://127.0.0.1:5500`).

### Yöntem 2: Node.js / npm (http-server)
1. Terminalinizi açın ve proje dizinine (`cosmic-explorer`) girin:
   ```bash
   cd "cosmic-explorer"
   ```
2. Eğer yüklü değilse global olarak `http-server` modülünü yükleyin:
   ```bash
   npm install -g http-server
   ```
3. Sunucuyu başlatın:
   ```bash
   npx http-server . -p 8080
   ```
4. Tarayıcınızdan `http://localhost:8080` adresine gidin.

## 🕹️ Kullanım Talimatları

*   **Ana Sayfa:** Günün astronomi fotoğrafını, yaklaşan meteor yağmurlarını ve en güncel uzay haberlerinin özetini inceleyin.
*   **Güneş Sistemi:** Alt menüden "Güneş Sistemi"ne tıklayın. Ekranda Canvas tabanlı hareketli bir güneş sistemi göreceksiniz. Fare tekerleği (veya mobilde çimdikleme) ile **yakınlaşıp uzaklaşabilir (Zoom In/Out)**, gezegenlerin üzerine tıklayarak detaylı atmosfer, sıcaklık ve yapı bilgilerini görebilirsiniz.
*   **Keşfet:** Kara delikler, süpernovalar ve takımyıldızlar gibi evrensel harikalar hakkında inanılmaz detaylı istatistikleri keşfedin.
*   **Haberler:** Güncel uzay keşifleri ve görevlerle ilgili en son haberleri okuyun.
*   **AI Asistan (Sağ Alt Köşe):** Ekranın sağ alt köşesindeki robot ikonuna tıklayarak "Kozmik Asistan" ile sohbet edebilirsiniz. Gezegenler hakkında sorular sorabilir, temel uzay kavramlarını öğrenebilirsiniz.

## 📸 Ekran Görüntüleri

### Ana Ekran ve Günün Astronomi Fotoğrafı
![Ana Sayfa](assets/screenshots/home.png)

### İnteraktif Güneş Sistemi Simülasyonu
![Güneş Sistemi](assets/screenshots/solar.png)

### Evreni Keşfet Bölümü
![Keşfet Sayfası](assets/screenshots/explore.png)

### Uzay Haberleri
![Haberler Sayfası](assets/screenshots/news.png)

## 🔗 GitHub Proje Bağlantısı
**GitHub Deposu:** [https://github.com/Excessive7/Cosmic-Explorer]


## 📚 Kaynakça
Dokümantasyon ve geliştirme sürecinde aşağıdaki kaynaklardan faydalanılmıştır:
1.  **MDN Web Docs - HTML5 Canvas API:** İnteraktif güneş sistemi, yörünge çizimleri ve arkaplan yıldız partikül sistemi için. [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
2.  **Google Fonts:** Modern ve teknolojik tipografi için `Orbitron`, `Inter` ve `Space Grotesk` font aileleri. [Google Fonts](https://fonts.google.com/)
3.  **Modern CSS & Glassmorphism:** Yarı saydam arka planlar, arka plan bulanıklığı (backdrop-filter) ve modern kart tasarımları teknikleri.
4.  **Uzay Verileri:** Gezegen özellikleri, boyutları ve astronomik fenomen bilgileri açık astronomi kaynaklarından (NASA genel kültürü) derlenmiştir.
