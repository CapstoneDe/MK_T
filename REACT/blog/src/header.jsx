const headerStyles = {
    position: 'abosulte',
    width: '100%',
    height: '45px',
    margin: '0',
    background: '#A89DEB',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  };
  
  const Header = () => {
    return (
      <header style={headerStyles}>
        <div>
          <div>
            <h2>(주)DBGenie</h2>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
