import "./TripStyles.css";
import TripData from "./TripData";


function Trip() {
  return (
    <div className="trip">
      <h1 style={{ marginTop: "80px" }}></h1>
      <p
        style={{ fontSize: "20px", fontWeight: "300", marginBottom: "70px" }}
      ></p>
      <div className="tripcard">
        <TripData
          image={"https://www.bizimmeramkoyu.com/upload/dismekan/9.jpg"}
          heading="Toplam Proje Alanı"
          text="Proje, 400 bin metrekarelik alan içerisinde 230 bin metrekarelik arsa alanında 500 ile 700 metrekare müstakil parsellerde konumlanacaktır."
        />
        <TripData
          image={
            "https://www.meram.bel.tr/upload/medya/b3004298-c883-44a4-bb95-f159b1ca94c7.jpg"
          }
          heading="Toplam Dağ Evi"
          text="407 Dağ Evi"
        />
        <TripData
          image={"https://www.bizimmeramkoyu.com/upload/dismekan/kucuk/12.jpg"}
          heading="Sosyal Alan"
          text="Her parsel için 1 adet açık otopark alanı, meyve ağaçları ve tarım yapılabilecek alanlar planlanmıştır."
        />
      </div>
    </div>
  );
}

export default Trip;
