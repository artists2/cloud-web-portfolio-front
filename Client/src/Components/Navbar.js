import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { TopmenuData } from "./TopmenuData";
import "./Navbar.css";
import { IconContext } from "react-icons";
// import "react-toastify/dist/ReactToastify.css";

// toast.configure();

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showsidebar = () => setSidebar(!sidebar);

  // const notify = () => {
  //   toast("금액이 ~~~ 이 되었습니다!");
  // };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showsidebar} />
          </Link>
          <div className="Cloud-name">
            <h2>Cloud Portfolio</h2>
          </div>
          <ul className="top-menu-items">
            {TopmenuData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>{item.icon}</Link>
                </li>
              );
            })}
            {/* <li>
              <Link to="#" onClick={notify}>
                <AiIcons.AiOutlineBell />
              </Link>
            </li> */}
          </ul>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showsidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
