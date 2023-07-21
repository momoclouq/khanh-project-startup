import styled from "styled-components";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { ReactComponent as KitLogo } from "../../../assets/images/kits-logo.svg";
import { ReactComponent as DashboardIcon } from "../../../assets/icons/dashboardicon/dashboard-icon.svg";
import { ReactComponent as MessIcon } from "../../../assets/icons/dashboardicon/mess-icon.svg";
import { ReactComponent as MyTutorsIcon } from "../../../assets/icons/dashboardicon/mytutors-icon.svg";
import { ReactComponent as PurchaseIcon } from "../../../assets/icons/dashboardicon/purchase-icon.svg";
import { ReactComponent as SessionsIcon } from "../../../assets/icons/dashboardicon/sessions-icon.svg";
import { ReactComponent as ArrowPointDown } from "../../../assets/icons/dashboardicon/arrow-point-down.svg";
import { MyClassesCard } from "../MyClassesCard";
const StyledSidebar = styled.div`
  width: 100%;
  padding-left: 63px;
  padding-right: 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .KitLogo {
    margin-top: 59px;
    max-width: 99px;
    width: 100%;
  }
  .top-sidebar {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 50px;
    margin-top: 68px;
  }
  .noti {
    width: 17px;
    height: 17px;
    border-radius: 5px;
    background: #ff8282;
  }
  .class-text {
    color: #c7c4c4;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 22px 0px 22px 0px;
  }
  .bottom-sidebar {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 50px;
  }
  .show {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 23.93px;
    cursor: pointer;
    color: #cbcbcb;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .specpath {
    padding: 0px;
    align-items: center;
    .show {
      text-align: center;
      justify-content: center;
    }
    .bottom-sidebar {
      margin-top: 75.49px;
    }
  }
  @media screen and (max-width: 1224px) {
    padding: 0px;
    align-items: center;
    .show {
      text-align: center;
      justify-content: center;
    }
    .bottom-sidebar {
      margin-top: 75.49px;
    }
  }
`;
const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7a797d;
  a {
    display: flex;
    text-decoration: unset;
    color: #7a797d;
    align-items: center;
    gap: 16px;
  }
  .active {
    svg {
      path {
        stroke: #0c4ca3;
        fill: #0c4ca3;
      }
    }
    color: #0c4ca3;
  }
  .NavLink {
    width: 100%;
  }
  @media screen and (max-width: 1224px) {
    padding: 0px;
    justify-content: center;
  }
