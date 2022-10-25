import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
text-align: center;
max-width:80px;
padding: 10px;
margin: 10px;
background-color: whitesmoke;
border: 1px solid black;
border-radius: 4px;
  &.active {
    color: white;
    background-color: orangered;
  } 
`

export const GoBackLink = styled(NavLink)`
text-align: center;
max-width: 80px;
padding: 10px;
margin: 10px;
background-color: whitesmoke;
border: 1px solid black;
border-radius: 4px;
&:hover,
&:focus{
    color: white;
    background-color: orangered;
}
`

export const Wrap = styled.div`
display: flex;


`
export const HeaderWrap = styled.div`

`
export const InfoWrap = styled.div`
display: flex;
    align-items: center;

`

export const Wrapper = styled.div`
display: flex;
flex-direction:column;
`