import styled from 'styled-components';

export const VelocityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  min-width: ${props => props.minWidth || '250px'};
`

export const VelocityLabel = styled.label`
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
  padding-right: 0.5rem;
`

export const VelocityInput = styled.input`
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: bold;
`

export const VelocitySlider = styled.input`
  -webkit-appearance: none;
  width: 300px;
  height: 2px;
  border-radius: 25px;  
  background: #e7f0fa;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  
  &::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%; 
  background: #c0c5cc;
  cursor: pointer;
}
`
