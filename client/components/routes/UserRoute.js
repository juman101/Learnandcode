import { useEffect, useState } from 'react';
import { FaSync } from 'react-icons/fa'; // Import the desired icon from React Icons

import axios from 'axios';
import { useRouter } from 'next/router';

const UserRoute = ({ children }) => {
  const [ok, setOk] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get('/api/current-user');
      if (data.ok) setOk(true);
    } catch (err) {
      console.log(err);
      setOk(false);
      router.push('/login');
    }
  };

  return (
    <>
      {!ok ? (
        <FaSync className="d-flex justify-content-center display-1 text-primary p-5 spin-class" />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default UserRoute;
