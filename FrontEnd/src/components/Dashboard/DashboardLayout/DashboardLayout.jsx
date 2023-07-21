import styled from "styled-components";
import { Sidebar } from "../Sidebar";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { DashboardHeader } from "../DashboardHeader";
import { ProfileColumn } from "../ProfileColumn";
import { useMediaQuery } from "react-responsive";
const Container = styled.div`
  position: relative;
  display: flex;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(62px);
  background-size: 400% 400%;
  justify-content: center;
`;

const StyleLayout = styled.div`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(62px);
  min-height: 1450px;
  max-width: 1728px;
  width: 100%;
  display: flex;
  flex-direction: row;
  .right {
    float: right;
    width: 75%;
  }
  @media screen and (max-width: 1224px) {
    .right {
      width: 90%;
    }
  }
`;
const SideBarStyled = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.04);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  float: left;
  width: 25%;
  height: 1450px;
  @media screen and (max-width: 1224px) {
    width: 10%;
  }
`;
export const DashboardLayout = () => {
  const location = useLocation();
  const { id, orderId } = useParams();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1620px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1620px)",
  });
  return (
    <Container>
      <StyleLayout>
        {(isTabletOrMobile ||
          location.pathname === `/mainboard/video-player/${orderId}/${id}`) && (
          <>
            <SideBarStyled style={{ width: "10%", maxWidth: "123px" }}>
              <Sidebar />
            </SideBarStyled>
            <div className="right" style={{ width: "90%" }}>
              <DashboardHeader />
              <Outlet />
            </div>
          </>
        )}
        {isDesktopOrLaptop &&
          location.pathname !== `/mainboard/video-player/${orderId}/${id}` && (
            <SideBarStyled>
              <Sidebar />
            </SideBarStyled>
          )}{" "}
        {location.pathname !== "/mainboard/dashboard" &&
          location.pathname !== `/mainboard/video-player/${orderId}/${id}` && (
            <>
              <div className="right">
                <DashboardHeader />
                <Outlet />
              </div>
            </>
          )}
        {location.pathname === "/mainboard/dashboard" && (
          <>
            {isDesktopOrLaptop && (
              <>
                <div className="right" style={{ width: "50%" }}>
                  <DashboardHeader />
                  <Outlet />
                </div>
                <ProfileColumn />
              </>
            )}
            {isTabletOrMobile && (
              <div className="right">
                <DashboardHeader />
                <Outlet />
              </div>
            )}
          </>
        )}
      </StyleLayout>
    </Container>
  );
};
