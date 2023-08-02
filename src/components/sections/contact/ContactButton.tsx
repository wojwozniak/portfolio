const ContactButton = () => {
  const buttonStyle = {
    backgroundColor: '#01A1FF',
    color: '#000D15',
    height: '65px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none',
    position: 'relative',
    zIndex: '9',
    marginTop: '20px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  };

  return (
    <button style={buttonStyle}>
      Contact
    </button>
  );
};

export default ContactButton;