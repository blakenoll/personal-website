import React from 'react'
import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: dodgerblue;
`

export const Wrapper = styled.section`
  padding: 6rem;
  background: #fff;
  color: dodgerblue;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -80px;
    right: 0;
    border-bottom: 80px solid #fff;
    border-left: 80px solid transparent;
    width: 35%;
  }
`

export const Container = styled.div` 
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`
export const Row = styled.div`
  display: flex;
  flex: ${props => props.flex ? props.flex : "initial"};
  flex-direction: row;
  align-content: ${props => props.alignContent ? props.alignContent : "initial"};
  justify-content: ${props => props.justifyContent ? props.justifyContent : "initial"};

  @media screen and (max-width: 768px) {
    flex-direction: ${props => props.mobile ? "column-reverse" : "row"};
  }
`
export const Column = styled.div`
  
  flex: ${props => props.flex ? props.flex : "initial"};
  flex-direction: column;
  align-content: ${props => props.alignContent ? props.alignContent : "initial"};
  justify-content: ${props => props.justifyContent ? props.justifyContent : "initial"};
  margin: ${props => props.margin ? props.margin : "0"};
  width: ${props => props.width ? props.width : "auto"};
`

export const HeroImage = styled.div`
  height: auto;
  background: linear-gradient(45deg, rgba(30,144,255,.4), rgba(30,144,255,.1)), url(https://blakenoll.com/img/michael-olsen-411871-unsplash.jpg) no-repeat top center scroll;
  background-size: cover;
  padding: 6rem 0 0rem;
  color: white;
`

export const Button = styled.a`
  background: ${props => props.bgcolor ? props.bgcolor : "dodgerblue"};
  color: ${props => props.color ? props.color : "white"};
  font-size: 1rem;
  font-weight: 500;
  margin: 20px 20px 20px 0px;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 50px;
  box-shadow: 0 1px 4px rgba(0,0,0,.16);
  transition: background .5s;

  &:hover {
    background: rgba(30, 144, 255, .8);

  }
`

export const SocialButton = styled.a`
  margin: 20px 20px 20px 0px;
  transition: background .5s;

  i {
    display: inline-block;
    border-radius: 60px;
    box-shadow: 0px 0px 2px #888;
    padding: 0.5em 0.6em;
    font-size: 1.5rem;
    background: ${props => props.bgcolor ? props.bgcolor : "dodgerblue"};
    color: ${props => props.color ? props.color : "white"};
      &:hover {
       background: rgba(30, 144, 255, .8);
      }
  }
`