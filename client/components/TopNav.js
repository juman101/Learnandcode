import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

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

import { Context } from "../context";

// ... (imports and styles remain the same)

const TopNav = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(null);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const { state, dispatch } = useContext(Context);

  const { user } = state;

  const handleSetActive = (pathname) => {
    setActiveButton(pathname);
  };

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get('/api/logout');
    toast(data.message);
    router.push("/login");
  };

  const toggleSubMenu = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link href="/">
          <p
            style={router.pathname === '/' ? activeButtonStyle : buttonStyle}
            onClick={() => handleSetActive('/')}
          >
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
            App
          </p>
        </Link>
        {!user && (
          <>
            <Link href="/login">
              <p
                style={router.pathname === '/login' ? activeButtonStyle : buttonStyle}
                onClick={() => handleSetActive('/login')}
              >
                <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '5px' }} />
                Login
              </p>
            </Link>
            <Link href="/register">
              <p
                style={router.pathname === '/register' ? activeButtonStyle : buttonStyle}
                onClick={() => handleSetActive('/register')}
              >
                <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: '5px' }} />
                Register
              </p>
            </Link>
          </>
        )}
      </div>
      {user && (
        <div
          style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
          onMouseEnter={toggleSubMenu}
          onMouseLeave={toggleSubMenu}
        >
          <Link href="/profile">
            <p style={router.pathname === '/profile' ? activeButtonStyle : buttonStyle} onClick={() => handleSetActive('/profile')}>
              <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: '5px' }} />
              {user.name}
            </p>
          </Link>
          {isSubMenuVisible && (
            <div style={{ position: 'absolute', top: '100%', left: 0, zIndex: 1 }}>
              <p style={buttonStyle} onClick={logout}>
                Logout
              </p>
              {/* Add other profile submenu items here */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TopNav;
