import styled from "styled-components";
import logo from 'assets/icons/logo192.png'
import userIcon from 'assets/icons/user-regular.svg'
import searchIcon from 'assets/icons/magnifying-glass-solid.svg'
import cartIcon from 'assets/icons/cart-shopping-solid.svg'
const HeaderStyled = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    padding: 4px 20px 4px 12px;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    .left-header {
        display: flex;
        align-items: center;
        margin-left: 16px;
    }
    .logo-text {
        margin-left: 8px;
        font-size: 22px;
        font-weight: 600;
    }
    .right-header {
        display: flex;
        flex-direction: row;
        gap: 30px;
    }
`
const Header = () => {
    return <HeaderStyled>
        <div className="left-header">
            <img src={logo} style={{ width: '50px' }} />
            <p className="logo-text">mahabis</p>
        </div>
        <div className="right-header">
            <p>Men</p>
            <p>Women</p>
            <p>Rewards</p>
            <p>Gifting</p>
            <p>About us</p>
            <p>Help</p>
            <img src={userIcon} style={{ width: '20px' }} />
            <img src={searchIcon} style={{ width: '20px' }} />
            <img src={cartIcon} style={{ width: '20px' }} />
        </div>
    </HeaderStyled>
}
export default Header;