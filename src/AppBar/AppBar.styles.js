import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.nav`
    height: 50px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    font-size: 25px;
    color: white;
    &.active {
    color: blue;
    margin-right: 15px;
   //  &: first-child {
   //     margin-right: 15px;
   //  }
     &:last-child {
       margin-left: 15px;
    }
 }
`;



