import styled, { css } from "styled-components";

const buttonStyles = css`
border: 3px solid #ffffff;
background: transparent;
cursor: pointer;
border-radius: 30px;
font-weight: 500;
font-size: 20px;
padding: 10px 20px;
color: #ffffff;
margin-right: 50px;

&:hover {
    color: #ff0000;
    background: #ffffff;
    font-weight: 600;
}

`

export const ButtonRed = styled.button`
${buttonStyles}

background: #ff0000;
border: 4px solid transparent;
box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

&:hover{
box-shadow: 0px 0px 7px 15px rgb(255 0 0 /30%);
background: #ff0000;
color: #ffffff;

}
`
export const ButtonWhite = styled.button`
${buttonStyles}
`