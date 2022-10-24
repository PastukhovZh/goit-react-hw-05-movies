import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HomeWrap = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
   */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`

export const ListMovie = styled.li`
width: 300px;
outline: 1px solid black;
border-radius: 4px;
>a>h3{
text-align: center;
}
>a>p{
text-align: center;
}
`

export const Link = styled(NavLink)`
width: 300px;
`