import React, { useState } from "react";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData, SidebarDataFooter } from "./SidebarData";
import SubMenu from "./SubMenu";
import { SubMenuFooter } from "./SubMenu";
import { Nav } from "react-bootstrap";
import { IconContext } from "react-icons/lib";

const SidebarNav = styled.nav`
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{}}>
        <Nav className="customSideBar">
          <Nav to="#" className="openSideBar">
            <FaIcons.FaBars className="openSideBarSvg" onClick={showSidebar} />
          </Nav>
        </Nav>

        <SidebarNav sidebar={sidebar} className="customSidebarNav">
          <SidebarWrap>
            <Nav to="#" className="NavIcon">
              <AiIcons.AiOutlineClose
                className="openSideBar"
                onClick={showSidebar}
              />
            </Nav>

            {SidebarData.map((item) => {
              return <SubMenu item={item} key={item.id} />;
            })}
          </SidebarWrap>

          <SidebarNav sidebar={sidebar} className="SubMenuFooter">
            <SidebarWrap>
              {SidebarDataFooter.map((item) => {
                return <SubMenuFooter item={item} key={item.id} />;
              })}
            </SidebarWrap>
          </SidebarNav>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}
