const ContactInfo = ({ seller }) => {
  if (!seller) return null;

  const handlePhoneClick = () => {
    window.location.href = `tel:${seller.phone}`;
  };

  const handleWhatsAppClick = () => {
    window.location.href = `https://wa.me/${seller.whatsapp.replace(/\s+/g, '')}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${seller.email}`;
  };

  return (
    <div className="contact-info">
      <h3>Información de contacto</h3>
      <p className="seller-name">{seller.name}</p>
      <div className="contact-buttons">
        <button className="btn-phone" onClick={handlePhoneClick}>
          Llamar
        </button>
        <button className="btn-whatsapp" onClick={handleWhatsAppClick}>
          WhatsApp
        </button>
        <button className="btn-email" onClick={handleEmailClick}>
          Email
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;
