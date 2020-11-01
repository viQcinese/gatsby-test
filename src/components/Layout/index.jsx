import React from "react"
import { Link } from "gatsby"

import { HiOutlineChevronDown } from "react-icons/hi"

import logoWhite from "../../assets/viQ-white.png"

import GlobalStyle from "../../styles/global"

import { Navbar, NavbarContent, Content, Footer } from "./styles"

export default function Layout({ title, children }) {
  return (
    <>
      <GlobalStyle />
      <Navbar>
        <NavbarContent>
          <Link to="/">
            <img src={logoWhite} alt="viQ" />
          </Link>
          <div>
            <span>EN-US</span>
            <HiOutlineChevronDown size={20} color="white" />
          </div>
        </NavbarContent>
      </Navbar>

      <Content>
        <h1>{title}</h1>
        {children}
      </Content>
      <Footer>
        <p>footer</p>
      </Footer>
    </>
  )
}
