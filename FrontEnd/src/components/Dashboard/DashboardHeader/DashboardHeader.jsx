import styled from "styled-components";
import { SearchBar } from "../SearchBar";
import { ReactComponent as BellIcon } from "../../../assets/icons/dashboardicon/bell-icon.svg";
import { ReactComponent as SettingIcon } from "../../../assets/icons/dashboardicon/Setting-Icon.svg";
import { ReactComponent as AvtHeadIcon } from "../../../assets/icons/dashboardicon/Avt-Icon.svg";
import { useMediaQuery } from "react-responsive";

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 58px 69px 0px 62px;
  .header-right {
    display: flex;
    flex-direction: row;
    gap: 41px;
  }
  @media screen and (max-width: 612px) {
    flex-direction: column;
    gap: 10px;
  }
`;
export const DashboardHeader = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 612px)" });
  return (
    <HeaderStyled>
      {!isSmallScreen && (
        <>
          <SearchBar setPlaceholder="Search tutor" />
          <div className="header-right">
            <BellIcon cursor="pointer" />
            <SettingIcon cursor="pointer" />
            <AvtHeadIcon cursor="pointer" />
          </div>
        </>
      )}
      {isSmallScreen && (
        <>
          <div className="header-right">
            <BellIcon cursor="pointer" />
            <SettingIcon cursor="pointer" />
            <AvtHeadIcon cursor="pointer" />
          </div>
          <SearchBar setPlaceholder="Search tutor" />
        </>
      )}
    </HeaderStyled>
  );
};
