import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { TMDBSearchResult } from '../../types/types';
import { StyledCenterChildren } from './MovieDetails.styled';

const openAnimation = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25%, 75% {
    transform: translateY(0) rotate(-40deg);
  }
  50% {
    transform: translateY(0) rotate(-40deg);
  }
`;

const ClapperContainer = styled.div`
  background-color: #111;
  height: 100%;
  min-height: 500px;
  width: 100%;
  max-width: 650px;
  border-radius: 15px;
  position: relative;
  :hover {
    & > div {
      animation: ${openAnimation} 1s linear;
      animation-iteration-count: 3, infinite;
    }
  }
`;

const ClapperPiece = styled.div`
  background: repeating-linear-gradient(
    135deg,
    #111 0%,
    #111 10%,
    #fff 10%,
    #fff 20%
  );
  height: 70px;
  width: 660px;
  position: absolute;
  top: 0;
  border-radius: 15px;
  transform-origin: left;
`;

const Clapperboard = () => (
  <ClapperContainer>
    <ClapperPiece />
  </ClapperContainer>
);

export const MovieDetails = ({
  movieState,
}: {
  movieState: TMDBSearchResult;
}) => {
  return (
    <StyledCenterChildren>
      <Clapperboard />
    </StyledCenterChildren>
  );
};
