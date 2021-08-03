import React from 'react'
import styled from 'styled-components'

import {
  pop_semiBold,
  pop_reg,
  Poppins,
  
} from "../../utilities/Type";


export const AlertIcon = styled.img`
position: absolute;
left: 8px;
width: 17px;
height:17px;

`
export const DefaultAlert = styled.button`
  position: relative;
  display: flex;
  border: 1px solid #9EE8FF;
  justify-content: center;
  align-items: center;
  //padding: 7px 8px;
  width: 100%;
  height: 42.28px;
  background: rgba(158, 232, 255, 0.2);
  box-sizing: border-box;
  border-radius: 2px;
  font-family: ${Poppins};
  font-size: 16px;

`

export const XContainer = styled.img`
width: 15px;
height: 15px;
color: #CBCBCB;
position: absolute;
right: 13px;

`

export const WarningAlert = styled(DefaultAlert)`
background: rgba(255, 250, 225);
border: 1px solid rgba(254,239,158);

`
export const ErrorAlert = styled(DefaultAlert)`
  background: rgba(234, 74, 70, 0.2);
  border: 1px solid #E6211E;
 
`