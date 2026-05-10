import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container id="index">
        <Title>JUNWON LEE</Title>
        <Subtitle>멋쟁이사자처럼 14기</Subtitle>
        <Nav>
            <NavLink href="#about">ABOUT</NavLink>
            <NavLink href="#interest">INTEREST</NavLink>
            <NavLink href="#contact">CONTACT</NavLink>
        </Nav>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    background-color: #2C2C2C;
    color: #F5F0EB;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-size: 72px;
    margin: 0;
`

const Subtitle = styled.p`
    color: #A89F95;
`

const Nav = styled.nav`
    width: 50vw;
    display: inline-flex;
    justify-content: space-around;
    margin: 60px 0;
`

const NavLink = styled.a`
    color: #F5F0EB;
    text-decoration: none;
`