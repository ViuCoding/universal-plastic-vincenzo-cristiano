import { NavLink } from "react-router-dom";
import "./Navbar.css";
import discActive from "../../assets/icons/discActive.png";
import cloudActive from "../../assets/icons/cloudActive.png";

export default function Navbar() {
  return (
    <nav className='py-4 px-8 flex justify-center gap-[72px]'>
      <NavLink to='/'>
        <img src={discActive} alt='Nav icon homepage' />
      </NavLink>
      <NavLink to='/weather'>
        <img src={cloudActive} alt='Nav icon weather' />
      </NavLink>
    </nav>
  );
}
