import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Başvuru Formu</h1>
      <form>
        <input placeholder="İsim"/>
        <input placeholder="E-Mail Adresiniz"/>
        <input placeholder="Telefon Numarası"/>
        <textarea placeholder="Proje Hakkında Merak Ettiğiniz Soruları Buraya Yazınız" rows={3}/>
        <button>Gönder</button>
      </form>
    </div>
  );
}

export default ContactForm;
