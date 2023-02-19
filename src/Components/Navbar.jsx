import React from "react";
import { Link, NavLink } from "react-router-dom";
import NetlifyImage from '../assets/Netflix_Logo_PMS.png'

const Navbar = () => {
  function isActiveLink({isActive}){
    return isActive? "font-semibold text-white" : ""
  }
  return (
    <div className="py-3 px-6 grid grid-cols-[auto_auto_200px] text-gray-400">
      

      <section >
      <Link to="/browse"><img className='h-16 w-36 object-contain' src={NetlifyImage} alt="Netlify_logo"  /></Link>

      </section>
      <section >
        <ul className="flex gap-4">
          <li>
      <NavLink  className={isActiveLink} to="/browse">Home</NavLink>
          </li>
          <li>
      <NavLink className={isActiveLink} to="/browse/shows">TV Shows</NavLink>
          </li>
          <li>
            <NavLink className={isActiveLink} to='/browse/movies'>Movies</NavLink>
          </li>
          <li>
            <NavLink className={isActiveLink} to='/latest'>New & Popular</NavLink>
          </li>
        </ul>
      </section>
      <section>
      Secondary Data
      
      </section>
      {/* <Link to='/browse'>B</Link> */}
   
    </div>
  );
};

export default Navbar;
