import styled from "styled-components";

export const SliderWrapper = styled.input`
  -webkit-appearance: none;
  width: 300px;
  height: 2px;
  border-radius: 25px;  
  background: #e7f0fa;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  cursor: pointer;
 

  &::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%; 
  background: #c0c5cc;
}
`