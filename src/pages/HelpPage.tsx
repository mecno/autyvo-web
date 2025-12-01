const HelpPage: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px'
  };

  return (
    <div style={containerStyle}>
      <h1>Aide</h1>
    </div>
  );
};

export default HelpPage;
