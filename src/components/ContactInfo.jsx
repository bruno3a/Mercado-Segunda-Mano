const ContactInfo = ({ seller }) => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola, me interesa tu anuncio');
    window.open(`https://wa.me/${seller.whatsapp.replace(/\D/g, '')}?text=${message}`);
  };

  const handleCall = () => {
    window.location.href = `tel:${seller.phone}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${seller.email}`;
  };

  return (
    <div className="seller-info">
      <h3>Información del vendedor</h3>
      <div className="seller-details">
        <p><strong>Nombre:</strong> {seller.name}</p>
        <p><strong>Ubicación:</strong> {seller.location}</p>
      </div>
      <div className="contact-methods">
        <button 
          className="contact-button whatsapp"
          onClick={handleWhatsApp}
        >
          <i className="fab fa-whatsapp"></i>
          WhatsApp
        </button>
        <button 
          className="contact-button phone"
          onClick={handleCall}
        >
          <i className="fas fa-phone"></i>
          Llamar
        </button>
        <button 
          className="contact-button email"
          onClick={handleEmail}
        >
          <i className="fas fa-envelope"></i>
          Email
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;

