import { NavLink } from "react-router-dom";

const NavLinks = ({ display = '', goTo = '', className = "flex-col px-3" }) => {
    return (
        <div className={className}>
            <NavLink to={goTo}>
                {display}
            </NavLink>
        </div>
    );
  }
  
  export default NavLinks