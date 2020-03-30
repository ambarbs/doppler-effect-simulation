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


