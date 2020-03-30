import styled from 'styled-components';

export const ImageStar = styled.img`
  padding: 20px;
  filter: sepia(${props => props.sepia}%) hue-rotate(${props => props.hueRotate}deg) saturate(${props => props.saturate}0%);

  //blue
  //filter: sepia(1%) hue-rotate(190deg) saturate(5000%);
  //red
  //filter: sepia(4%) hue-rotate(1deg) saturate(10000%);
  transition: 2s ease;
`