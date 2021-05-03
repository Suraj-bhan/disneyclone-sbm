import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Nav>
            <Logo src="/logo.svg"/>
            <NavMenu>
              <a href="#">
                  <img src="/home-icon.svg" alt="home-icon"/>
                  <span>HOME</span>
              </a>
              <a href="#">
                  <img src="/search-icon.svg" alt="home-icon"/>
                  <span>SEARCH</span>
              </a>
              <a href="#">
                  <img src="/watchlist-icon.svg" alt="home-icon"/>
                  <span>WATCHLIST</span>
              </a>
              <a href="#">
                  <img src="/original-icon.svg" alt="home-icon"/>
                  <span>ORIGINALS</span>
              </a>
              <a href="#">
                  <img src="/movie-icon.svg" alt="home-icon"/>
                  <span>MOVIES</span>
              </a>
              <a href="#">
                  <img src="/series-icon.svg" alt="home-icon"/>
                  <span>SERIES</span>
              </a>

            </NavMenu>
            <UserImg/>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px`

  const Logo = styled.img`
  width: 80px;
  `
  const NavMenu = styled.div`
  display: flex;
  flex:1;
  margin-left: 20px;
  align-items: center;

  a{  text-decoration: none;
      display:flex;
      align-items: center;
      padding: 0 12px;
      cursor: pointer;
      color: white;

      img{
          height: 20px;
      }
      span{
          font-size: 13px;
          letter-spacing: 1.42px;
          position: relative;

          &:after {
              content: "";
              height: 2px;
              background: white;
              position: absolute;
              left:0;
              right:0;
              bottom:-6px;
              opacity: 0;
              transform-origin: left center;
              transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
              transform: scaleX(0);
          }
      }

      &:hover {
          span:after{
              transform: scaleX(1);
              opacity:1;
          }
      }

  }
  `
  const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  `
