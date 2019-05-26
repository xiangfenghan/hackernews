import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0;
    border-bottom: 1px solid #e3e3e3;
`

const Title = styled.h1`
    color: #009eb7;
    font-family: 'Ubuntu', sans-serif;
    font-size: 36px;
    text-align: center;
`

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-self: center;
    padding: 0;
`

const StyledNavLink = styled(NavLink)`
    flex: 0 0 auto;
    align-self: center;
    padding: 10px 15px;
    margin: 0 0 0 10px;
    color: #666666;
    font-family: 'Ubuntu', sans-serif;
    text-decoration: none;
    border-radius: 5px;

    &:hover {
        color: #ffffff;
        background-color: #00bbd8;
    }
`

const HeaderLink = ({ children, ...props }) => (
    <StyledNavLink
      exact
      activeStyle={{
          backgroundColor: '#009eb7',
          color: '#ffffff'
      }}
      {...props}
    >
      {children}
    </StyledNavLink>
  )

const Header = () => (
    <StyledHeader>
        <Title>Hacker News</Title>
        <StyledNav>
            <HeaderLink to="/">Home</HeaderLink>
        </StyledNav>
    </StyledHeader>
)

export default Header