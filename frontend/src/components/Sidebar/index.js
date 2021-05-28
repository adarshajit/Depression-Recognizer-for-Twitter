import React, { useState } from "react";
import * as CgIcons from "react-icons/cg";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons/lib";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log(sidebar);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <CgIcons.CgMenuGridR onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
          </ul>
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
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
