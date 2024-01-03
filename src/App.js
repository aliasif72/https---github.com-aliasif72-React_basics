import React, { useEffect,useState } from 'react';

import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import MainHeader from './Components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(()=>{
  localStorage.getItem('isLoggedIn')==='1'  &&  setIsLoggedIn(true);
  },[])

  const loginHandler = (email, password) => {
   localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn','0');
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
