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

export const DisplayFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: center;
  align-items: center;
  height: ${props => props.height || 'auto'};
`

export const ImageStar = styled.img`
  padding: 20px;
    filter: sepia(${props => props.sepia}%) hue-rotate(${props => props.hueRotate}deg) saturate(${props => props.saturate}0%);

  //blue
  //filter: sepia(1%) hue-rotate(190deg) saturate(5000%);
  //red
  //filter: sepia(4%) hue-rotate(1deg) saturate(10000%);
  transition: 2s ease;
`
