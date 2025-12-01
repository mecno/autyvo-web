const ContactPage: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px'
  };

  return (
    <div style={containerStyle}>
      <h1>Contact</h1>
    </div>
  );
};

export default ContactPage;
