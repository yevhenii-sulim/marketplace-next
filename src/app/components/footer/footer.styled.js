import styled from 'styled-components';


export const FooterContainer = styled.footer`
  font-family: 'Jost';
  position: absolute;
  background: #9DE1A4;
  bottom: 0;
  left: 0;
  width: 100%;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 428px auto;
  gap: 109px;
  width: 1440px;
  padding-left: 58px;
  padding-right: 58px;
  margin: auto;
  h3 {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: -0.32px;
    font-family: 'Jost';
  }
`;
export const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const Contacts = styled.div`
  h3 {
    margin-bottom: 28px;
  }
`;
export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  p {
    font-size: 22px;
    line-height: 1.45;
  }
`;
export const ContactList = styled.ul`
  display: grid;
  grid-template: repeat(2, auto) / repeat(4, 1fr);
  row-gap: 24px;
  justify-content: space-between;
`;
export const Hug = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #555; /* Example color */
  margin-top: 20px;
`;