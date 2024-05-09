// components/Footer.js
"use client"

import Logo from '../header/Logo/Logo';
import { team } from '../../data/team';
import {
  About,
  AboutContent,
  ContactList,
  Contacts,
  Container,
  FooterContainer,
} from './Footer.styled';
import ContactComponent from '../ContactComponent/ContactComponent'
import { Hug } from './Footer.styled'; 
// import ContactComponent from 'components/ContactComponent/ContactComponent';

function Footer() {
  return (
    <FooterContainer style={{ background: '#9DE1A4', color: '#000000' }}>
      <Container>
        <About>
          <Logo />
          <AboutContent>
            <h3>Про нас</h3>
            <p>
              Це командний Pet-проєкт, що ставить за ціль продемонструвати
              технічні навички, командність та софт скіли розподіленої команди
              молодих спеціалістів сфери розробки ІТ продуктів.
            </p>
          </AboutContent>
          <Hug>
       © Розробка "Team Challenge" 2024. Усі права захищені.
        </Hug>  
        </About>
       
        <Contacts>
          <h3>Наші контакти</h3>
          <ContactList>
            {team.map(({ id, name, spec, link }) => {
              return (
                <ContactComponent
                  key={id}
                  nameDev={name}
                  spec={spec}
                  link={link}
                />
              );
            })}
          </ContactList>
        </Contacts>
      </Container>
    </FooterContainer>
  );
}
export default Footer;
