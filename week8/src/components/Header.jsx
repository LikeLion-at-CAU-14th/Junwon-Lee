import React from 'react'
import styled from 'styled-components'

const Header = ({ title }) => {
  return (
    <HeaderContainer>
			<h2>{title}</h2>
			<HomeLink href="#index">HOME</HomeLink>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
	background-color: #F5F0EB;
	font-size: 16px;
	color: #2c2c2c;
	padding: 10px 20px;
	margin: 40px 0;
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const HomeLink = styled.a`
	text-decoration: none;
	font-size: 16px;
	color: #2c2c2c;
`