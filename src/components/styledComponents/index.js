import styled, { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Karla|Lato');
  :root {
    --bg: #121212;
    --primary: #8dc9fa;
    --primary-hover: #91cbfa;
    --secondary: #ffc97d;
    --secondary-hover: #fecb82;
    --white: #ffffff;
    --hi-emph: #e0e0e0;
    --med-emph: #a0a0a0;
    --lo-emph: #6b6b6b;
    --dp-1: #1d1d1d;
    --dp-2: #222222;
    --dp-3: #252525;
    --dp-4: #272727;
    --dp-6: #2c2c2c;
  }
  * {
    box-sizing: border-box;
  }
  body {
     background: var(--bg);
  }
  p {
    color: var(--med-emph);
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: dodgerblue;
`;

export const Wrapper = styled.section`
  padding: 3rem 0rem;
  background: #fffaff;
  color: dodgerblue;
  position: relative;
  box-shadow: 0 7px 14px -3px rgba(45, 35, 66, 0.3),
    0 2px 4px 0 rgba(45, 35, 66, 0.4), inset 0 -2px 0 0 #cfd1e3;
  &::before {
    content: "";
    position: absolute;
    top: -40px;
    right: 0;
    border-bottom: 40px solid #fffaff;
    border-left: 40px solid transparent;
    width: 35%;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem 0rem;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1rem;
  padding-top: 0;
`;
export const Row = styled.div`
  display: flex;
  flex: ${props => (props.flex ? props.flex : "initial")};
  flex-direction: row;
  flex-wrap: ${props => (props.wrap ? props.wrap : "initial")};
  align-content: ${props =>
    props.alignContent ? props.alignContent : "initial"};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "initial"};

  @media screen and (max-width: 768px) {
    flex-direction: ${props => (props.mobile ? "column-reverse" : "row")};
  }
`;
export const Column = styled.div`
  flex: ${props => (props.flex ? props.flex : "initial")};
  flex-direction: column;
  align-content: ${props =>
    props.alignContent ? props.alignContent : "initial"};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "initial"};
  margin: ${props => (props.margin ? props.margin : "0")};
  width: ${props => (props.width ? props.width : "auto")};
`;

export const HeroImage = styled.div`
  min-height: calc(100vh - 50px);
  background: url(${props => props.image});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--white);
  margin-top: 50px;
`;

export const Button = styled.a`
  background: var(--secondary);
  color: var(--bg);
  font-size: 1rem;
  font-weight: 500;
  margin: 20px 0px 20px 20px;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 50px;
  transition: background, box-shadow 0.2s;

  &:first-child {
    margin: 20px 0;
  }

  &:hover {
    background: var(--secondary-hover);
  }

  span {
    margin-left: 8px;
  }
`;

export const SocialButton = styled.a`
  margin: 20px 20px 20px 0px;
  i {
    display: inline-block;
    border-radius: 60px;
    background: var(--dp-6);
    padding: 0.5em 0.6em;
    font-size: 1.5rem;
    color: var(--primary);
    transition: background;

    &:hover {
      background: var(--dp-2);
    }
  }

  &:last-child {
    margin: 20px 0;
  }
`;
