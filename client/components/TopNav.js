import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const buttonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '8px 20px',
  color: 'black',
  textDecoration: 'none',
  cursor: 'pointer',
};

const activeButtonStyle = {
  ...buttonStyle,
  color: 'blue',
  borderBottom: '2px solid blue',
};

const TopNav = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(null);

  const handleSetActive = (pathname) => {
    setActiveButton(pathname);
  };

  return (
    <div>
      <Link href="/">
        <p
          style={activeButton === '/' ? activeButtonStyle : buttonStyle}
          onClick={() => handleSetActive('/')}
        >
          <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
          App
        </p>
      </Link>

      <Link href="/login">
        <p
          style={activeButton === '/login' ? activeButtonStyle : buttonStyle}
          onClick={() => handleSetActive('/login')}
        >
          <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '5px' }} />
          Login
        </p>
      </Link>

      <Link href="/register">
        <p
          style={activeButton === '/register' ? activeButtonStyle : buttonStyle}
          onClick={() => handleSetActive('/register')}
        >
          <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: '5px' }} />
          Register
        </p>
      </Link>
    </div>
  );
};

export default TopNav;