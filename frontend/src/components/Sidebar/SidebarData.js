import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Twitter User",
    path: "/twitterHandle",
    icon: <FaIcons.FaUser />,
    cName: "nav-text",
  },
  {
    title: "Tweet",
    path: "/tweet",
    icon: <RiIcons.RiQuillPenFill />,
    cName: "nav-text",
  },
  {
    title: "Keyword",
    path: "/keyword",
    icon: <FaIcons.FaSortAlphaDown />,
    cName: "nav-text",
  },
];
