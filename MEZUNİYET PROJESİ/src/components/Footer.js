import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="text">
                <h1>MERAM BELEDİYESİ</h1>
                <p>BİZİM MERAM KÖYÜ</p>
            </div>
            <div>
              <a href="https://www.facebook.com/merambelediyesi"> <i className="fa-brands fa-facebook-square"></i></a>
              <a href="https://www.instagram.com/merambelediyesi"> <i className="fa-brands fa-instagram-square"></i></a>
              <a href="https://twitter.com/merambelediyesi"> <i className="fa-brands fa-twitter-square"></i></a>
              <a href="https://github.com/merambelediyesi"> <i className="fa-brands fa-github-square"></i></a>
            </div>
        </div>

        <div className="bottom">
            <div>
              <h4>Proje Detayları</h4>
              <a href="/">Toplam Proje Alanı</a>
              <a href="/">Toplam Dağ Evi</a>
              <a href="/">Sosyal Alan</a>
              <a href="/">Araç Otopark Sayısı</a>
            </div>
            <div>
              <h4>Topluluk</h4>
              <a href="https://github.com/merambelediyesi">Github</a>
              <a href="/">Başvuru</a>
              <a href="/">Duyurular</a>
              <a href="/">Proje Detayları</a>
            </div>
            <div>
              <h4>Yardım</h4>
              <a href="/">Sıkça Sorulan Sorular
</a>
              <a href="/">Destek</a>
              <a href="/">İletişim</a>
            </div>
            <div>
              <h4>Diğer</h4>
              <a href="/">Kullanım Koşulları</a>
              <a href="/">Gizlilik Politikası</a>
              <a href="/">Lisanslar</a>
            </div>
        </div>
    </div>
  );
};
export default Footer;