`;
const NavSpecStyled = {
  padding: "0px",
  justifyContent: "center",
};
const SpecStyled = {
  padding: "0px",
  alignItems: "center",
};
const ShowSpecStyled = {
  textAlign: "center",
  justifyContent: "center",
};
const BottomSidebarStyled = {
  marginTop: "75.49px",
  alignItems: "center",
};
const NavItem = ({ path, text, icon, children }) => {
  const location = useLocation();
  const { id, orderId } = useParams();
  return (
    <StyledNavItem
      style={
        location.pathname === `/mainboard/video-player/${orderId}/${id}`
          ? NavSpecStyled
          : null
      }
    >
      <NavLink to={path}>
        {icon}
        {text}
      </NavLink>
      {children}
    </StyledNavItem>
  );
};
export const Sidebar = () => {
  const location = useLocation();
  const { id, orderId } = useParams();
  const [isOpen, setOpen] = useState(false);
  const toggleShowMore = () => setOpen(!isOpen);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <StyledSidebar
      style={
        location.pathname === `/mainboard/video-player/${orderId}/${id}`
          ? SpecStyled
          : null
      }
    >
      {isDesktopOrLaptop && <KitLogo className="KitLogo" height="36px" />}
      {isTabletOrMobile && <KitLogo className="KitLogo" height="36px" />}
      <div className="top-sidebar">
        {isDesktopOrLaptop &&
          location.pathname !== `/mainboard/video-player/${orderId}/${id}` && (
            <>
              <NavItem
                text="Dashboard"
                path="/mainboard/dashboard"
                icon={<DashboardIcon />}
              />
              <NavItem
                text="Messages"
                path="/mainboard/messages"
                icon={<MessIcon />}
              >
                <div className="noti" />
              </NavItem>
              <NavItem
                text="Sessions"
                path="/mainboard/sessions"
                icon={<SessionsIcon />}
              />
              <NavItem
                text="My Courses"
                path="/mainboard/my-courses"
                icon={<SessionsIcon />}
              />
              <NavItem
                text="Hour purchase history"
                path="/mainboard/hour-purchase-history"
                icon={<PurchaseIcon />}
              />
              <NavItem
                text="My tutors"
                path="/mainboard/my-tutors"
                icon={<MyTutorsIcon />}
              />
            </>
          )}

        {(isTabletOrMobile ||
          location.pathname === `/mainboard/video-player/${orderId}/${id}`) && (
          <>
            <NavItem path="/mainboard/dashboard" icon={<DashboardIcon />} />
            <NavItem path="/mainboard/messages" icon={<MessIcon />} />
            <NavItem path="/mainboard/sessions" icon={<SessionsIcon />} />
            <NavItem
              path="/mainboard/hour-purchase-history"
              icon={<PurchaseIcon />}
            />
            <NavItem path="/mainboard/my-tutors" icon={<MyTutorsIcon />} />
          </>
        )}
      </div>
      {isDesktopOrLaptop &&
        location.pathname !== `/mainboard/video-player/${orderId}/${id}` && (
          <div className="class-text">Classes</div>
        )}
      <div
        className="bottom-sidebar"
        style={
          location.pathname === `/mainboard/video-player/${orderId}/${id}`
            ? BottomSidebarStyled
            : null
        }
      >
        {isDesktopOrLaptop &&
          location.pathname !== `/mainboard/video-player/${orderId}/${id}` && (
            <>
              <MyClassesCard
                name="Design"
                quantity={5}
                newColor="#FED66F"
                path="/mainboard/my-classes"
              />
              <MyClassesCard
                name="Development"
                quantity={5}
                newColor="#77ADFF"
                path="/mainboard/my-classes"
              />
              <MyClassesCard
                name="Illustrations"
                quantity={5}
                newColor="#F66E6E"
                path="/mainboard/my-classes"
              />
              {isOpen && (
                <>
                  <MyClassesCard
                    name="Design"
                    quantity={5}
                    newColor="#FED66F"
                    path="/mainboard/my-classes"
                  />
                  <MyClassesCard
                    name="Development"
                    quantity={5}
                    newColor="#77ADFF"
                    path="/mainboard/my-classes"
                  />
                  <MyClassesCard
                    name="Illustrations"
                    quantity={5}
                    newColor="#F66E6E"
                    path="/mainboard/my-classes"
                  />
                </>
              )}
              {isOpen && (
                <div className="show" onClick={toggleShowMore}>
                  <ArrowPointDown style={{ transform: "rotate(180deg)" }} />
                  Show less
                </div>
              )}
              {!isOpen && (
                <div className="show" onClick={toggleShowMore}>
                  <ArrowPointDown />
                  Show more
                </div>
              )}
            </>
          )}
        {(isTabletOrMobile ||
          location.pathname === `/mainboard/video-player/${orderId}/${id}`) && (
          <>
            <MyClassesCard newColor="#FED66F" path="/mainboard/my-classes" />
            <MyClassesCard newColor="#FED66F" path="/mainboard/my-classes" />
            <MyClassesCard newColor="#FED66F" path="/mainboard/my-classes" />
            {isOpen && (
              <>
                <MyClassesCard
                  newColor="#FED66F"
                  path="/mainboard/my-classes"
                />
                <MyClassesCard
                  newColor="#FED66F"
                  path="/mainboard/my-classes"
                />
                <MyClassesCard
                  newColor="#FED66F"
                  path="/mainboard/my-classes"
                />
              </>
            )}
            {isOpen && (
              <div
                className="show"
                onClick={toggleShowMore}
                style={
                  location.pathname ===
                  `/mainboard/video-player/${orderId}/${id}`
                    ? ShowSpecStyled
                    : null
                }
              >
                <ArrowPointDown style={{ transform: "rotate(180deg)" }} />

                {isDesktopOrLaptop &&
                  location.pathname !==
                    `/mainboard/video-player/${orderId}/${id}` && (
                    <>Show less</>
                  )}
              </div>
            )}
            {!isOpen && (
              <div className="show" onClick={toggleShowMore}>
                <ArrowPointDown />
                {isDesktopOrLaptop &&
                  location.pathname !==
                    `/mainboard/video-player/${orderId}/${id}` && (
                    <>Show more</>
                  )}
              </div>
            )}
          </>
        )}
      </div>
    </StyledSidebar>
  );
};
