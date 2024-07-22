import NavLink from "./NavLink";

const Nav = () => {
    return (
        <div className="w-full h-6 bg-gray-100 flex justify-items-end">
            <NavLink goTo="/" display="Home" />
            <NavLink goTo="/about" display="About" />
        </div>
    )
  }
  
  export default Nav