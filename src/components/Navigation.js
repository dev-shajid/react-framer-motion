import React, {useEffect} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Cars/Cars.css'
import NProgress from 'nprogress'

const Navigation = () => {
  const navigate = useNavigate();
  const location=useLocation()
  
  // TODO: Handle Top Loading Bar
  useEffect(() => {
    handleStop()
  }, [])

  const DelayAndGo = (e, to) => {
    if (location.pathname !== to) {
      NProgress.start()
      e.preventDefault();
      setTimeout(() => navigate(`${to}`), 600);
    }
  }

  const handleStop = () => {
    NProgress.done()
  }

  return (
    <div className="navigationBar">
      <Link to="/" className="logo">
        <img
          className="logoImage"
          src="../images/logos/logocoloured.png"
          alt=""
        />
      </Link>
      <div className="nav_menu">
        <Link onClick={(e) => DelayAndGo(e, '/')} to="/">Home</Link>
        <Link onClick={(e) => DelayAndGo(e, '/filter')} to="/filter">Filter</Link>
      </div>
    </div>
  );
};

export default Navigation;
