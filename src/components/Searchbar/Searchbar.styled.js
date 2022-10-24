import styled from "styled-components";

export const SearchForm = styled.form`
>button{
    margin-right: 10px;
    width: 100px;
    height: 50px;
border-radius:4px; 
      text-decoration: none;
  color: black;
      font-weight: 500;
      background-color: transparent;
  &:focus {
      font-weight: 500;
    color: white;
    background-color: orangered;
    border-color:transparent; 
  }
}
`


export const Input = styled.input`
width:300px;
height: 20px;
font-size: medium;
`