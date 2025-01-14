import styled from 'styled-components'
import { pop_reg, PopHeader, PopSaveBtn } from '../../../utilities/Type'

export const SaveModalWrapper = styled.div`
  position: relative;
  width: 426px;
  height: 453px;
  border: 1px solid #BBBBBB;
  box-sizing: border-box;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`

export const SaveHeader = styled.p`
  position: absolute;
  top: 56.94px;
  left: 55px;
  margin: 0;
  padding: 0;
  width: 327px;
  height: 54px;
  font: ${PopHeader};
  line-height: 54px;
  text-align: center;
`

export const SaveSubHeader = styled.p`
  position: absolute; 
  top: 112px;
  left: 48px;
  margin: 0;
  padding: 0;
  width: 339px;
  height: 80px;
  font: ${pop_reg} ;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
`

export const SaveButton = styled.button`
  position: absolute;
  padding: 0;
  margin: 0;
  bottom: 110px;
  left: 82px;
  width: 280px;
  height: 50px;
  font: ${PopSaveBtn};
  line-height: 28px;
  text-align: center;
  border: none;
  color: #274D4F;
  background: #78D6DA;
  border-radius:5px;
  cursor: pointer;
`
export const DontSaveButton = styled.button`
  position: absolute;
  bottom: 40px;
  left: 73px;
  width: 280px;
  height: 50px;
  font: ${PopSaveBtn};
  line-height: 28px;
  text-align: center;
  border: none;
  background: #366062;
  color: #FFF;
  border-radius: 5px;
  cursor: pointer;
`