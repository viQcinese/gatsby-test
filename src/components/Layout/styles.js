import styled from "styled-components"

export const Title = styled.h1`
  color: red;
`

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 70px;
  background: black;
  padding: 0 20px;

  box-shadow: 0px 1px 5px rgb(0, 0, 0, 0.4);
`

export const NavbarContent = styled.div`
  width: 760px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    span {
      color: white;
      margin-right: 6px;
      font-size: 28px;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-items: center;

    img {
      height: 50px;
    }
  }
`

export const Content = styled.div`
  width: 760px;
  margin: auto;
`

export const Footer = styled.div`
  background: #000;
  box-shadow: 0px 1px 5px rgb(0, 0, 0, 0.4);
  height: 240px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
`
