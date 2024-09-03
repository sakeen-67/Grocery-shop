import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  animation: ${fadeIn} 2s ease-in-out;
  font-family: 'Arial, sans-serif';
  color: #333;
`;

const Header = styled.header`
  background-color: #ff6b6b;
  padding: 20px;
  text-align: center;
  color: #fff;
  font-size: 1.5em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
`;

const Section = styled.section`
  padding: 60px 20px;
`;

const Name = styled.h1`
  font-size: 4em;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Description = styled.p`
  font-size: 1.5em;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const Contact = styled.div`
  margin-top: 40px;
  font-size: 1.2em;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #ff6b6b;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ff4757;
  }
`;

const Footer = styled.footer`
  background-color: #ff6b6b;
  padding: 10px;
  text-align: center;
  color: #fff;
  font-size: 1em;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
`;

function Portfolio() {
  return (
    <Container>
      <Header>
        <Nav>
          <NavLink to="about" smooth={true} duration={500}>About</NavLink>
          <NavLink to="projects" smooth={true} duration={500}>Projects</NavLink>
          <NavLink to="contact" smooth={true} duration={500}>Contact</NavLink>
        </Nav>
      </Header>
      <MainContent>
        <Section id="about">
          <Name>Mohiit V</Name>
          <Description>Web Developer | Designer | Content Creator</Description>
        </Section>
        <Section id="projects">
          <h2>Projects</h2>
          <p>Here are some of my recent projects.</p>
        </Section>
        <Section id="contact">
          <Contact>
            <p>Email: mohiit@example.com</p>
            <p>LinkedIn: linkedin.com/in/mohiit</p>
            <Button href="mailto:mohiit@example.com">Contact Me</Button>
          </Contact>
        </Section>
      </MainContent>
      <Footer>
        &copy; {new Date().getFullYear()} Mohiit. All rights reserved.
      </Footer>
    </Container>
  );
}

export default Portfolio;
