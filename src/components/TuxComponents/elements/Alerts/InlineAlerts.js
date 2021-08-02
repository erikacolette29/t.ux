import React from 'react'
import styled, { css } from "styled-components";

import { pop_semiBold, pop_reg, Poppins } from "../../utilities/Type";

export const AlertIcon = styled.img`
position: absolute;
left: 25px;
width: 12px;
height: 12.75px;
`


export const XMarker = styled.img`
position: absolute;
right: 25px;
width: 13px;
align-items: center;
justify-content: center;


`

export const ImgButton = styled.button`
display: flex;
border: none;
background: none;
position: absolute;
align-items: center;
right: 5px;
&:hover {
  cursor: pointer;
}
`

export const DefaultAlert = styled.button`
  display: flex;
  border: 1px solid #9EE8FF;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 42.28px;
  background: rgba(158, 232, 255, 0.2);
  box-sizing: border-box;
  border-radius: 2px;
  font: ${Poppins};
  font-size: 16px;
`
export const SuccessAlert = styled(DefaultAlert)`
  border: 1px solid #78C077;
  background: rgba(120, 192, 119, 0.2);

`
export const WarningAlert = styled(DefaultAlert)`
  background: rgba(255, 228, 92, 0.2);
  border: 1px solid #FFE45C;

`
export const ErrorAlert = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 7px 8px;
  width: 100%;
  height: 42.28px;
  background: rgba(234, 74, 70, 0.2);
  border: 1px solid #E6211E;
  box-sizing: border-box;
  border-radius: 2px;
font: ${Poppins};
font-size: 16px;
`








