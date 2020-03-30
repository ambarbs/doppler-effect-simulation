import styled from 'styled-components';
import night from '../../assets/night.jpg';

export const AppWrapper = styled.div`
  //background-color: #38423f;
  background-image: url(${night});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`
